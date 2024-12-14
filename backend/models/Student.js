const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    batch: { type: String, required: true },
    department: { type: String, required: true },
    numOfCourses: { type: Number, required: true },
    picture: { type: String },
});

module.exports = mongoose.model('Student', studentSchema);
