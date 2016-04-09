/*'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

var app = express();
require('dotenv').load();
require('./app/config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));

app.use(session({
	secret: 'secretClementine',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);
*/
var express=require("express");
var app=express();

var port = process.env.PORT || 8080;
var host={};
app.get("/",function(req,res){
	//host["IP"]=req.ip;
	/*res.send("it works...");*/
	host.ipaddress=req.headers['x-forwarded-for'];//req.connection.remoteAddress;//req.ip.split(":")[3];
	host.language=req.headers["accept-language"].split(",")[0];
	host.software=req.headers['user-agent'].split(') ')[0].split(' (')[1];
	res.send(host);
	/*console.log('User-Agent: ' + req.headers['user-agent']);
	res.send(JSON.stringify(req.get('user-agent')));*/
})

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});