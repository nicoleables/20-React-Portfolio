// eslint-disable-next-line no-unused-vars
import React from 'react';
import GymImg from "../components/images/gymlogo.png";
import ConstructionImg from "../components/images/logopremier.jpg"; // Replace with the actual path
import DogTreatImg from "../components/images/stary-mays.png"; 
import DeliciousBitesImg from "../components/images/deliciouse-bites.png";
import "../styles/projects.css";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">

                {/* Gym Website */}
                <div className="project-card">
                    <img src={GymImg} alt="Gym Website Screenshot" />
                    <h3>Gym Website</h3>
                    <p>
                        A responsive gym website showcasing various fitness services. 
                        Created to allow users to sign up for memberships and look up exercises 
                        and trainers.
                    </p>
                    <div className="links">
                        <a href="https://soulful0.github.io/Gym-Website/" target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href="https://github.com/soulful0/Gym-Website" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                </div>

                {/* Construction Company Website */}
                <div className="project-card">
                    <img src={ConstructionImg} alt="Construction Company Website Screenshot" />
                    <h3>Construction Company Website</h3>
                    <p>
                        A professional website built for a local construction company, showcasing 
                        services, testimonials, and completed projects. Ongoing adjustments requested by the client.
                    </p>
                    <div className="links">
                        <a href="https://premier-exterior-contruction.netlify.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href="https://github.com/nicoleables/Premier-Exterior-Contruction" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                </div>

                {/* Dog Treat Store Website */}
                <div className="project-card">
                    <img src={DogTreatImg} alt="Dog Treat Store Website Screenshot" />
                    <h3>Dog Treat Store Website</h3>
                    <p>
                        A dynamic e-commerce platform for selling homemade dog treats. Currently 
                        under development with plans to include product pages, secure payments, and reviews.
                    </p>
                    <div className="links">
                        <a href="https://straymaystreats.netlify.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href="https://github.com/nicoleables/Stray-Mays-Treats" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                </div>
                {/* Delicious Bites Website */}
                <div className="project-card">
                <img src={DeliciousBitesImg} alt="Delicious Bites Website Screenshot" />
                <h3>Delicious Bites Website</h3>
                <p>
                    A vibrant and responsive restaurant website featuring menu, reservations, and contact info. Built with HTML, CSS, and JavaScript, deployed on Vercel.
                </p>
                <div className="links">
                    <a href="https://delicious-bites-ex5e9qgb0-nicoleables-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                    View Project
                    </a>
                    <a href="https://github.com/nicoleables/restaurant-site" target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

