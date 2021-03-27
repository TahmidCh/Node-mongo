const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send("Amare dakar jonno Thanks Bhai");
  })

app.listen(3000,() => console.log('listening to port 3000'))