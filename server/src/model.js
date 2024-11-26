const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {
        name: { type: String, required: true },
        phoneNumber: String,
        dateOfBirth: Date,
        createdAt: { type: Date, default: Date.now },
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

// Event Schema
const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    date: { type: Date, required: true },
    location: String,
    maxParticipants: Number,
    registrationFee: Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['draft', 'published', 'completed'], default: 'draft' }
});

// Registration Schema
const registrationSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'paid'],
        default: 'pending'
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'processing', 'completed', 'failed'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        enum: ['wallet', 'bank', 'card']
    },
    paymentDetails: {
        transactionId: String,
        amount: Number,
        paidAt: Date
    },
    registeredAt: { type: Date, default: Date.now }
});

// Tournament Schema
const tournamentSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    brackets: [{
        round: Number,
        matches: [{
            participant1: { type: mongoose.Schema.Types.ObjectId, ref: 'Registration' },
            participant2: { type: mongoose.Schema.Types.ObjectId, ref: 'Registration' },
            winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Registration' },
            score: String,
            scheduledTime: Date,
            status: { type: String, enum: ['pending', 'in_progress', 'completed'] }
        }]
    }],
    status: { type: String, enum: ['setup', 'in_progress', 'completed'], default: 'setup' },
    rankings: [{
        participant: { type: mongoose.Schema.Types.ObjectId, ref: 'Registration' },
        rank: Number,
        score: Number
    }]
});

// Create and export models
const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);
const Registration = mongoose.model('Registration', registrationSchema);
const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = { User, Event, Registration, Tournament };
