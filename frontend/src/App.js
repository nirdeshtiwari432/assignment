import { useEffect, useState } from "react";
import ContactForm from "./component/contactForm/ContactForm";
import ContactList from "./component/contactList/ContactList";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get("https://assignment-eta-indol.vercel.app/api/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h2>Contact Manager</h2>
      <ContactForm onAdd={fetchContacts} />
      <ContactList contacts={contacts} onDelete={fetchContacts} />
    </div>
  );
}

export default App;
