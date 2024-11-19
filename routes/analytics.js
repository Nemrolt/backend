const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../middleware/auth');
const User = require('../models/User');
// Import other necessary models if needed

// Example: Get number of completed assignments per student
router.get('/', auth, authorize(['teacher']), async (req, res) => {
    try {
        const students = await User.find({ role: 'student' });

        const labels = students.map(student => student.username);
        const values = students.map(student => student.completedAssignments.length);

        res.json({ labels, values });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
