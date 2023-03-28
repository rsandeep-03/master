const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const bodyParser=require("body-parser");

// View Engine Setup
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/fonts'));

app.post('/', function(req, res){
    res.render('choosesv');
});

app.get('/', function(req, res){
    res.render('login', { title: 'Home Page' });
});
//----------
app.get('/tqm-teamwork.php', function(req, res){
    res.render('tqm', { title: 'team work' });
});
//-------------
app.get('/quality-management.php', function(req, res){
    res.render('qum', { title: 'quality management' });
});
//------------
app.get('/standard-operation.php', function(req, res){
    res.render('std', { title: 'standard operation' });
});
// -----------
app.get('/skill-management.php', function(req, res){
    res.render('skill', { title: 'skill management' });
});
//------------
app.get('/work-allocation.php', function(req, res){
    res.render('work', { title: 'work allocation' });
});
//------------
app.get('/facility-management.php', function(req, res){
    res.render('facility', { title: 'facility management' });
});
//------------
app.get('/safety-environment.php', function(req, res){
    res.render('safety', { title: 'safety environment' });
});
//-----------
app.get('/cost-management.php', function(req, res){
    res.render('cost', { title: 'cost management' });
});
//-----------
app.get('/report.php', function(req, res){
    res.render('rep', { title: 'report' });
});
//------------
app.get('/zone_change.php', function(req, res){
    res.render('choosesv', { title: 'zone change' });
});
//-------------
app.get('/allreport.php', function(req, res){
    res.render('allrep', { title: 'all reports' });
});
//-------------
app.listen("1234",function(){
    console.log("SERVER CREATED on Port:1234");
    }
);
