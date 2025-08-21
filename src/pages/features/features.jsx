import styles from "./feature.module.scss";
import { Leaf, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const data = [
    {
      icon: <Leaf size={32} />,
      title: "Natural Products",
      desc: "We only use organic, eco-friendly and high-quality spa products for your well-being.",
    },
    {
      icon: <Heart size={32} />,
      title: "Relaxing Atmosphere",
      desc: "Enjoy a calm and soothing environment designed to refresh your mind and body.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Professional Therapists",
      desc: "Our skilled therapists ensure the best treatments tailored to your needs.",
    },
  ];

  return (
    <section className={styles.featureSection}>
      <div className={styles.featureSection__container}>
        <h2 className={styles.featureSection__heading}>Our Spa Features</h2>
        <p className={styles.featureSection__subtext}>
          Discover what makes Leospa the perfect place for your relaxation and
          beauty journey.
        </p>

        <div className={styles.featureSection__grid}>
          {data.map((item, index) => (
            <div className={styles.featureSection__card} key={index}>
              <div className={styles.featureSection__icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.featureSection__btnWrapper}>
          <Link to="/" className={styles.featureSection__backBtn}>
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
