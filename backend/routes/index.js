const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = 'mongodb://krrish:Sateben13@ds257981.mlab.com:57981/delphi';
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

// router.post('/newApplicant', (req, res) => {
//     Applicant.create(req.body, (err, user) => {
//       if(err) {
//         res.send(""+err);
//       } else {
//         console.log(newApplicant);
//         res.send(newApplicant);
//   }})
// });

  
router.route('/')
    .get((req, res) => {
        console.log("reached the '/' ");
    })

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const { check, oneOf, validationResult } = require('express-validator/check');
// //Local Imports
// const User = require('./user');
// const shelter = require('./shelter');
// // const db = process.env.MONGOLAB_URI;
// const db = 'mongodb://she17ers:she17ers@ds131258.mlab.com:31258/she17erdb';

// // const admin = require('./admin');

// router.use('/users', User);
// router.use('/shelter', shelter);
// // router.user('/admin', admin);

// module.exports = router;
