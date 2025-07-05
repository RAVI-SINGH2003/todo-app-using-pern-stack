import { prisma } from "../prisma/client.js";

export const createTodo = async (req, res) => {
  const data = req.body
  try {
    const todo = await prisma.todo.create({
      data,
    });

    return res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    console.error("Error creating Todo", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    return res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    console.error("Error fetching Todo", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await prisma.todo.delete({
      where: {
        id: +id,
      },
    });
    return res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    console.error("Error deleting Todo", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
