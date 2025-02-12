import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/vkuuu.png";
import projImg2 from "../assets/img/java.png";
import projImg3 from "../assets/img/da1.png";
import projImg4 from "../assets/img/da2.png";
import projImg5 from "../assets/img/banking.png";
import projImg6 from "../assets/img/purus.png";
import projImg7 from "../assets/img/file.png";
import projImg8 from "../assets/img/milk.png";
import projImg9 from "../assets/img/chat.png";
import projImg10 from "../assets/img/game.png";
import projImg11 from "../assets/img/cal.png";
import projImg12 from "../assets/img/Nslook.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import "./Projects.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "VKUMentor Website",
      description:
        "The project won Third Prize in the Website Design Competition at the Vietnam-Korea University of Information and Communication Technology, University of Danang",
      imgUrl: projImg1,
    },
    {
      title: "Java Coffee App",
      description:
        "Fundamental Project 1 - A Café Management System coded in Java and managed with SQL Server.",
      imgUrl: projImg2,
    },
    {
      title: "Library Manager App",
      description:
        "Library Management Application - First-year major project using Java and SQL Server for database management.",
      imgUrl: projImg3,
    },
    {
      title: "Ecommerce App",
      description:
        "Product and Purchase Management Application – Client-Server Model, developed using Java and SQL Server for database management.",
      imgUrl: projImg4,
    },
    {
      title: "ATM App",
      description:
        "Java Assignment – Using TCP/IP in a Client-Server Model with Java and SQL Server for database management.",
      imgUrl: projImg5,
    },
    {
      title: "Mini Game",
      description: "Purus Games - Game Developer Intern 2409 - Test",
      imgUrl: projImg6,
    },
    {
      title: "File explore App",
      description:
        "Introduction to I/O Streams - Java, Semester 2, First Year.",
      imgUrl: projImg7,
    },
    {
      title: "Milk Tea Website",
      description: "Website Milk Tea - Ngày 1 làm quen với HTML/CSS",
      imgUrl: projImg8,
    },
    {
      title: "Chat App",
      description:
        "Simple Chat Application between Client and Server using Java.",
      imgUrl: projImg9,
    },
    {
      title: "Model Game",
      description: "Practice Coding a 2D Game Model.",
      imgUrl: projImg10,
    },
    {
      title: "Calculator App",
      description:
        "Computer Simulation - Introduction to Java Swing Assignment.",
      imgUrl: projImg11,
    },
    {
      title: "Nslookup App",
      description:
        "Nslookup is an application for querying domain name information and diagnosing network issues",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Study</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="four">Blog</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificate</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div class="blog-container">
                          <div class="blog-card">
                            <div class="blog-img-container"></div>
                            <div class="blog-card-content">
                              <h1 class="blog-heading">
                                A Journey Through the Night City
                              </h1>
                              <p class="blog-excerpt">
                                Exploring the beauty of the city at night, the
                                dazzling lights, the vibrant streets, and the
                                stories hidden in every corner.
                              </p>
                              <p class="blog-author">By Jrom</p>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="four">
                        <div class="blog-container">
                          <div class="blog-card">
                            <div class="blog-img-container"></div>
                            <div class="blog-card-content">
                              <h1 class="blog-heading">
                                A Journey Through the Night City
                              </h1>
                              <p class="blog-excerpt">
                                Exploring the beauty of the city at night, the
                                dazzling lights, the vibrant streets, and the
                                stories hidden in every corner.
                              </p>
                              <p class="blog-author">By Jrom</p>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
