var express = require('express')
var app = express()
var os = require('os')

app.use(express.static(__dirname + '/dist'))

var host = 'localhost' //os.hostname() Uncomment this if you want to use the hostname instead
var port = 3000

// Send some mock data back
app.get('/api/somerestcall', function (req, res) {
  res.send(require('./mock/data.json'))
})

// Redirect requests
app.get('/search', function (req, res) {
  res.redirect('http://www.google.com')
})

// TODO Add no cache headers request

app.listen(port, host);
console.log('listening on %s:%d', host, port)
