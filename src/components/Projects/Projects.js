import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import eduTechImg from "../../Assets/Projects/eduTechImg.png";
// import ticTacToeImg from "../../Assets/Projects/ticTacToeImg.png";
// import parallaxImg from "../../Assets/Projects/parallaxImg.png";
import weaveProject from "../../Assets/Projects/weaveProject.png";
import urlShort from "../../Assets/Projects/urlShort.png"; 
import aiSummarizer from "../../Assets/Projects/aiSummarizer.png";
import ecovistara from "../../Assets/Projects/ecovistara.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weaveProject}
              isBlog={false}
              title="Weave "
              description="Build Weave—a modern social app with a stunning UI, a native mobile-like experience, and exceptional performance. Powered by React JS, TypeScript, Appwrite, and more, Weave features infinite scroll and delivers an engaging, seamless user experience."
              ghLink="https://github.com/pranavv444/weave"
              demoLink="https://weeave.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlShort}
              isBlog={false}
              title="Shortrim"
              description="ShorTrim is a modern URL shortener web application that allows users to create, manage, and share shortened web links. Whether you need to share long URLs across platforms or track link analytics, ShorTrim offers a simple, intuitive solution for your URL shortening needs."
              ghLink="https://github.com/pranavv444/url-shortener"
              demoLink="https://shortrim.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiSummarizer}
              isBlog={false}
              title="ReadMeBot"
              description="Introducing the AI Article README Generator ReadMeBot, a web application designed to simplify the process of creating structured and engaging README files for your articles. By providing key details about your content, this tool leverages AI to generate a comprehensive README that enhances readability and accessibility."
              ghLink="https://github.com/pranavv444/ai-summarizer"
              demoLink=" https://read-me-bot.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecovistara}
              isBlog={false}
              title="EcoVistara"
              description="Ecovistara is a landing page of a travel website made by using NEXT and Tailwind CSS"
              ghLink="https://github.com/pranavv444/travel_app"
              demoLink="https://travel-app-kappa-three.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallaxImg}
              isBlog={false}
              title="Parallax Effect"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/monk0707/parallax-effect"
              demoLink="https://monk0707.github.io/parallax-effect/"
              //  <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTacToeImg}
              isBlog={false}
              title="TicTacTwist"
              description="TicTacTwist is a modern take on the classic Tic Tac Toe game, crafted with JavaScript and styled with Tailwind CSS for a sleek and responsive design. This game offers a delightful user experience with smooth animations, intuitive gameplay, and a minimalist interface. Whether you're playing against a friend or challenging the computer, TicTacTwist provides a fun and engaging way to enjoy this timeless game, all from the convenience of your web browser. Dive into a world where strategy meets style, and see if you can outsmart your opponent in this reimagined classic!"
              ghLink="https://github.com/monk0707/tictac"
              demoLink="https://monk0707.github.io/tictac/"
              // <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
