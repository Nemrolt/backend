const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../middleware/auth');

// Example route accessible only to teachers
router.get('/teacher-data', auth, authorize(['teacher']), (req, res) => {
    // Fetch and send teacher-specific data
    res.json({ data: 'Teacher Data' });
});

// Example route accessible to both students and teachers
router.get('/common-data', auth, authorize(['student', 'teacher']), (req, res) => {
    res.json({ data: 'Common Data' });
});

module.exports = router;
