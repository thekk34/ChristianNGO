const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    timings: { type: String, required: true },
    availableSeats: { type: Number, required: true },
    enrolledStudents: { type: Number, default: 0 },
    instructor: {
        name: { type: String, required: true },
        avatar: { type: String, default: '' }
    },
    status: { type: String, enum: ['active', 'upcoming', 'completed'], default: 'upcoming' }
});

module.exports = mongoose.model('Batch', batchSchema);
