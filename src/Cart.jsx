import { useState } from "react";
import { ConfirmModal } from "./ConfirmModal";

export function Cart({
  cart,
  total,
  totalQuantity,
  removeFromCart,
  clearCart,
}) {
  return (
    <div className="card border-0">
      <div className="card-header border-0 fw-bold text-danger px-3 fs-4">
        Your Cart ({totalQuantity})
      </div>
      <div className="card-body text-center p-3">
        {cart.length === 0 && (
          <>
            <img src="/images/illustration-empty-cart.svg" alt="cart-svg" />
            <p className="fw-semibold empty-p">
              Your added items will appear here
            </p>
          </>
        )}

        {cart.length > 0 && (
          <>
            {cart.map((p) => (
              <div
                key={p.name}
                className="d-flex justify-content-between align-items-center mb-2"
              >
                <div className="d-flex flex-column">
                  <span className="text-start text-dark fw-semibold small">
                    {p.name}
                  </span>
                  <div className="d-flex gap-2 small">
                    <span className=" text-danger fw-semibold">{p.quantity}x</span>
                    <span className="text-muted">@ ${p.price}</span>
                    <span className="text-muted">
                      ${(p.price * p.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div onClick={() => removeFromCart(p.id)}>
                  <img src="/images/icon-remove-item.svg" className="x-circle"/>
                </div>
              </div>
            ))}
            <p className="card-text d-flex justify-content-between align-items-center">
              <span className="small">Order Total</span>{" "}
              <span className="fw-bold fs-4">${total}</span>
            </p>
            <div className="small d-flex align-items-center justify-content-center gap-2 mb-3 bg-carbon">
              <img src="/images/icon-carbon-neutral.svg" />
              <span>
                This is a <strong>carbon-neutral</strong> delivery
              </span>
            </div>
            <button
              data-bs-toggle="modal"
              data-bs-target="#confirmOrder"
              className="btn btn-danger rounded-pill d-block w-100 order-btn"
            >
              Confirm Order
            </button>

            <ConfirmModal clearCart={clearCart} cart={cart} total={total} />
          </>
        )}
      </div>
    </div>
  );
}
