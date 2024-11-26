const paymentCrud = require('../crud/payment_crud');

const getAllPayments = async (req, res) => {
    try {
        const result = await paymentCrud.getPayments();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getPaymentById = async (req, res) => {
    try {
        const result = await paymentCrud.getPaymentById(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Payment not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

const createPayment = async (req, res) => {
    try {
        const result = await paymentCrud.addPayment(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updatePayment = async (req, res) => {
    try {
        const result = await paymentCrud.updatePayment(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Payment not found' ? 404 : 400)
           .json({ success: false, message: error.message });
    }
};

const deletePayment = async (req, res) => {
    try {
        const result = await paymentCrud.deletePayment(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Payment not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllPayments,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment
};
