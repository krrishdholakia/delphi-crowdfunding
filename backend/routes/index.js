const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const db = 'mongodb://krrish:Sateben13@ds257981.mlab.com:57981/delphi';
const db = process.env.MONGLAB_URI
const morgan = require('morgan');

const applicants = require('./applicants')
// YOUR API ROUTES HERE

// SAMPLE ROUTE

mongoose.Promise = global.Promise;
mongoose.connect(db);
console.log(db);

router.use(morgan('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));


router.use('/users', (req, res) => {
    res.json({ success: true });
});

router.use('/applicants', applicants)

  
router.route('/')
    .get((req, res) => {
        console.log("reached the '/' ");
    })

module.exports = router;
