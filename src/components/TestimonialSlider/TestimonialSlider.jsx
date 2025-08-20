import React, { useState, useEffect } from "react";
import "./TestimonialSlider.scss";

const testimonials = [
  {
    id: 1,
    text: "First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.",
    author: "Jack Marsh",
    role: "Executive",
    image: "public/images/customers/client-1.png",
  },
  {
    id: 2,
    text: "First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.",
    author: "Jack Marsh",
    role: "Executive",
    image: "public/images/customers/client-2.png",
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-slider">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {testimonials.map((testimonial) => (
          <div className="slide" key={testimonial.id}>
            <img
              className="quote-icon"
              src="public/images/quote.png"
              alt="Quote"
            />
            <div className="quote-text">{testimonial.text}</div>
            <div className="profile">
              <img src={testimonial.image} alt={testimonial.author} />
              <h4>
                {testimonial.author} <span>{testimonial.role}</span>
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
