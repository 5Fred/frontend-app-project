import React, { useEffect, useState } from "react";

function Author() {
  const [auths, setAuths] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/authors")
      .then((res) => res.json())
      .then((data) => setAuths(data));
  }, []);

  function addAuthor() {
    const newAuthor = {
      name: name,
      email: email,
      timestamp: new Date().toLocaleString()
    };

    fetch("http://localhost:9292/authors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAuthor)
    })
      .then((res) => res.json())
      .then((data) => {
        setAuths([...auths, data]);
        setName("");
        setEmail("");
      });
  }

  function toggleFavorite(author) {
    if (favorites.includes(author)) {
      setFavorites(favorites.filter((fav) => fav !== author));
    } else {
      setFavorites([...favorites, author]);
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addAuthor}>Add Contact</button>
      </div>
      <div>
        {auths.map((author) => (
          <div key={author.id}>
            <p>{author.name}</p>
            <p>{author.email}</p>
            <p>Added on: {author.timestamp}</p>
            <button
              onClick={() => toggleFavorite(author)}
              style={{
                backgroundColor: favorites.includes(author) ? "red" : "green",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              {favorites.includes(author) ? "Unfavorite" : "Favorite"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Author;
