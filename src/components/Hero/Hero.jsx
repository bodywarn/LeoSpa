import { useEffect, useState } from "react";
import "./Hero.scss";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch("http://localhost:5029/hero");
        const data = await res.json();
        const activeHero = data.find((item) => item.show === true);
        setHeroData(activeHero);
      } catch (error) {
        console.error("Fejl ved hentning af hero data:", error);
      }
    };

    fetchHero();
  }, []);

  if (!heroData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="section-subtitle">{heroData.title1}</span>
        <h1 className="hero-title">{heroData.title2}</h1>
        <p className="hero-text">{heroData.content}</p>

        <div className="hero-buttons">
          <button className="btn-primary">Reserve Now</button>

          <VideoModal
            videoUrl={heroData.link.replace("watch?v=", "embed/")}
            buttonText="Watch our story"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
