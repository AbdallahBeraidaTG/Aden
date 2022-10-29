import React from "react";
import Topic from './Topic';
import machinelearning from './../imgs/machinelearning.png';
import automation from './../imgs/automation.png';
import dataanalytics from './../imgs/dataanalytics.png';
import Gamedev from './../imgs/Gamedev.png';

function Whatido() {
    return(
        <div className="whatido">
            <h2>What I Do</h2>
            <div className="topics">
                <Topic topicName = "Machine Learning" topicImage = {machinelearning}/>
                <Topic topicName = "Game Development" topicImage = {Gamedev}/>
                <Topic topicName = "Data Analytics" topicImage = {dataanalytics}/>
                <Topic topicName = "Automation" topicImage = {automation}/>
            </div>
        </div>
    )
}

export default Whatido;