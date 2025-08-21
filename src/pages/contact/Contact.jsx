import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactSection__container}>
        <h2 className={styles.contactSection__heading}>Contact Us</h2>
        <p className={styles.contactSection__subtext}>
          Have questions or want to book an appointment? Get in touch with us!
        </p>

        <div className={styles.contactSection__grid}>
          <form className={styles.contactSection__form}>
            <div className={styles.contactSection__formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>

            <div className={styles.contactSection__formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>

            <div className={styles.contactSection__formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="5" required />
            </div>

            <button type="submit" className={styles.contactSection__submitBtn}>
              Send Message
            </button>
          </form>

          <div className={styles.contactSection__card}>
            <h3>Get in Touch</h3>
            <p><strong>📞 Phone:</strong> 23 33 43 55</p>
            <p><strong>📧 Email:</strong> info@leospa-beauty.dk</p>
            <p><strong>📍 Location:</strong><br />
              Spavej 33, Strandby<br />
              9900 Skagen
            </p>
          </div>
        </div>

        <div className={styles.contactSection__btnWrapper}>
          <a href="/" className={styles.contactSection__backBtn}>
            Go Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
