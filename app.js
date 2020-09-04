const express = require('express')
const path = require('path')
const app = express()

if (process.env.NODE_ENV === 'production') {
    console.log('PROD')
    // app.use(express.static('client/dist'))
    // app.get('*', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    // })
}
module.exports = app