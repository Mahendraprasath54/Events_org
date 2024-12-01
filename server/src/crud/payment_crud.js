const dbFactory = require('../utils/dbfactory');

const addPayment = (data) => dbFactory.paymentAdd(data);
const getPayments = () => dbFactory.paymentGetAll();
const getPaymentById = (id) => dbFactory.paymentGetById(id);
const updatePayment = (id, data) => dbFactory.paymentUpdate(id,data);
const deletePayment = (id) => dbFactory.paymentDelete(id);

module.exports = { addPayment, getPaymentById, getPayments, updatePayment, deletePayment };
