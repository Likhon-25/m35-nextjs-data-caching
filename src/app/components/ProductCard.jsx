import React from "react";

const ProductCard = ({product}) => {
    const {id, name, price,description, category, brand} = product
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-success">{price}</button>
          <button className="btn btn-primary">Buy Now</button>
            
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
