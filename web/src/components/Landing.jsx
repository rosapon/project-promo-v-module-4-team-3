import CardProject from './CardProject';
import '../scss/layout/Landing.scss';

function Landing({ project }) {
  const renderProjectCards = project.map((data, i) => {
    return <a href={`http://localhost:5001/detail/${data.idProject}`}><CardProject data={data} key={i} className="cardStyle" /></a>;
  });

  return (
    <div className="landing">
      
      <div className="landing__cards">{renderProjectCards}</div>
    </div>
  );
}

export default Landing;
