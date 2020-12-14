import React from "react";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WorkCard({ work, index }) {
    const redirectToProj = (e, link) => {
        e.preventDefault();
        window.location.href = link;
    }

    return (
        <div className="card">
            <h2>{work.title}</h2>
            <div className="desc">
                {work.description}
            </div>
            <button className="card-button" onClick={(e) => redirectToProj(e, work.link)}>
                View on Github &nbsp; <FontAwesomeIcon icon={faGithubAlt} />
            </button>
        </div>
    )
}

function Work() {
    const [workData, addWorkData] = React.useState([
        {
            title: "React Readable",
            description: "A reddit clone built using the ReactJS framework. Uses Redux for state management",
            link: "https://github.com/jigten/React-Readable",
        },
        {
            title: "UdaciCards",
            description: "A React Native application that allows the user to study a collection of flashcards. Uses Redux for state management.",
            link: "https://github.com/jigten/UdaciCards",
        },
        {
            title: "AuctionNode",
            description: "A NodeJS application that allows users to auction valuable items. The application allows bidding and a countdown mechanism to declare the winner after time runs out.",
            link: "https://github.com/jigten/AuctionNode",
        },
    ]);

    return (
        <div className="work">
            <h2>Work</h2>
            <div className="work-cards">
                {workData.map((work, index) => (
                    <WorkCard key={index} index={index} work={work} />
                ))}
            </div>
        </div>
    )
}

export default Work;