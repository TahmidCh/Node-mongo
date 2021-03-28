const express = require('express');

const app = express();

const users=["Asad", "Moin", "Mithi"]

app.get('/', (req, res) => {
    const bands = {
        name: "Metallica", Genre: "metal"
    }   
    res.send(bands)
  })

app.get('/sports/football',(req,res)=>{
    res.send({League:"LaLiga", Teams:20})
})

app.get('/users/:id', (req, res) =>{
    const id= req.params.id;
    const name =users[id];
    res.send({id, name});
})

app.listen(3000, () => console.log('listening to port 3000'))