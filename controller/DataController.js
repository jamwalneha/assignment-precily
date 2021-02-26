const Data = require("../models/Data");

module.exports = {
  async AddData(req, res) {
    try {
      const { title, description } = req.body;
      const prevData = await Data.find();
      if (prevData.length) {
        await Data.remove({});
      }
      await Data.create({
        title,
        description,
        count: 1,
      });
      res.status(201).json({
        success: 1,
        status_code: 201,
        message: "data added successfully",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: 0,
        status_code: 500,
        message: "server error, try again later",
      });
    }
  },

  async UpdateData(req, res) {
    try {
      const { title, description } = req.body;
      const updatedData = await Data.findOneAndUpdate(
        {},
        { title, description, $inc: { count: 1 } }
      );
      if (!updatedData) return res.json({
        success: 0,
        status_code: 403,
        message: "add data first",
      });
      res.status(201).json({
        success: 1,
        status_code: 201,
        message: "data updated successfully",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: 0,
        status_code: 500,
        message: "server error, try again later",
      });
    }
  },

  async GetData(_, res) {
    try {
      const currentData = await Data.findOne({});
      return res.status(201).json({
        success: 1,
        status_code: 201,
        data: currentData,
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: 0,
        status_code: 500,
        message: "server error, try again later",
      });
    }
  },
};
