const express = require('express');
const multer = require('multer');
const Student = require('../models/Student');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('picture'), async (req, res) => {
    try {
        const { name, rollNumber, batch, department, numOfCourses } = req.body;
        const picture = req.file ? req.file.path : null;

        const student = new Student({
            name,
            rollNumber,
            batch,
            department,
            numOfCourses,
            picture,
        });

        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
