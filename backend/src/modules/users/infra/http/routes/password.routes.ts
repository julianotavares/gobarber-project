import { Router } from 'express';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordRouter = new ForgotPasswordController();
const resetPasswordRouter = new ResetPasswordController();

passwordRouter.post('/forgot', forgotPasswordRouter.create);
passwordRouter.post('/reset', resetPasswordRouter.create);

export default passwordRouter;
