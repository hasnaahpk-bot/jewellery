import React from "react";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-gray-400">
        Cart is empty
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 sm:p-6">
      <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
        My Cart
      </h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="
              flex flex-col sm:flex-row
              sm:items-center gap-4
              border border-gray-700 p-4 rounded-lg
            "
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.name}
              className="w-16 sm:w-20 mx-auto sm:mx-0"
            />

            {/* INFO */}
            <div className="flex-1 text-center sm:text-left">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-400">
                ₹{item.price} × {item.qty} = ₹{item.price * item.qty}
              </p>
            </div>

            {/* QUANTITY + REMOVE */}
            <div
              className="
                flex items-center justify-between
                sm:justify-end gap-4
              "
            >
              {/* QTY CONTROLS */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 rounded bg-gray-700 text-white"
                >
                  −
                </button>

                <span className="w-6 text-center">{item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 rounded bg-[#d6ff3f] text-black"
                >
                  +
                </button>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
