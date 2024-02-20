import Button from './Button';
import CardProject from './CardProject';
import '../scss/layout/Landing.scss';

function Landing({ project }) {

  const renderProjectCards = project.map((data, i) => {

    return <CardProject data={data} key={i} />

  })

  return (
    <div className="landing">
      <Button
        url="/newProject"
        text="Nuevo proyecto"
        style="header__title--new-btn landing__btn"
      />
      {renderProjectCards}
    </div>
  );
}

export default Landing;
