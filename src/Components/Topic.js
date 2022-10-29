import React from "react";


function Topic(props) {
    return(
        <div className="topic">
            <img className="topic-img" src={props.topicImage} alt="react logo" />
            <h3>{props.topicName}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        </div>
    )
}

export default Topic;