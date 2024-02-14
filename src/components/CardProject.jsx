import project from '../images/cover.jpeg';
import user from '../images/user.svg';

function CardPorject({ data }) {
  const {
    name,
    slogan,
    technologies,
    repo,
    demo,
    desc,
    autor,
    job,
    photo,
    image,
  } = data;
  return (
    <section className="author">
      <section className="author__project">
        <p className="author__project--subtitle">Personal Project Card</p>
        <hr className="author__project--line" />
        <h2 className="author__project--title">
          {name || 'Elegant Workspace'}
        </h2>
        <p className="author__project--slogan">
          {slogan || 'Diseños Exclusivos'}
        </p>
        <p className="author__project--description">Product Description</p>
        <p className="author__project--desc">
          {desc ||
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere recusandae, ipsum laboriosam optio aliquam ad, magnam, dolorum quisquam aliquid consectetur iste quidem doloremque quis eligendi sequi numquam! Vel, aliquam mollitia?'}
        </p>
        <section className="author__technologies">
          <p className="author__technologies--text">
            {' '}
            {technologies || 'React JS - MongoDB'}
          </p>
          <div className="author__technologies--icon">
            <a href={demo || ''} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-globe"></i>
            </a>
            <a href={repo || ''} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </section>
      </section>

      <section className="author__info">
        <img
          className="author__info--image"
          src={photo || user}
          alt={autor || ''}
        />
        <p className="author__info--job">{job || 'Full Stack Developer'}</p>
        <p className="author__info--name">{autor || 'Emmelie Björklund'}</p>
      </section>
    </section>
  );
}

export default CardPorject;
