// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import local from '../services/localStorage';
import Landing from './Landing';
import { Route, Routes } from 'react-router-dom';

function App() {
  //Aquí estoy diciendo que me rellene el data con lo que hay en el localStorage y si no hay nada, que me devuelva el valor por defecto que son ''.
  const [data, setData] = useState(
    local.get('dataProject', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
    })
  );
  const [validation, setValidation] = useState('');
  const [urlCard, setUrlCard] = useState('');
  const [errorMsg, setErrorMsg] = useState({});

  const [project, setProject] = useState([]);

  const dataForm = (key, value) => {
    setData({ ...data, [key]: value });
  };

  useEffect(() => {
    local.set('dataProject', data);
  }, [data]);

  useEffect(() => {
    fetch('http://localhost:5001/projects/list')
      .then((response) => response.json())
      .then((data) => {
        setProject(data.data);
      });

    console.log(project);
  }, []);

  //Esta función es la que valida cada input y guarda en un objeto el mensaje de error según la propiedad del input.
  const validateForm = () => {
    const errors = {};
    if (!data.name) {
      errors.name = 'El nombre del proyecto es obligatorio';
    }
    if (!data.slogan) {
      errors.slogan = 'El slogan es obligatorio';
    }
    if (!data.repo) {
      errors.repo = 'La URL del repositorio es obligatoria';
    } else if (!/^https?:\/\/\S+$/.test(data.repo)) {
      errors.repo = 'La URL del repositorio no es válida';
    }
    if (!data.demo) {
      errors.demo = 'La URL de la demo es obligatoria';
    } else if (!/^https?:\/\/\S+$/.test(data.demo)) {
      errors.repo = 'La URL de al demo no es válida';
    }
    if (!data.technologies) {
      errors.technologies = 'Las tecnologias utilizadas son obligatorias';
    }
    if (!data.desc) {
      errors.desc = 'La desripción del proyecto es obligatoria';
    }
    if (!data.autor) {
      errors.autor = 'El nombre del autor es obligatorio';
    }
    if (!data.job) {
      errors.job = 'El trabajo del autor es obligatorio';
    }
    if (!data.image) {
      errors.image = 'La imagen del proyecto es obligatoria ';
    }
    if (!data.photo) {
      errors.photo = 'La imagen del autor es obligatoria ';
    }

    //Aquí acutaliza el estdo de SetErrorMsg con el objeto que hemos creado dentro de la función con todos los mensajes
    setErrorMsg(errors);
    //El return die que si la longitud del objeto errors es mayor que 0, devuelve false, indicando que hay campos vacíos.
    //Object.keys devuelve un array con las propiedad del objeto, al ponerle el .length nos devuelve la cantidad de elementos (mensaje de error) que hay en el array, si es = 0 es true, por lo que no hay ningún mensaje de eror dentro
    return Object.keys(errors).length === 0;
  };

  //Esta función maneja la de validación y contiene la condición, si la validación es buena (no hay error, el return en la función de arriba nos ha devuelto true), ejecuta la función handleCreate, sino, omstrará en pantalla el mensaje de ha habido algún error
  const handleSubmit = () => {
    if (validateForm()) {
      handleCreateCard();
    } else {
      setValidation('Ha habido algún error, revisa el formulario');
      setUrlCard('');
    }
  };

  const handleReset = () => {
    setData({
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
    });
    local.clear();
    setErrorMsg({});
    setUrlCard('');
    setValidation('');
  };

  //Esta función solo se ejecuta cuando todos los campos están completos, es la que genera el enlace y nos pone el mensaje de tarjeta creada
  const handleCreateCard = () => {
    fetch('https://localhost:5001/projects/addProjects', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json' },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUrlCard(result.cardURL);
        setValidation('La tarjeta ha sido creada');
      });
  };

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Landing project={project} data={data} />} />{' '}
        {/*lo de data será para un nuevo proyecto */}
        <Route
          path="/newProject"
          element={
            <Main
              data={data}
              handleChange={dataForm}
              validation={validation}
              urlCard={urlCard}
              handleCreateCard={handleSubmit}
              errorMsg={errorMsg}
              handleReset={handleReset}
            />
          }
        />
      </Routes>
      {/*enviamos nombre de la función a través de prop */}
      <Footer />
    </div>
  );
}

export default App;
