const express = require("express");
const cors = require("cors");


//crear servidor, lo vamos a llamar server
const server = express();

//configurar cors para que acepte peticiones de todo tipo
server.use(cors());

//por qué puerto va a escuchar las peticiones
const port = 5001;
server.listen(port, ()=> {
    console.log(`El servidor se está ejecutando en el puerto ${port}`)
});


const statictServer = "./web/dist";
server.use(express.static(statictServer));