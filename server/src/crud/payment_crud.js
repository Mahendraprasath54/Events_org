const {Payment} = require('../model');
const dbFactory = require('../utils/dbfactory');

const addPayment = (data) => dbFactory.addPayment(Payment, data);
const getPayments = () => dbFactory.getAllPayments(Payment);
const getPaymentById = (id) => dbFactory.getPaymentById(Payment, id);
const updatePayment = (id, data) => dbFactory.updatePayment(Payment, id, data);
const deletePayment = (id) => dbFactory.deletePayment(Payment, id);

module.exports = { addPayment, getPaymentById, getPayments, updatePayment, deletePayment };
