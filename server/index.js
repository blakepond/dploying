const express = require('express')
const path = require('path')

const app = express()

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})


app.use('/css', express.static(path.join(__dirname, 'deployment/styles.css')))


const port = process.env.PORT || 4005

app.listen(port, ()=> {
    console.log(`running on port ${port}`)
})