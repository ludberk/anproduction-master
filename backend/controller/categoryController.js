const Category = require("../models/categoryModel");
const validateMongoDbId = require("../utils/validateMongoDbId");

const createCategory = async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
      res.json(newCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      validateMongoDbId(id);
      const updateCategory = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updateCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      validateMongoDbId(id);
      const deleteCategory = await Category.findByIdAndDelete(id);
      res.json(deleteCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const getCategory = async (req, res) => {
    try {
      const { id } = req.params;
      validateMongoDbId(id);
      const getCategory = await Category.findById(id);
      res.json(getCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const getAllCategory = async (req, res) => {
    try {
      const getAllCategory = await Category.find();
      res.json(getAllCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = { createCategory, updateCategory, deleteCategory, getCategory, getAllCategory };
