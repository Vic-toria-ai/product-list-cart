import React from "react";

export function ConfirmModal({ cart, clearCart, total }) {
  return (
    <div
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      id="confirmOrder"
      tabindex="-1"
      aria-labelledby="confirmOrderLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body d-flex flex-column gap-3 text-start">
            <div>
              <img src="/images/icon-order-confirmed.svg" />
            </div>
            <div>
              <h3 className="fs-3 fw-semibold">Order Confirmed</h3>
              <p className="text-muted">We hope you enjoy your food!</p>
            </div>
            {/* items list  */}
            <div>
              {cart.map((p) => (
                <div
                  key={p.name}
                  className="d-flex shadow-sm p-2 justify-content-between align-items-center mb-2"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img src={p.image.desktop} width={50} height={50} />
                    <div className="d-flex flex-column">
                      <span className="text-start text-dark fw-semibold small">
                        {p.name}
                      </span>
                      <div className="d-flex gap-2 small">
                        <span className="text-danger fw-semibold">{p.quantity}x</span>
                        <span className="text-muted">@ ${p.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="fw-semibold fs-5">${p.price}</div>
                </div>
              ))}
            </div>

            <p className="card-text d-flex justify-content-between align-items-center">
              <span className="fw-semibold">Order Total</span>{" "}
              <span className="fw-bold fs-4">${total}</span>
            </p>

            <button
              onClick={clearCart}
              data-bs-dismiss="modal"
              className="btn fw-semibold rounded-pill d-block start-order w-100 "
            >
              Start New Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
