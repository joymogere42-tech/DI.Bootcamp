import { Request, Response } from "express"
import db from "../db"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const SALT_ROUNDS = 10

export const registerController = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body
    if (!username || !email || !password) return res.status(400).json({ message: "All fields are required." })

    const existing = await db.query("SELECT id FROM users WHERE email = $1", [email])
    if (existing.rows.length) return res.status(400).json({ message: "Email already in use" })

    const password_hash = await bcrypt.hash(password, SALT_ROUNDS)
    const result = await db.query("INSERT INTO users (username, email, password_hash) VALUES ($1,$2,$3) RETURNING id, username, email", [username, email, password_hash])
    const user = result.rows[0]
    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: "15m" })
    const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_SECRET as string, { expiresIn: "7d" })
    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === "production" })
    res.json({ accessToken, user })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to register" })
  }
}

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: "Email and password required" })

    const result = await db.query("SELECT id, username, email, password_hash FROM users WHERE email = $1", [email])
    if (!result.rows.length) return res.status(401).json({ message: "Invalid credentials" })
    const user = result.rows[0]
    const isMatch = await bcrypt.compare(password, user.password_hash)
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" })

    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: "15m" })
    const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_SECRET as string, { expiresIn: "7d" })
    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === "production" })
    res.json({ accessToken, user: { id: user.id, username: user.username, email: user.email } })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to login" })
  }
}

export const refreshController = (req: Request, res: Response) => {
  try {
    const token = req.cookies.refreshToken
    if (!token) return res.sendStatus(403)
    jwt.verify(token, process.env.REFRESH_SECRET as string, (err: any, payload: any) => {
      if (err) return res.sendStatus(403)
      const accessToken = jwt.sign({ userId: payload.userId }, process.env.JWT_SECRET as string, { expiresIn: "15m" })
      res.json({ accessToken })
    })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

export const logoutController = (req: Request, res: Response) => {
  res.clearCookie("refreshToken")
  res.json({ message: "Logged out" })
}
