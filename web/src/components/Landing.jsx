import CardProject from './CardProject';
import Button from './Button';
import '../scss/layout/Landing.scss';

function Landing({ project }) {
  const renderProjectCards = project.map((data, i) => {
    return <CardProject data={data} key={i} className="cardStyle" />;
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
