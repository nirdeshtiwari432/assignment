import { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

export default function ContactForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const isValid =
    form.name && form.email.includes("@") && form.phone;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://assignment-eta-indol.vercel.app/api/contacts",
      form
    );
    setForm({ name: "", email: "", phone: "", message: "" });
    onAdd();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Add Contact</h2>

      <input
        className="form-input"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="form-input"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        className="form-input"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <textarea
        className="form-textarea"
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button className="submit-btn" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
