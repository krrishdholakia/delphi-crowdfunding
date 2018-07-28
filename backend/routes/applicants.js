//NPM Packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
// const { check, oneOf, validationResult } = require('express-validator/check');
//Local Imports
const Applicants = require('../models/applicant');
const db = process.env.MONGOLAB_URI
// Use native ES6 promises
mongoose.Promise = global.Promise;
mongoose.connect(db);


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));



router.route('/')
    .get((req, res) => {
      console.log("checking the get request in applicants.js");
    })

// Promise Example

router.route('/newApplicant')
    .post((req, res) => {
        Applicants.create(req.body, (err, applicant) => {
            if(err) {
                res.send(""+err)
            } else {
                console.log(applicant);
                res.send(applicant);
            }
        })
    })

module.exports = router;
