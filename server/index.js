require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./src/database');
const userRouter = require('./src/route/user_route');
const registrationRouter = require('./src/route/registration_route');
const paymentRouter = require('./src/route/payment_route');
const eventRouter = require('./src/route/event_route');
const tournamentRouter = require('./src/route/tournament_route');

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
dbConnect();

// Routes
app.use('/api/user', userRouter);
app.use('/api/registrations', registrationRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/events', eventRouter);
app.use('/api/tournaments', tournamentRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Something went wrong!' 
    });
});

// Start the server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
