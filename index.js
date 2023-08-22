const express = require('express');
const app = express();

// [anonymous function taking 2 arguments (req = request; res = response)]
// First route
app.get('/', (req,res) => {
  res.send('Hello world!')
});

// Second route
let animals = ['Cat', 'Elephant', 'Polar Bear', 'Seahorse']

app.get('/animals/:id', (req,res) => {
  let id = req.params.id
  res.send('Your lucky animal is ' + animals[id])
});

// Server set up to listen on a specific port
app.listen(3000, () => {
  console.log('App server running on port 3000')
});
