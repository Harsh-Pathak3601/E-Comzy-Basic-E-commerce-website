import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
  <div className="min-h-screen bg-gray-100 py-10 px-6">
    {
      cart.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT SIDE - CART ITEMS */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 border-b pb-3">
              Shopping Cart
            </h2>

            <div className="flex flex-col gap-6">
              {
                cart.map((item, index) => (
                  <CartItems
                    key={item.id}
                    item={item}
                    itemIndex={index}
                  />
                ))
              }
            </div>
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Total Amount</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300">
              Proceed to Checkout
            </button>
          </div>

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6 min-h-[60vh]">
          <h1 className="text-2xl font-semibold text-gray-700">
            Your Cart is Empty
          </h1>

          <Link to={"/"}>
            <button className="bg-green-600 px-8 py-3 rounded-xl text-white font-medium hover:bg-green-700 transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )
    }
  </div>
);

};

export default Cart;