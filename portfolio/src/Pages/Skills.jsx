import data from "../data/index.json";

const Skills = () => {
  return (
    <section id="skills-section" className="skills--section">
      <div className="portfolio--container">
        <p className="section--title">Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, idx) => {
          return (
            <div key={idx} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.source} alt={item.title} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
