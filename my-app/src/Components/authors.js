import React, { useEffect, useState } from "react";

function Author() {
  const [auths, setAuths] = useState([]);
  const [name, setNamer] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('http://localhost:9292/authors')
      .then(res => res.json())
      .then(data => setAuths(data));
  }, []);

  function addAuthor() {
    const newAuthor = {
      name: name,
      email: email
    };

    fetch('http://localhost:9292/authors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAuthor)
    })
      .then(res => res.json())
      .then(data => {
        setAuths([...auths, data]);
        setNamer('');
        setEmail('');
      });
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="name..."
          value={name}
          onChange={e => setNamer(e.target.value)}
        />
        <input
          type="text"
          placeholder="email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={addAuthor}>Add Contact</button>
      </div>
      <div>
        {auths.map((t) => (
          <div key={t.id}>
            <p>{t.name}</p>
            <p>{t.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Author;
