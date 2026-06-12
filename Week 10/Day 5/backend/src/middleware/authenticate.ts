import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export interface AuthRequest extends Request {
  user?: any
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const header = req.headers["authorization"] as string | undefined
  if (!header) return res.sendStatus(401)
  const token = header.split(" ")[1]
  if (!token) return res.sendStatus(401)
  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
