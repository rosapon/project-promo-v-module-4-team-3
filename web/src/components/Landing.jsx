import CardProject from './CardProject';
import Button from './Button';
import '../scss/layout/Landing.scss';
import { Link } from 'react-router-dom';

function Landing({ project }) {
  const renderProjectCards = project.map((data, i) => {
    return (
      <Link
        to={`https://project-promo-v-module-4-team-3.onrender.com/detail/${data.idProject}`}
        key={i}
      >
        <CardProject data={data} className="cardStyle" />
      </Link>
    );
  });

  return (
    <div className="landing">
      <Button
        url="/newProject"
        text="Añadir proyecto"
        style="header__title--new-btn landing__btn"
      />
      <div className="landing__cards">{renderProjectCards}</div>
    </div>
  );
}

export default Landing;
