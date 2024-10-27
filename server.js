// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

// Array untuk menyimpan lokasi
let locations = [];

// Endpoint untuk menerima data lokasi dari AR.js
app.post('/api/location', (req, res) => {
  const { currentLat, currentLon, latitude, longitude, distance, isArrive } = req.body;

  console.log('Received data:', {
    currentLat,
    currentLon,
    latitude,
    longitude,
    distance,
    isArrive
  });

  // Simpan data lokasi ke dalam array
  locations.push({
    currentLat,
    currentLon,
    latitude,
    longitude,
    distance,
    isArrive,
  });

  res.json({ message: 'Data received successfully!' });
});

// Endpoint untuk mendapatkan data lokasi
app.get('/api/locations', (req, res) => {
  // Mengembalikan semua data lokasi yang telah disimpan
  res.json(locations);
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
