const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const travelSpots = require('./data/travelSpots.json')

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Travel Guru is Running')
})

app.get('/travelspots', (req, res)=>{
    res.send(travelSpots)
})

app.get('/travelspots/:id', (req, res) =>{
    const id = parseFloat(req.params.id);
    const selectedSpot = travelSpots.find(spot => parseFloat(spot.id) === id);
    res.send(selectedSpot)
})

app.get('/hotel/:id', (req, res) =>{
    const id = parseFloat(req.params.id)
    const hotels = travelSpots.find(hotel => parseFloat(hotel.id) === id).hotels;
    res.send(hotels)
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})