const express = require('express')
const path = require('path')

const app = express()

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


app.get('/css', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'))
})
// app.use('/css', express.static(path.join(__dirname, '..public/styles.css')))
app.get('/js', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/main.js'))
})

const port = process.env.PORT || 4005

app.listen(port, ()=> {
    console.log(`running on port ${port}`)
})