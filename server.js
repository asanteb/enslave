var express = require('express'),
    mongoose = require('mongoose'),
    http = require("http"),
    app = express(),
    server = http.createServer(app);

app.get('/', function (req, res) {
    res.sendFile(_dirname + 'publix/index.html')
});
var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

server.listen(3000);
//require('./live-server.js')(server)
require('./config/update_user_data.js');
//require('./config/twitter_config.js'); //(server);