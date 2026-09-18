import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  const { id, name, price, description, author } = book;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success">{price}</button>
          <button className="btn btn-primary">Buy Now</button>
          <Link href={`/books/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
