import "./Treatment.scss";

const Treatment = () => {
  const services = [
    { id: 1, title: "Body Treatment", img: "/Images/treatment/4.jpg", icon: "/Images/icons/1.png" },
    { id: 2, title: "Body Treatment", img: "/Images/treatment/5.jpg", icon: "/Images/icons/1.png" },
    { id: 3, title: "Body Treatment", img: "/Images/treatment/6.jpg", icon: "/Images/icons/1.png" },
    { id: 4, title: "Body Treatment", img: "/Images/treatment/7.jpg", icon: "/Images/icons/1.png" },
  ];

  return (
    <div className="spa-services">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <img src={service.img} alt={service.title} />
          <div className="overlay-content">
            <img src={service.icon} alt="icon" className="icon" />
            <h2>{service.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Treatment;
