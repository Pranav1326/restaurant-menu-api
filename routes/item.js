const router = require('express').Router();
const itemController = require('../controllers/item');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'public/images');
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + "-" + file.originalname);
    }
});
  
const upload = multer({ storage: storage });

router.get('/', itemController.getItems);

router.post('/add', upload.single('image'), itemController.createItem);

router.delete('/delete', itemController.deleteItem);

module.exports = router;