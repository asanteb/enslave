var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'B7EFVqI2tcu9mhUUV2f8fxZcd',
    consumer_secret: 'WbiR6GFZnkKWuwUmjkzqrHjUKTBrZIc2337qyIHgCzVZQ6zL1U',
    access_token_key: '117545816-DjP7Ii8JHIyb5rHghIb9qdgoqLQObbQnXfHNCsBD',
    access_token_secret: 'uCz37oelsQpSkMVngEQ8wLtkvjszfzZtStmvzYfQdh0Qv'
});

/*
var params = {screen_name: 'yamoshoto'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
        console.log(tweets);
        console.log(response);
    }
});
*/
module.exports = client;