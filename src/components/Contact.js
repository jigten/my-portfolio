import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Contact() {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <div className="contact-socials">
                <a href=""><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
                <a href=""><FontAwesomeIcon size="2x" icon={faGithubSquare} /></a>
            </div>
            <span>
                Made With <icon>❤</icon> by{" "}
                <a href="">Jigten</a>
            </span>
        </div>
    )
}

export default Contact;