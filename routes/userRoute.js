import express from "express"
import { getUser,createUser, updateUser, deleteUser,getUserNameAndId,getUserById } from "../controllers/userController.js"

const router = express.Router()

router.get('/user',getUser)
router.get('/user/:id',getUserById)
router.post('/user',createUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)
router.get('/user/:name/:id',getUserNameAndId)

export default router;
