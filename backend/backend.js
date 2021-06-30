const axios = require ('axios');
const cors = require ('cors');
const { response } = require('express');
const express = require('express');
const app = express();
app.use(cors());

app.use(express.static(__dirname + '/build'));

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/build/index.html');
})

app.get('/quote', function (req, res) {
  
    (async()=> {
        const {data: [{q, a}]} = await axios.get('https://zenquotes.io/api/random');
        res.send({q, a});
    })();

})
 
app.listen(8080)