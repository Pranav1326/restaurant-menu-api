const Item = require('../model/Item');

exports.getItems = async (req, res) => {
    try{
        const items = await Item.find();
        items && res.status(200).json(items);
    } catch (err){
        res.status(500).json({ err });
    }
}

exports.createItem = async (req, res) => {
    try{
        const item = await Item.findOne({ name: req.body.item });
        item && res.status(409).json("Item already exists!");

        const newItem = new Item({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: req.file.filename
        });
        await newItem.save();
        
        res.status(201).json("New Item Created!");
    } catch (err){
        res.status(500).json({ err });
    }
}

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findOneAndDelete({ _id: req.body.itemId });
        item && res.status(201).json(`Item ${item.name} deleted.`);
    } catch (err) {
        res.status(500).json({ err });
    }
}