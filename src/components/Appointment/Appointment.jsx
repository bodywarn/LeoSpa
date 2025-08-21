import React, { useMemo, useState } from "react";
import "./Appointment.scss";

const services = [
  { value: "", label: "Select service" },
  { value: "thai-massage", label: "Thai Massage" },
  { value: "facial", label: "Facial Treatment" },
  { value: "waxing", label: "Waxing / Hair Removal" },
  { value: "cellulite", label: "Cellulite Treatment" },
];

const Appointment = () => {
  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setMonth(today.getMonth() + 6);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = 8; hour <= 20; hour++) {
      for (let minute of [0, 15, 30, 45]) {
        if (hour === 20 && minute > 0) break; 
        const hh = String(hour).padStart(2, "0");
        const mm = String(minute).padStart(2, "0");
        slots.push(`${hh}:${mm}`);
      }
    }
    return slots;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment submitted:", form);
  };

  const formatDate = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;

  return (
    <section className="appointment">
      <div className="appointment__image">
        <img src="/Images/appointment.jpg" alt="Appointment" />
      </div>

      <div className="appointment__panel">
        <form className="appointment__form" onSubmit={handleSubmit}>
          <div className="appointment__row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="appointment__row">
            <div className="field">
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                {services.map((s) => (
                  <option key={s.value} value={s.value} disabled={!s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="appointment__row">
            <div className="field">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                name="date"
                min={formatDate(today)}
                max={formatDate(maxDate)}
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field time-picker">
              <label htmlFor="time">Time</label>
              <select
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  --:--
                </option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="field field--full">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows="3"
              value={form.notes}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="appointment__cta">
            Make an Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
