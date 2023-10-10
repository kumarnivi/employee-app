
const MyModel = require('../models/user');


 const UserModel = async (req, res) => {
    try {
      const { category, fromDate, toDate, duration, reason } = req.body;
  
      const newRecord = await MyModel.create({
        category,
        fromDate,
        toDate,
        duration,
        reason,
      });
  
      res.status(201).json({ message: 'Record created successfully', data: newRecord });
    } catch (error) {
      console.error('Error creating record:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };




const getAllRecords = async (req, res) => {
  try {
    const records = await MyModel.findAll();

    res.status(200).json({ data: records });
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

  const getSingleRecord = async (req, res) => {
    const { id } = req.params;
  
    try {
      const record = await MyModel.findByPk(id);
  
      if (!record) {
        return res.status(404).json({ message: 'Record not found' });
      }
  
      res.status(200).json({ data: record });
    } catch (error) {
      console.error('Error fetching record:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };




  module.exports = { UserModel, getAllRecords, getSingleRecord }