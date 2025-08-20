import React from "react";
import "./Procedures.scss";

const procedures = [
  {
    id: 1,
    title: "Massage Therapy",
    description:
      "Living winged said you darkness you’re divide gathered and bring one seasons face great dr Waters firmament place which…",
    image: "/Images/treatment/1.jpg",
  },
  {
    id: 2,
    title: "Beauty Care",
    description:
      "Living winged said you darkness you’re divide gathered and bring one seasons face great dr Waters firmament place which…",
    image: "/Images/treatment/2.jpg",
  },
  {
    id: 3,
    title: "Executive Reflexology",
    description:
      "Living winged said you darkness you’re divide gathered and bring one seasons face great dr Waters firmament place which…",
    image: "/Images/treatment/3.jpg",
  },
];

const Procedures = () => {
  return (
    <section className="procedures">
      <div className="container">
        <h2 className="section-title">Popular Procedures</h2>
        <p className="section-subtitle">
          To doesn’t his appear replenish together called he of mad place won’t wherein blessed second every wherein were meat kind wherein and martin
        </p>

        <div className="cards">
          {procedures.map((procedure) => (
            <div className="card" key={procedure.id}>
              <div className="image-wrapper">
                <img src={procedure.image} alt={procedure.title} />
              </div>
              <div className="card-content">
                <h3>{procedure.title}</h3>
                <p>{procedure.description}</p>
                <button className="btn">READ MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
