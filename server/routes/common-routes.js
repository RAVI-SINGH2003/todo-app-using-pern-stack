import express from 'express';
import { createTodo, deleteTodo, getTodos } from '../controllers/common-controller.js';

const router = express.Router()

router.route("/todo").get(getTodos).post(createTodo);
router.delete("/todo/:id",deleteTodo)

export default router;