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
import blog1 from "../assets/img/blog1.jpg";
import blog2 from "../assets/img/blog2.jpg";
import blog3 from "../assets/img/blog3.jpg";
import certificate1 from "../assets/img/C++.png";
import certificate2 from "../assets/img/OS.png";
import certificate3 from "../assets/img/badge.png";
import imgdoan from "../assets/img/imgdoan.jpg";
import img7 from "../assets/img/img7.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import "./Projects.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Youth-Diary Website",
      description:
        "Participated in the Youth Diary website design competition organized by the Central Committee of the Ho Chi Minh Communist Youth Union.",
      imgUrl: imgdoan,
      link: "https://trinhthanhthao.id.vn/",
    },
    {
      title: "VKUMentor Website",
      description:
        "The project won Third Prize in the Website Design Competition at the Vietnam-Korea University of Information and Communication Technology, University of Danang",
      imgUrl: projImg1,
      link: "https://github.com/TTTT0803/VKUMentor",
    },
    {
      title: "Java Coffee App",
      description:
        "Fundamental Project 1 - A Café Management System coded in Java and managed with SQL Server.",
      imgUrl: projImg2,
      link: "https://github.com/TTTT0803/QLCafe.git",
    },
    {
      title: "Library Manager App",
      description:
        "Library Management Application - First-year major project using Java and SQL Server for database management.",
      imgUrl: projImg3,
      link: "https://github.com/TTTT0803/QLThuVien.git",
    },
    {
      title: "Ecommerce App",
      description:
        "Product and Purchase Management Application – Client-Server Model, developed using Java and SQL Server for database management.",
      imgUrl: projImg4,
      link: "https://github.com/TTTT0803/Ecommerce.git",
    },
    {
      title: "ATM App",
      description:
        "Java Assignment – Using TCP/IP in a Client-Server Model with Java and SQL Server for database management.",
      imgUrl: projImg5,
      link: "https://github.com/TTTT0803/ATM_TCP-IP.git",
    },
    {
      title: "Mini Game",
      description: "Purus Games - Game Developer Intern 2409 - Test",
      imgUrl: projImg6,
      link: "https://github.com/TTTT0803/Test-Intern-PurusGames.git",
    },
    {
      title: "File explore App",
      description:
        "Introduction to I/O Streams - Java, Semester 2, First Year.",
      imgUrl: projImg7,
      link: "https://github.com/TTTT0803/JAVA/tree/master/FileExplorerGK",
    },
    {
      title: "Milk Tea Website",
      description: "Website Milk Tea - Ngày 1 làm quen với HTML/CSS",
      imgUrl: projImg8,
      link: "https://github.com/TTTT0803/HTML-CSS-JS/tree/master/Web_MilkTea",
    },
    {
      title: "Chat App",
      description:
        "Simple Chat Application between Client and Server using Java.",
      imgUrl: projImg9,
      link: "https://www.tiktok.com/@truahehocit/video/7356615556591635729?lang=vi-VN",
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
      link: "https://github.com/TTTT0803/JAVA/tree/master/CalculatorJavaSwing",
    },
    {
      title: "Nslookup App",
      description:
        "Nslookup is an application for querying domain name information and diagnosing network issues",
      imgUrl: projImg12,
      link: "https://github.com/TTTT0803/JAVA/tree/master/Network%20NsLookup",
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
                        <div className="blog-container">
                          <div className="blog-card">
                            <div className="blog-img-container">
                              <a
                                href="https://github.com/TTTT0803/TTTT0803/blob/master/images/OS.png"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={certificate2}
                                  alt="Night City"
                                  className="blog-img"
                                />
                              </a>
                            </div>
                            <div className="blog-card-content">
                              <h1 className="blog-heading">
                                Operating Systems Certificate
                              </h1>
                              <p className="blog-excerpt">
                                Completed operating system course on Codelearn,
                                covering processes, memory management, and file
                                systems.
                              </p>
                              <p className="blog-author">6/11/2024</p>
                            </div>
                          </div>
                        </div>

                        <div className="blog-container">
                          <div className="blog-card">
                            <div className="blog-img-container">
                              <a
                                href="https://codelearn.io/share/3f1b853e-cff4-410a-ada0-74752999afd4"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={certificate1}
                                  alt="Night City"
                                  className="blog-img"
                                />
                              </a>
                            </div>
                            <div className="blog-card-content">
                              <h1 className="blog-heading">
                                Codelearn C++ Certificate
                              </h1>
                              <p className="blog-excerpt">
                                Completed C++ Basic on Codelearn
                              </p>
                              <p className="blog-author">21/1/2024</p>
                            </div>
                          </div>
                        </div>

                        <div className="blog-container">
                          <div className="blog-card">
                            <div className="blog-img-container">
                              <a
                                href="https://github.com/TTTT0803/TTTT0803/blob/master/images/badge.png"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={certificate3}
                                  alt="Night City"
                                  className="blog-img"
                                />
                              </a>
                            </div>
                            <div className="blog-card-content">
                              <h1 className="blog-heading">
                                A Journey Through the Night City
                              </h1>
                              <p className="blog-excerpt">
                                Certified in Linux, Windows, and Mobile OS by
                                Cisco Networking Academy.
                              </p>
                              <p className="blog-author">6/11/2024</p>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="four">
                        <div className="blog-container">
                          <div className="blog-card">
                            <div className="blog-img-container">
                              <a
                                href="https://www.youtube.com/watch?v=84IOtc05TuA&t=1s"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={blog1}
                                  alt="Night City"
                                  className="blog-img"
                                />
                              </a>
                            </div>
                            <div className="blog-card-content">
                              <h1 className="blog-heading">
                                XAMPP Error: MySQL shutdown unexpectedly
                              </h1>
                              <p className="blog-excerpt">
                                How to fix MySQL error in XAMPP server.
                              </p>
                              <p className="blog-author">19/2/2025</p>
                            </div>
                          </div>
                        </div>
                        <div className="blog-container">
                          <div className="blog-card">
                            <div className="blog-img-container">
                              <a
                                href="https://www.youtube.com/watch?v=vn97BdYx2K8"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={blog2}
                                  alt="Night City"
                                  className="blog-img"
                                />
                              </a>
                            </div>
                            <div className="blog-card-content">
                              <h1 className="blog-heading">
                                Npm ERR code ERESOLVE react | Npm install error
                                in visual studio code [Fast]
                              </h1>
                              <p className="blog-excerpt">
                                How to solve eresolve unable to resolve
                                dependency tree in react ....
                              </p>
                              <p className="blog-author">18/2/2025</p>
                            </div>
                          </div>
                        </div>
                        <div className="blog-container">
                          <div className="blog-card">
                            <div className="blog-img-container">
                              <a
                                href="https://www.youtube.com/watch?v=vn97BdYx2K8"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={img7}
                                  alt="Night City"
                                  className="blog-img"
                                />
                              </a>
                            </div>
                            <div className="blog-card-content">
                              <h1 className="blog-heading">
                                how to connect project spring mvc in intellij
                                and mvn install use Jakarta.servlet
                              </h1>
                              <p className="blog-excerpt">
                                To set up and connect a Spring MVC project in
                                IntelliJ IDEA and use Jakarta Servlet API with
                                Maven (mvn install), follow these steps
                              </p>
                              <p className="blog-author">1/3/2025</p>
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
