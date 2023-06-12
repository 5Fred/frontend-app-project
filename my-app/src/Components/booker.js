import React, { useState } from 'react';

function Booker() {
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');
  const [authors, setAuthors] = useState([]);

  const addBook = () => {
    // Create a new book object based on the entered title and publisher
    const newBook = {
      title: title,
      year_published: publisher
    };

    // Update the authors state array with the new book
    setAuthors(prevAuthors => [...prevAuthors, newBook]);

    // Clear the input fields after adding the book
    setTitle('');
    setPublisher('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Publisher/Year"
          value={publisher}
          onChange={e => setPublisher(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {authors.map((book, index) => (
        <div key={index}>
          {book.title} - {book.year_published}
        </div>
      ))}
    </div>
  );
}

export default Booker;
