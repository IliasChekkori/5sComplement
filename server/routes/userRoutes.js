const User = require('../models/userModel'); 
const epxress = require("express"); 
const router = epxress.Router(); 

router.route('/').post(async (req, res) => {
    try {
      const { name, address, email, googleID } = req.body;
      const user = new User({ name, address, email, googleID });
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  })

router.route('/').get(async (req, res) => {
  User.find().lean().then((users)=> {
    res.status(200).json(users);
  })
  .catch((err) => {
    res.status(404).json({ message: err.message });
  }); 
});

module.exports = router;