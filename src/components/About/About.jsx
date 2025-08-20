import React, { useEffect, useState } from "react";
import "./About.scss";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5029/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((err) => console.error("Error fetching about data:", err));
  }, []);

  if (!aboutData) {
    return <div className="about">Loading...</div>;
  }

  return (
    <section id="about" className="about">
    <div className="about-image">
    <img src="public/images/butterfly.png" alt="Butterfly" />
    </div>
    <p className="about-subtitle">ABOUT OUR SPA CENTER</p>
    <h2 className="about-title">{aboutData.title}</h2>
    <p
      className="about-content"
      dangerouslySetInnerHTML={{ __html: aboutData.content }}
    />
    <a href="/" className="about-button">
      READ MORE
    </a>
    </section>
  )

}

export default About;