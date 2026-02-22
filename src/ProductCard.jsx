import React from "react";

export const ProductCard = ({ data, cart, addToCart, decreaseQuantity }) => {
  const { id, image, name, category, price } = data;

  const product = cart.find((p) => p.id === id);

  return (
    <div className="card border-0 text-white">
      <div className="position-relative d-flex mb-3">
        <img src={image.desktop} className={`card-img-top rounded ${product && 'border border-3 border-danger'}`} alt={name} />
        {!product ? (
          <button
            onClick={() =>
              addToCart({
                id,
                name,
                price,
                image,
              })
            }
            className="btn customBtn d-flex align-items-center justify-content-center text-dark fw-semibold position-absolute top-100 start-50 translate-middle rounded-pill card-btn"
          >
            <span className="me-1"><img src="/images/icon-add-to-cart.svg" alt="" /></span>
            Add to cart
          </button>
        ) : (
          <button className="btn btn-danger text-white d-flex gap-4 text-danger position-absolute top-100 start-50 translate-middle rounded-pill ">
            <span className="" onClick={() => addToCart(product)}>
              <img src="/images/icon-increment-quantity.svg" className="increase"/>
            </span>
            <span>{product.quantity ?? 0}</span>
            <span onClick={() => decreaseQuantity(id)}>
              <img src="/images/icon-decrement-quantity.svg" className="decrease" />
            </span>
          </button>
        )}
      </div>

      <div className="card-body">
        <p className="card-title text-muted">{category}</p>
        <h6 className="text-dark">{name}</h6>
        <p className="text-danger fw-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};
