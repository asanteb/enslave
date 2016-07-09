var User = require('../config/user');
client = require('../config/twitter_config.js');

var newUser = new User();

user_name = newUser.twitter.username;


client.get('users/show',{screen_name : 'yamoshoto'}, function(error, tweets, response){
    if(error) throw error;
    console.log(tweets);
    console.log(response);
});





