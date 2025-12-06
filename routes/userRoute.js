import express from "express"
import { getUser,createUser, updateUser, deleteUser,getUserNameAndId,getUserById, throwError, viewEngineTest, formDataTest } from "../controllers/userController.js"
import testMiddleware from "../middleware/testMiddleware.js"

const router = express.Router()

router.get('/user',testMiddleware, getUser)
router.get('/user/:id',getUserById)
router.post('/user',createUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)
router.get('/user/:name/:id',getUserNameAndId)
router.get('/view-engine',viewEngineTest)
router.get('/error',throwError)
router.get("/form", formDataTest)
export default router;
