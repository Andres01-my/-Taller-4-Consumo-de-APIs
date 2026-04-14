import express from 'express';
import { body } from 'express-validator';
import { createExpense, getExpenses, deleteExpense } from '../controllers/expenseController.js';
import { authenticateToken } from '../middleware/auth.js';


const router = express.Router();

router.post('/', authenticateToken, [
  body('date').notEmpty().withMessage('La fecha es requerida'),
  body('category').isIn(['combustible', 'mantenimiento', 'repuestos', 'accesorios', 'seguro', 'otro']).withMessage('Categoría inválida'),
  body('amount').isFloat({ min: 0 }).withMessage('El valor debe ser mayor a 0'),
  body('description').notEmpty().withMessage('La descripción es requerida')
], createExpense);

router.get('/', authenticateToken, getExpenses);

router.delete('/:id', authenticateToken, deleteExpense);

export default router;
