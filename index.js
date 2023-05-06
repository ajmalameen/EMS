require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

require('./db/connection')


const server = express()
const PORT = process.env.PORT || 4000

server.use(cors())
server.use(express.json())
server.use(router)
 
// Define routes
server.get('/',(req, res)=>{
    res.send('EMS server Started!!!')
})

// Start the server
server.listen(PORT, ()=>{
    console.log(`EMS Started at the port ${PORT}`);
})