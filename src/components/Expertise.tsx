import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCloud, faGear } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "Vue.js",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "WordPress",
];

const labelsSecond = [
    "REST API",
    "Postman",
    "Firebase",
    "MySQL",
    "JSON",
    "Webhook",
];

const labelsThird = [
    "Google Cloud Platform",
    "App Engine",
    "Cloud Storage",
    "Cloud Functions",
    "Firebase",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development</h3>
                    <p>Build responsive and functional web applications using modern technologies. Experienced in developing business systems, CMS-based websites, and implementing authentication, CRUD operations, and responsive user interfaces.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faGear} size="3x"/>
                    <h3>API Integration</h3>
                    <p>Integrate third-party APIs and backend services to enhance application functionality. Experienced with RESTful APIs, payment gateways, webhooks, authentication, and data synchronization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                    <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud Computing</h3>
                    <p>Deploy and manage cloud-based applications using Google Cloud Platform. Familiar with cloud infrastructure, storage services, authentication, and application deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;