/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = () => {
  const skills = [
    { src: "/icons/html5.svg", alt: "HTML5" },
    { src: "/icons/css3.svg", alt: "CSS3" },
    { src: "/icons/javascript.svg", alt: "JavaScript" },
    { src: "/icons/tailwind.svg", alt: "TailwindCSS" },
    { src: "/icons/npm.svg", alt: "NPM" },
    { src: "/icons/figma.svg", alt: "Figma" },
    { src: "/icons/react.svg", alt: "React" },
    { src: "/icons/webpack.svg", alt: "Webpack" },
    { src: "/icons/git.svg", alt: "Git" },
    { src: "/icons/wordpress.svg", alt: "WordPress" },
    { src: "/icons/sass.svg", alt: "Sass" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand bg-dark p-3 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="#home">
            MY Website
          </a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-warning" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
     <section
  id="home"
  className="d-flex align-items-center justify-content-center text-white"
  style={{
    backgroundColor: "#000",
    minHeight: "100vh",
    width: "100vw",
  }}
>
  <div className="text-center">
    <h1 className="display-4 mb-4 text-warning">Welcome to My Site</h1>

    <img
      src="/pexels-designecologist-1779487.jpg"
      alt="Banner"
      className="img-fluid mb-4"
      style={{ maxWidth: "1000px", borderRadius: "8px" }}
    />

    <p className="lead">
      I build modern, responsive websites and love to turn ideas into reality.
    </p>
  </div>
</section>


      {/* About Section */}
<section
  id="about"
  className="py-5 bg-black text-white"
  style={{
    minHeight: "100vh",
    width: "100vw",
  }}
>
  <div className="container text-center">
    <h2 className="mb-4">About Me</h2>

    <img
      src="/image.png" 
      alt="About"
      className="img-fluid mb-4"
      style={{
        maxWidth: "1000px",
        borderRadius: "8px",
      }}
    />

    <p>
      Hello! I’m a passionate developer with skills in HTML, CSS, JS, React, and more.
      I enjoy building sleek, responsive websites and always aim for pixel perfection.
    </p>
  </div>
</section>


      {/* Contact Section */}
      <section
        id="contact"
        className="py-5 bg-secondary text-white"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <h2>Contact</h2>
          <p>Put your contact details or a contact form here.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="text-center py-5 bg-dark text-white">
        <h2
          className="mb-3"
          style={{
            background: "linear-gradient(90deg, #FF00CC, #3333FF)",
            WebkitBackgroundClip: "text",
            color: "transparent",
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
      </section>

      {/* Add this CSS for smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Page;
