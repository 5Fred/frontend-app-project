import React, { useEffect, useState } from 'react';

function Booker() {
  const [authors, setAuthors] = useState([]);
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');

  useEffect(() => {
    fetch('http://localhost:9292/books')
      .then(res => res.json())
      .then(data => setAuthors(data));
  }, []);

  function addBook() {
    const newBook = {
      title: title,
      year_published: publisher
    };

    fetch('http://localhost:9292/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
      .then(res => res.json())
      .then(data => {
        setAuthors([...authors, data]);
        setTitle('');
        setPublisher('');
      });
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Publisher"
          value={publisher}
          onChange={e => setPublisher(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {authors.map(auth => (
        <div key={auth.id}>
          {auth.title} - {auth.year_published}
        </div>
      ))}
    </div>
  );
}

export default Booker;
