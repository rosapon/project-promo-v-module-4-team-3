import Button from './Button';
import CardProject from './CardProject';
import '../scss/layout/Landing.scss';

function Landing({ data }) {
  return (
    <div className="landing">
      <Button
        url="/newProject"
        text="Nuevo proyecto"
        style="header__title--new-btn landing__btn"
      />
      <CardProject data={data} />
      <CardProject data={data} />
    </div>
  );
}

export default Landing;
