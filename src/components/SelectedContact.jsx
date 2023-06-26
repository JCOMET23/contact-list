import React, { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      <h2>Selected Contact</h2>
      {
        contact (
            <>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Website: {contact.website}</p>
            <p>Company: {contact.company.name}</p>
            </>
        )
      }
      <button onClick={() => setSelectedContactId(null)}>
        Clear Selection
      </button>
    </div>
  );
}
