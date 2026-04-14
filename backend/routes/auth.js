import express from 'express';
import { body } from 'express-validator';
import { register, login, requestPasswordReset, resetPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', [
  body('email').isEmail().withMessage('Debe ser un correo válido'),
  body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/\d/).withMessage('La contraseña debe contener al menos un número')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('La contraseña debe contener al menos un carácter especial')
], register);

router.post('/login', [
  body('email').isEmail().withMessage('Debe ser un correo válido'),
  body('password').notEmpty().withMessage('La contraseña es requerida')
], login);

router.post('/reset-request', [
  body('email').isEmail().withMessage('Debe ser un correo válido')
], requestPasswordReset);

router.post('/reset-password', [
  body('token').notEmpty().withMessage('Token requerido'),
  body('newPassword').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/\d/).withMessage('La contraseña debe contener al menos un número')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('La contraseña debe contener al menos un carácter especial')
], resetPassword);

export default router;
