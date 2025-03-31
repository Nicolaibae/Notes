import { Router } from "express";
import{
    getAllNote,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
}from "../controller/note.controller"
const router = Router()

router.get("/getAllNote",getAllNote)
router.get("/getNoteById/:id",getNoteById)
router.post("/createNote",createNote)
router.post("/updateNote/:id",updateNote)
router.delete("/deleteNote/:id",deleteNote)

export default router