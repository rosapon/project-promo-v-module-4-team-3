const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

//crear servidor, lo vamos a llamar server
const server = express();

//configurar cors para que acepte peticiones de todo tipo
server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set("view engine", "ejs");

//crear conexión con los datos de freeDb
async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_admin_project',
    password: 'k7?C4eBcdbbXF5q',
    database: 'freedb_proyectos_Molones',
  });
  connection.connect();
  return connection;
}

//por qué puerto va a escuchar las peticiones
const port = 5001;
server.listen(port, () => {
  console.log(`El servidor se está ejecutando en el puerto ${port}`);
});

//static server
const statictServer = './src/public-react';
server.use(express.static(statictServer));

//crear ENDPOINT

//
server.get('/projects/list', async (req, res) => {
  const connect = await getConnection();
  const sql =
    'SELECT * FROM authors, projects WHERE authors.idAuthor = projects.fk_idAuthors';
  const [results] = await connect.query(sql);
  connect.end();
  res.json({ success: true, data: results });
});

//
server.post('/projects/addProjects', async (req, res) => {
  const connect = await getConnection();
  const insertAuthor =
    'INSERT INTO authors (nameAuthor, job, imageAuthor) VALUES (?, ?, ?)';
  const [resultsAuthor] = await connect.query(insertAuthor, [
    req.body.autor,
    req.body.job,
    req.body.photo,
  ]);
  const fkAuthor = resultsAuthor.insertId;
  const insertProject =
    'INSERT INTO projects (name, slogan, technologies, repo, demo, desc, image, fk_idAuthors) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const [resultsProject] = await connect.query(insertProject, [
    req.body.name,
    req.body.slogan,
    req.body.technologies,
    req.body.repo,
    req.body.demo,
    req.body.desc,
    req.body.image,
    fkAuthor,
  ]);
  connect.end();
  res.json({
    success: true,
    cardURL: `http://localhost:5001/detail/${resultsProject.insertId}`,
  });
});

//
server.get("/detail/:idProject", async (req, res) => {

  const { idProject } = req.params; //req.params sería la forma de recoger el id del proyecto, que viene a través de la URL (poner el nombre de la propiedad de la base de datos)

  //conectamos con la BD
  const connect = await getConnection();

  //hacemos el select para realizar la consulta a la BD

  const selectProject = 'SELECT * FROM authors, projects WHERE authors.idAuthor = projects.fk_idAuthors and idProject = ?'; // ?  representa al idProyect de la linea 80

  const [resultProject] = await connect.query(selectProject, [idProject])
  {/* TRADUCCIÓN LINEA 89:

CONNECT CONECTA CON LA BS
QUERY EJECUTA :
///selectProyect que es la sentencia en naranja
/// [idProject] representa a la ?

*/}
  res.render("detail")
})


