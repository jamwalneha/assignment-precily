const express = require("express");
const router = express.Router();
const {AddData, UpdateData, GetData} = require("../controller/DataController")

router.post("/add-data", AddData);
router.put("/update-data", UpdateData);
router.get("/get-data", GetData)

module.exports = router;