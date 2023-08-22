const express = require('express');
const app = express();

// anonymous function taking 2 arguments (req = request; res = response)
app.get('/', (req,res) => {
  res.send('Hello world!')
});

app.listen(3000, function(){
  console.log('App server running on port 3000')
})
