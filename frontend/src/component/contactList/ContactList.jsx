import axios from "axios";
import "./ContactList.css";

export default function ContactList({ contacts = [], onDelete }) {
  const deleteContact = async (id) => {
    await axios.delete(
      `https://assignment-eta-indol.vercel.app/api/contacts/${id}`
    );
    onDelete();
  };

  return (
    <div className="table-wrapper">
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.length > 0 ? (
            contacts.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteContact(c._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="empty-state">
                No contacts found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
