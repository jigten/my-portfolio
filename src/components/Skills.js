import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faNodeJs, faPython, faGit } from '@fortawesome/free-brands-svg-icons'

function Skills() {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skill-icons">
                <FontAwesomeIcon size="4x" icon={faJs} />
                <FontAwesomeIcon size="4x" icon={faReact} />
                <FontAwesomeIcon size="4x" icon={faNodeJs} />
                <FontAwesomeIcon size="4x" icon={faPython} />
                <FontAwesomeIcon size="4x" icon={faGit} />
            </div>
        </div>
    )
}

export default Skills;