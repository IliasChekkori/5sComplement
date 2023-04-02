const User = require('../models/userModel'); 
const epxress = require("express"); 
const router = epxress.Router(); 

router.route('/users')
  .post(async (req, res) => {
    try {
      const { name, address, email, phone_number } = req.body;
      const user = new User({ name, address, email, phone_number });
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  })
  .get(async (req, res) => {
    try {
      const users = await User.find().lean();
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(404).json({ message: err.message });
    }
  });

module.exports = router;