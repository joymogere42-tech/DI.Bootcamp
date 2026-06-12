import { Request, Response } from "express"
import db from "../db"

export const getStories = async (req: Request, res: Response) => {
  try {
    const result = await db.query("SELECT s.*, u.username as author FROM stories s LEFT JOIN users u ON s.author_id = u.id ORDER BY s.created_at DESC")
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to fetch stories" })
  }
}

export const createStory = async (req: any, res: Response) => {
  try {
    const { title, content } = req.body
    if (!title || !content) return res.status(400).json({ message: "Title and content required" })
    const result = await db.query("INSERT INTO stories (title, content, author_id) VALUES ($1,$2,$3) RETURNING *", [title, content, req.user.userId])
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to create story" })
  }
}

export const updateStory = async (req: any, res: Response) => {
  try {
    const { id } = req.params
    const { title, content } = req.body
    const story = await db.query("SELECT * FROM stories WHERE id = $1", [id])
    if (!story.rows.length) return res.status(404).json({ message: "Not found" })
    if (story.rows[0].author_id !== req.user.userId) return res.status(403).json({ message: "Not authorized" })
    const result = await db.query("UPDATE stories SET title=$1, content=$2, updated_at=NOW() WHERE id=$3 RETURNING *", [title || story.rows[0].title, content || story.rows[0].content, id])
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to update story" })
  }
}

export const deleteStory = async (req: any, res: Response) => {
  try {
    const { id } = req.params
    const story = await db.query("SELECT * FROM stories WHERE id = $1", [id])
    if (!story.rows.length) return res.status(404).json({ message: "Not found" })
    if (story.rows[0].author_id !== req.user.userId) return res.status(403).json({ message: "Not authorized" })
    await db.query("DELETE FROM stories WHERE id=$1", [id])
    res.json({ message: "Deleted" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to delete story" })
  }
}
