const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ msg: "Test data" }));

module.exports = router;