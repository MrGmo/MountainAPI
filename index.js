const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

app.use(cors())


let sevenSummits = {
  'DENALI': {
    'Location': 'North America',
    'Elevation': '6,194 meters / 20,322 feet',
    'First Ascent': 1913
  },
  'MOUNT EVEREST': {
    'Location': 'Asia',
    'Elevation': '8,848 meters / 29,029 feet',
    'First Ascent': 1953
  },
  'ACONCAGUA': {
    'Location': 'South America',
    'Elevation': '6,961 meters / 22,838 feet',
    'First Ascent': 1897
  },
  'KILIMANJARO': {
    'Location': 'Africa',
    'Elevation': '5,895 meters / 19,341 feet',
    'First Ascent': 1889
  },
  'MOUNT ELBRUS': {
    'Location': 'Europe',
    'Elevation': '5,642 meters / 18,510 feet',
    'First Ascent': 1874
  },
  'MOUNT VINSON': {
    'Location': 'Antarctica',
    'Elevation': '4,892 meters / 16,050 feet',
    'First Ascent': 1966
  },
  'PUNCAK JAYA': {
    'Location': 'Australia',
    'Elevation': '4,884 meters / 16,024 feet',
    'First Ascent': 1962
  },
  'UNKNOWN': {
    'Location': 'Unknown',
    'Elevation': 'Unknown',
    'First Ascent': 4000
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/sevenSummits/:mountain', (req, res) => {
  const peak = req.params.mountain.toUpperCase()
  console.log(peak)
  if(sevenSummits[peak]){
    res.json(sevenSummits[peak])
  }else{
    res.json(sevenSummits['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
