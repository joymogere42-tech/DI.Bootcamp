import express from "express"
import { authenticateToken } from "../middleware/authenticate"
import { createStory, getStories, updateStory, deleteStory } from "../controllers/stories"

const router = express.Router()

router.use(authenticateToken)

router.get("/", getStories)
router.post("/", createStory)
router.patch(":id", updateStory)
router.delete(":id", deleteStory)

export default router
