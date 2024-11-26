const paymentRouter = require('express').Router();
const paymentControl = require('../controller/payment_controller');

paymentRouter.post('/', paymentControl.createPayment);

paymentRouter.get('/', paymentControl.getAllPayments);

paymentRouter.get('/:id', paymentControl.getPaymentById);

paymentRouter.put('/:id', paymentControl.updatePayment);

paymentRouter.delete('/:id', paymentControl.deletePayment);

module.exports = paymentRouter;
