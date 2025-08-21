import React, { useEffect, useState } from "react";
import "./Team.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5029/team")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data))
      .catch((err) => console.error("Error fetching team:", err));
  }, []);

  return (
    <section className="team">
      <h2 className="team__title">Experienced Team</h2>
      <p className="team__subtitle">
        To doesn’t his appear replenish together called he of mad place won’t
        wherein blessed second every wherein were meat kind wherein and martcin
      </p>

      <div className="team__container">
        {teamMembers.map((member) => (
          <div className="team__card" key={member._id}>
            <div className="team__image-wrapper">
              <img
                src={`http://localhost:5029/images/team/${member.image}`}
                alt={`${member.firstname} ${member.lastname}`}
                className="team__image"
              />
            </div>

            <div className="team__info">
              <h3>{member.firstname} {member.lastname}</h3>
              <p>{member.role}</p>
              <div className="team__social">
                <a href="#" className="team__icon"><FaFacebookF /></a>
                <a href="#" className="team__icon"><FaTwitter /></a>
                <a href="#" className="team__icon"><FaGooglePlusG /></a>
                <a href="#" className="team__icon"><FaInstagram /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
