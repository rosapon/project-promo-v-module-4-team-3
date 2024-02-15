import '../scss/layout/Form.scss';
import CreateCard from './CreateCard';
import FormInput from './FormInput';
import GetAvatar from './GetAvatar';

function Form({
  handleChange,
  validation,
  handleCreateCard,
  urlCard,
  errorMsg,
  data,
  handleReset,
}) {
  const handleInput = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    handleChange(inputId, inputValue);
  };

  {
    /*hemos mandado por parámetro el nombre de las prop */
  }

  return (
    <section className="form" onChange={handleInput}>
      <h2 className="form__title">Información</h2>

      <section className="ask-info">
        <p className="ask-info__subtitle">Cuéntanos sobre el proyecto</p>
        <hr className="ask-info__line" />
      </section>

      <fieldset className="project">
        <FormInput
          placeholder="Nombre del proyecto"
          name="name"
          id="name"
          data={data.name}
          handleChange={handleChange}
        />
        <span className="autorForm__error">{errorMsg.name}</span>
        <FormInput
          placeholder="Slogan"
          name="slogan"
          id="slogan"
          data={data.slogan}
        />
        <span className="autorForm__error">{errorMsg.slogan}</span>
        <div className="demo">
          <FormInput
            placeholder="Repo"
            name="repo"
            id="repo"
            data={data.repo}
          />
          <FormInput
            placeholder="Demo"
            name="demo"
            id="demo"
            data={data.demo}
          />
        </div>
        <span className="autorForm__error">{errorMsg.repo}</span>
        <span className="autorForm__error">{errorMsg.demo}</span>
        <FormInput
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
          data={data.technologies}
        />
        <span className="autorForm__error">{errorMsg.technologies}</span>
        <textarea
          className="project__textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
          value={data.desc}
        ></textarea>
        <span className="autorForm__error">{errorMsg.desc}</span>
      </fieldset>

      <section className="ask-info">
        <p className="ask-info__subtitle">Cuéntanos sobre la autora</p>
        <hr className="ask-info__line" />
      </section>

      <fieldset className="autorForm">
        <FormInput
          placeholder="Nombre"
          name="autor"
          id="autor"
          data={data.autor}
        />
        <span className="autorForm__error">{errorMsg.autor}</span>
        <FormInput placeholder="Trabajo" name="job" id="job" data={data.job} />
        <span className="autorForm__error">{errorMsg.job}</span>
      </fieldset>
      <section className="buttons-img">
        <div className="buttons-img__btn">
          <GetAvatar
            updateAvatar={handleChange}
            text="Subir foto de proyecto"
            id="image"
          />
          <GetAvatar
            updateAvatar={handleChange}
            text="Subir foto de autora"
            id="photo"
          />
        </div>
        <div className="buttons-img__errorMsg">
          <span className="autorForm__error">{errorMsg.image}</span>
          <span className="autorForm__error">{errorMsg.photo}</span>
        </div>
      </section>
      <section className="buttons-img">
        <button
          className="buttons-img__btn-large"
          type="submit"
          onClick={handleCreateCard}
        >
          Crear Tarjeta
        </button>
        <button className="buttons-img__btn-reset" onClick={handleReset}>
          Reset
        </button>
      </section>

      <CreateCard urlCard={urlCard} validation={validation} />
    </section>
  );
}

export default Form;
