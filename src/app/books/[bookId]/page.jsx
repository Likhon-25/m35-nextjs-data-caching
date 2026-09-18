import React from "react";

const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();

  return
};
const BookDetailPage = async ({ params }) => {
  const { bookId } = await params;
  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();

  return (
    <div>
      <h2>Book Details</h2>
      <h3>Title: {book.name}</h3>
      <p>Discription: {book.description}</p>
      <p>Author: {book.author}</p>
      <p>Price: {book.price}</p>
    </div>
  );
};

export default BookDetailPage;
