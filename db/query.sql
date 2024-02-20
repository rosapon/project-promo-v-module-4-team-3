CREATE TABLE projects (
idProject INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (40) NOT NULL,
slogan VARCHAR (50) NOT NULL,
technologies VARCHAR(50) NOT NULL,
repo VARCHAR(1000) NOT NULL, 
demo VARCHAR(1000) NOT NULL, 
`desc` VARCHAR(500) NOT NULL, 
image VARCHAR(200000) NOT NULL
);

CREATE TABLE authors(
idAuthor INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (40) NOT NULL,
job VARCHAR (40) NOT NULL,
image VARCHAR(200000) NOT NULL
);

-- insertar datos en las tablas

-- projects
INSERT INTO projects (name, slogan, technologies, repo, demo, `desc`, image) 
VALUES ("Proyectos Molones","Somos 3 mujeres con un mismo destino","Reactjs, SASS, HTML5","https://github.com/MBueno992/project-promo-v-module-3-team-3","https://mbueno992.github.io/project-promo-v-module-3-team-3/#/","Añade la descripción de tu proyecto molón","https://files.slack.com/files-tmb/T2Q8FS5QB-F06KP4VN61H-2d2f0afea9/captura_de_pantalla_2024-02-15_a_las_13.01.42__2__480.png");

-- authors
INSERT INTO authors (name, job, image) 
VALUES("3Random","Full Stack Junior Developers","https://files.slack.com/files-tmb/T2Q8FS5QB-F06KMRL0R08-14fd35d4e9/captura_de_pantalla_2024-02-15_a_las_13.01.42_720.png");

SELECT * FROM projects;

INSERT INTO projects (name, slogan, technologies, repo, demo, `desc`, image) 
VALUES ("Series de Anime","Busca tus series anime favoritas","JavaScript, SASS, HTML5","https://github.com/Adalab/modulo-2-evaluacion-final-carodriguezp","https://beta.adalab.es/modulo-2-evaluacion-final-carodriguezp/","En esta web podrás buscar información acerca de tus series anime favoritas y hacer una lista de favoritos para verlas siempre que quieras","https://github.com/Adalab/modulo-2-evaluacion-final-carodriguezp/raw/main/public/images/image-3.PNG"),
("Howarts","Encuentra tu personaje favorito","Reactjs, SASS, HTML5","https://github.com/Adalab/modulo-3-evaluacion-final-MBueno992","https://beta.adalab.es/modulo-3-evaluacion-final-MBueno992/","Registro de magos y muggles de Harry Potter","https://github.com/Adalab/modulo-3-evaluacion-final-MBueno992/raw/main/public/Mobile.PNG"),
("Buscador de Harry Potter","A tope con Harry Potter","Reactjs, SASS, HTML5","https://github.com/Adalab/modulo-3-evaluacion-final-rosapon","https://beta.adalab.es/modulo-3-evaluacion-final-rosapon/","Si un personaje de Harry Potter quieres encontrar, mi web tendrás que usar","https://files.slack.com/files-tmb/T2Q8FS5QB-F06KBQGE96V-afc61faf4a/image_720.png");

DELETE FROM projects WHERE idProject>=5;

INSERT INTO projects (name, slogan, technologies, repo, demo, `desc`, image) 
VALUES ("Buscador de Harry Potter","A tope con Harry Potter","Reactjs, SASS, HTML5","https://github.com/Adalab/modulo-3-evaluacion-final-rosapon","https://beta.adalab.es/modulo-3-evaluacion-final-rosapon/","Si un personaje de Harry Potter quieres encontrar, mi web tendrás que usar","https://files.slack.com/files-tmb/T2Q8FS5QB-F06KBQGE96V-afc61faf4a/image_720.png");

-- Relaciones proyecto-autor
UPDATE projects
SET fk_idAuthors = 1
WHERE idProject = 1;

UPDATE projects
SET fk_idAuthors = idProject;


SELECT authors.name, projects.name
FROM authors, projects
WHERE authors.idAuthor = projects.fk_idAuthors;

SELECT * FROM authors, projects WHERE authors.idAuthor = projects.fk_idAuthors;
update authors SET imageAuthor = "https://files.slack.com/files-tmb/T2Q8FS5QB-F06KP4VN61H-2d2f0afea9/captura_de_pantalla_2024-02-15_a_las_13.01.42__2__480.png"  WHERE idAuthor = 1;

