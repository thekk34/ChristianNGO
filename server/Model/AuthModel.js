const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    number: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetToken: String,
    resetTokenExpiry: Date,
    
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const AuthModel = mongoose.model("Authentication", AuthSchema);
module.exports = AuthModel;
