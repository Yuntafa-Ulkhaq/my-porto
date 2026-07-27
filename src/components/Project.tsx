import React from "react";
import postmanImg from "../assets/images/sspostman.png";
import carakaImg from "../assets/images/carakaroastery.png";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={postmanImg} className="zoom" alt="FED App" width="100%"/>
                <h2>Fertille Egg Detection (FED) </h2>
                <p>Developing an API for the Fertile Egg Detector app, testing the API endpoints using Postman, and deploying the app using App Engine on the Google Cloud Platform as part of a final project.</p>
            </div>
            <div className="project">
                <img src={carakaImg} className="zoom" alt="Caraka Roastery" width="100%" />
                <h2>Caraka Roastery: E-commerce website platform</h2>
                <p>This is an e-commerce coffeeshop website platform for Caraka Roastery. I Developed this app with Wordpress with the Woocommerce plugin, which is already integrated with a payment gateway service</p>
            </div>
        </div>
    </div>
    );
}

export default Project;