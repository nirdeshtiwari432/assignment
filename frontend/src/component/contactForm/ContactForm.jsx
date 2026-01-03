import { useState } from "react";
import axios from "axios";

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
    await axios.post("assignment-eta-indol.vercel.app/api/contacts", form);
    setForm({ name: "", email: "", phone: "", message: "" });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Email" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input placeholder="Phone" value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })} />

      <textarea placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })} />

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
