const Category = require('../model/Category');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        categories && res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ error });
    }
}

exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Category({ name: req.body.name });
        await newCategory.save();
        res.status(201).json("New category created");
    } catch (error) {
        res.status(500).json({ error });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({ name: req.body.category });
        !category && res.status(404).json("Category doesn't exist!");
        category &&  res.status(201).json(`category ${category.name} deleted!`);
    } catch (error) {
        res.status(500).json({ error });
    }
}