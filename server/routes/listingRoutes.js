const Listing = require('../models/listingModel'); 
const epxress = require("express"); 
const router = epxress.Router(); 

router.route('/').get((req, res) => {
    Listing.find()
    .lean()
    .then((listings) => {
      res.status(200).json(listings);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

router.route('/').post((req, res) => { 
    try { 

        const {user_id, name, picture, location, description, price, weight, quantity} = req.body; 
        const newListing = new Listing({
            user_id, 
            name,
            picture,
            location, 
            description,
            price,
            weight, 
            quantity
        })

        newListing.save(); 
        Listing.find().lean().then((listings) => {
          res.status(200).json(listings);
        })
        .catch((err) => {
          res.status(404).json({ message: err.message });
        });
    }catch (err) { 
        res.status(409).json({message: err.message});
    }
}
);

router.route('/:id').get((req, res) => {
    Listing.findById(req.params.id)
      .lean()
      .then((listing) => {
        if (!listing) {
          return res.status(404).json({ message: "Listing not found" });
        }
        res.status(200).json(listing);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  });
  


module.exports = router;