import skills from '../skills.js'

const Skills = () => {
  if (!skills) {
    return <p>No skills data available.</p>
  }

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
            {console.log('category=', category)}
            <ul>
              {console.log(
                `skills[category] ==> ${JSON.stringify(skills[category])}`
              )}
              {skills[category].map((skill) => {
                console.log(`skill ${JSON.stringify(skill)}`)
                return (
                  <li
                    key={`${category}-${skill.language || skill.technology}`}
                    className="skillItem"
                  >
                    {skill.image && (
                      <img
                        src={skill.image}
                        alt={skill.language || skill.technology}
                        className="skillImage"
                      />
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
