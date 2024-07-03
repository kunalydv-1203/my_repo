/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Hospital Management System",
    description:
      "I developed a comprehensive Hospital Management System aimed at streamlining patient management and enhancing operational efficiency within healthcare facilities. This project underscores my proficiency in system development, database design, and user interface implementation, contributing to enhanced healthcare delivery and patient care.",
    url: "https://github.com/kunalydv-1203/Hospital-Management-System",
  },
  {
    title: "Interior Design Website",
    description:
      "This project highlights my expertise in front-end development, user experience design, and integrating backend functionalities for effective client interaction. It emphasizes aesthetics and functionality, reflecting the essence of the design firm and enhancing user engagement.",
    url: "https://github.com/kunalydv-1203/interior_design",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "This project demonstrates my proficiency in JavaScript programming, algorithmic logic for game mechanics, and user interface design. It reflects my commitment to creating entertaining and accessible web-based games that resonate with players of all ages.",
    url: "https://github.com/kunalydv-1203/Tic-Tac-Toe",
  },
  {
    title: "CAPTCHA Generator",
    description:
      "I developed a robust CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) generator that creates unique challenges to verify human users.This project showcases my expertise in front-end development, server-side scripting, and security practices essential for protecting online platforms from malicious activities. It underscores my commitment to enhancing user security without compromising user accessibility.",
    url: "https://github.com/kunalydv-1203/Captcha-Genrator",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "140%", width: "150%", objectFit: "cover" , marginLeft: "3rem" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
