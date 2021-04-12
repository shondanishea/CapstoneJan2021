const router = require('express').Router();
const contact = require('../models/contact');

router.get('/', (req, res) => {
  contact.find({}).then((info) => {
    res.status(200).send(info);
  });
});




module.exports = router;
