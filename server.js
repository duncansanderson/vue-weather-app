const express = require('express')
const http = require('http')
const enforce = require('express-sslify')
const path = require('path')
const serveStatic = require('serve-static')

let app = express()
app.use(serveStatic(__dirname + '/dist'))
app.use(enforce.HTTPS({ trustProtoHeader: true }))

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Listening on port ' + port)
})
