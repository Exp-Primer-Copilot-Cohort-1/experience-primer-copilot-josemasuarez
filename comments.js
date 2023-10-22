// Create Web Server
// 1. Create Web Server
// 2. Read file from client
// 3. Write file from server
// 4. Send response from server to client
// 5. Add comments
// 6. Delete comments

// 1. Create Web Server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// 2. Read file from client
app.get('/', function(req, res) {
    fs.readFile('comment.html', function(err, data) {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

// 3. Write file from server
app.post('/', function(req, res) {
    var comment = req.body.comment;
    var writer = req.body.writer;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    console.log(time);
    var commentList = {
        comment: comment,
        writer: writer,
        time: time
    };
    console.log(commentList);
    fs.appendFile('commentList.json', JSON.stringify(commentList), function(err) {
        if(err) throw err;
        console.log('Saved');
        res.redirect('/');
    });
});

// 4. Send response from server to client
app.get('/commentList.json', function(req, res) {
    fs.readFile('commentList.json', function(err, data) {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(data);
    });
});

// 5. Add comments
app.get('/add', function(req, res) {
    fs.readFile('add.html', function(err, data) {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

// 6. Delete comments
app.get('/delete', function(req, res) {
    fs.readFile('delete.html', function(err, data) {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});