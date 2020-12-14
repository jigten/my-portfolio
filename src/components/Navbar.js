import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKnight } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <nav>
            <ul>
                <li className="logo"> J I G T <FontAwesomeIcon flip="horizontal" size="lg" icon={faChessKnight} /> N</li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;