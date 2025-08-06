"use client";

import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import Image from "next/image";

const skills = [
  { src: "/programing.png", alt: "node js" },
  { src: "/css-file.png", alt: "CSS3" },
  { src: "/java-script.png", alt: "JavaScript" },
  { src: "/html.png", alt: "html" },
  { src: "/mysql.png", alt: "mysql" },
  { src: "/python.png", alt: "python" },
  { src: "/social.png", alt: "aws" },
  { src: "/seo.png", alt: "seo" },
  { src: "/business-intelligence.png", alt: "power bi" },
  { src: "/physics.png", alt: "react" },
  { src: "/sass.svg", alt: "Sass" },
];

export default function Page() {
  return (
    <>
      <Head>
        <title>My Portfolio - Developer & Designer</title>
        <meta
          name="description"
          content="Portfolio website showcasing skills in web development and design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="px-3">
        <Container>
          <Navbar.Brand href="#home" className="text-warning">
            MY Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-warning">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-warning">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="text-warning">
                Contact
              </Nav.Link>
              <Nav.Link href="#skills" className="text-warning">
                Skills
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Spacer so content isn't hidden under fixed navbar */}
      <div style={{ paddingTop: "70px" }} />

      {/* Home Section */}
      <section
        id="home"
        className="d-flex align-items-center justify-content-center text-white text-center px-3"
        style={{
          backgroundColor: "#000",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <div>
          <h1 className="display-4 mb-4 text-warning">Welcome to My Site</h1>

          <Image
            src="/pexels-designecologist-1779487.jpg"
            alt="Banner"
            width={1200}
            height={675}
            style={{ borderRadius: "8px", maxWidth: "100%", height: "auto" }}
            priority
          />

          <p className="lead mt-3">
            I build modern, responsive websites and love to turn ideas into reality.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-5 bg-black text-white text-center px-3"
        style={{
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <div className="container">
          <h2 className="mb-4">About Me</h2>

          <Image
            src="/image.png"
            alt="About"
            width={1300}
            height={730}
            style={{ borderRadius: "8px", maxWidth: "100%", height: "auto" }}
            priority
          />

          <p className="mt-3">
            Hello! I’m a passionate developer with skills in HTML, CSS, JS, React, and more.
            I enjoy building sleek, responsive websites and always aim for pixel perfection.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="text-white d-flex align-items-center justify-content-center px-3"
        style={{
          backgroundColor: "#000",
          minHeight: "100vh",
          width: "100vw",
          position: "relative",
          overflow: "hidden",
          padding: "2rem 0",
        }}
      >
        <div style={{ position: "relative", maxWidth: "1200px", width: "100%" }}>
          <Image
            src="/pexels-negativespace-97077.jpg"
            alt="Contact Illustration"
            width={1200}
            height={800}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              filter: "brightness(0.5)",
            }}
          />

          <div
            className="p-4 rounded"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              maxWidth: "500px",
              width: "90%",
              boxShadow: "0 0 15px rgba(0,0,0,0.5)",
            }}
          >
            <h2 className="mb-4 text-center">Get in Touch</h2>
            {/* Form submits directly to your server API */}
            <Form method="POST" action="/api/contact">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="text-center py-5 bg-dark text-white px-3"
        style={{
          backgroundColor: "#000",
          minHeight: "60vh",
          width: "100vw",
        }}
      >
        <h2
          className="mb-3"
          style={{
            background: "linear-gradient(90deg, #FF00CC, #3333FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SKILLS
        </h2>

        <p className="mb-4">The skills, tools and technologies I use:</p>

        <div className="container">
          <div className="row justify-content-center">
            {skills.map((skill, index) => (
              <div className="col-4 col-sm-3 col-md-2 mb-3" key={index}>
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={50}
                  height={50}
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </section>
    </>
  );
}
