const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");


//crear servidor, lo vamos a llamar server
const server = express();

//configurar cors para que acepte peticiones de todo tipo
server.use(cors());
server.use(express.json({ limit: "25mb" }));

//crear conexión con los datos de freeDb
async function getConnection() {

    const connection = await mysql.createConnection({
        host: "sql.freedb.tech",
        user: "freedb_admin_project",
        password: "k7?C4eBcdbbXF5q",
        database: "freedb_proyectos_Molones"
    });

    connection.connect();

    return connection;
}

//por qué puerto va a escuchar las peticiones
const port = 5001;
server.listen(port, () => {
    console.log(`El servidor se está ejecutando en el puerto ${port}`)
});

//static server
const statictServer = "./web/dist";
server.use(express.static(statictServer));


//crear ENDPOINT

server.get("/projects/list", async (req, res) => {

    const connect = await getConnection();

    const sql = "SELECT * FROM authors, projects WHERE authors.idAuthor = projects.fk_idAuthors";

    const [results] = await connect.query(sql);

    connect.end()
    res.json({ success: true, data: results })
})