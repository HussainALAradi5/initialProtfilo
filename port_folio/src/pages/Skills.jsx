import skills from '../skills' // Import the skills object

const Skills = () => {
  return (
    <div className="skills">
      <div className="skillsContainer">
        <p className="skillsTitle">Skills:</p>
        <h2 className="skillsHeading">My Expertise:</h2>
      </div>
      <div className="skillsSection">
        {Object.keys(skills).map((category) => (
          <div key={category} className="skillCategory">
            <h3>{category}</h3>
            <ul>
              {skills[category].map((skill) => (
                <li key={skill.language || skill} className="skillItem">
                  {skill.image && (
                    <img
                      src={skill.image}
                      alt={skill.language || skill}
                      className="skillImage"
                    />
                  )}
                  {skill.icon && <i className={`skillIcon ${skill.icon}`}></i>}
                  <p>{skill.language || skill}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
