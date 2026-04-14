import Expense from '../models/Expense.js';
import { validationResult } from 'express-validator';

export const createExpense = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { date, category, amount, description } = req.body;
    const userId = req.user.userId;

    const expense = new Expense({
      userId,
      date,
      category,
      amount,
      description
    });

    await expense.save();

    res.status(201).json({
      message: 'Gasto registrado exitosamente',
      expense
    });
  } catch (error) {
    console.error('Error en createExpense:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const userId = req.user.userId;
    
    const expenses = await Expense.find({ userId }).sort({ date: -1 });

    res.json({ expenses });
  } catch (error) {
    console.error('Error en getExpenses:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const expense = await Expense.findOneAndDelete({ _id: id, userId });

    if (!expense) {
      return res.status(404).json({ message: 'Gasto no encontrado' });
    }

    res.json({ message: 'Gasto eliminado exitosamente' });
  } catch (error) {
    console.error('Error en deleteExpense:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};
