import styles from "./service.module.scss";
import { Bath, Scissors, Flower } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Bath size={32} />,
      title: "Luxury Spa Therapy",
      desc: "Indulge in calming massages and full-body treatments designed to restore balance and peace.",
    },
    {
      icon: <Flower size={32} />,
      title: "Skin & Facial Care",
      desc: "Revitalize your skin with organic facials, scrubs, and rejuvenating beauty treatments.",
    },
    {
      icon: <Scissors size={32} />,
      title: "Hair & Beauty Styling",
      desc: "Experience professional styling, hair spa, and beauty services to refresh your look.",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesSection__container}>
        <h2 className={styles.servicesSection__heading}>Our Spa Services</h2>
        <p className={styles.servicesSection__subtext}>
          Treat yourself to premium spa and beauty services designed to make you
          feel renewed and radiant.
        </p>

        <div className={styles.servicesSection__grid}>
          {services.map((item, index) => (
            <div className={styles.servicesSection__card} key={index}>
              <div className={styles.servicesSection__icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.servicesSection__btnWrapper}>
          <Link to="/contact" className={styles.servicesSection__bookBtn}>
            💆 Book Your Session
          </Link>
          <Link to="/" className={styles.servicesSection__backBtn}>
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
