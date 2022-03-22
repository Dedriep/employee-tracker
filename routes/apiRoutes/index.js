const express = require('express');
const router = express.Router();

router.use(require(routes/apiRoutes/allDepartments.js))
module.exports = router;