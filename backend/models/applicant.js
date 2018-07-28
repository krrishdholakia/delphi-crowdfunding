//NPM Packages models
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var applicantSchema = Schema({
    email: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('applicants', applicantSchema);
