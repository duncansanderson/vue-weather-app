// const express = require('express')
// const http = require('http')
// const enforce = require('express-sslify')
// const path = require('path')
// const serveStatic = require('serve-static')

// let app = express()
// app.use(serveStatic(__dirname + '/dist'))
// app.use(enforce.HTTPS({ trustProtoHeader: true }))

// const port = process.env.PORT || 5000
// http.createServer(app).listen(port, () => {
//     console.log('Express server listening on port ' + port)
// })

const express = require('express');
const http = require('http');
const enforce = require('express-sslify');
 
const app = express();
 
// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
app.use(enforce.HTTPS({ trustProtoHeader: true }));

const port = process.env.PORT || 5000
http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});