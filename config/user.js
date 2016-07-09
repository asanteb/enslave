var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    twitter             :{
        id              : String,
        useernname      : String,
        money           : String,
        new_worth       : String,
        owned_by        : String,
        owns            : String,
        displayname     : String,
        picture         : String
    }
});

module.exports = mongoose.model('User', userSchema);
