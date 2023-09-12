import { useState, useEffect } from "react";
import {
  addToLS,
  getStorageCart,
  removeCartFromLS,
} from "../../Utilities/Cart";
import Watch from "./Watch";
import Cart from "./Cart";

const Watches = () => {
  // Define a state
  const [watches, setWatches] = useState([]);
  // Define a state for cart
  const [cart, setCart] = useState([]);
  // Define a useEffect
  useEffect(() => {
    const getWatches = async () => {
      try {
        const URL = "/api/WatchApi.json";
        const req = await fetch(URL);
        const data = await req.json();
        setWatches(data);
      } catch (error) {
        console.error("Error fetching watch data:", error);
      }
    };
    getWatches();
  }, []);

  // cart data fetch
  useEffect(() => {
    if (watches.length > 0) {
      const storedCart = getStorageCart();

      const savedCart = [];
      for (const id of storedCart) {
        const watch = watches.find((watch) => watch.id === id);
        if (watch) {
          savedCart.push(watch);
        }
        setCart(savedCart);
      }
    }
  }, [watches]);

  // handle cart
  const handleCart = (items) => {
    setCart([...cart, items]);
    addToLS(items.id);
  };

  const handleRemoveCart = (id) => {
    console.log("cart removed log");
    removeCartFromLS(id);
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-3xl text-white my-10">
          Watch List:{watches.length}
        </h2>
        <h2 className="text-3xl text-white my-10 gap-4">
          Add to Cart:{cart.length}
        </h2>
        <div className="cart my-10 grid grid-cols-8">
          {cart.map((item, index) => (
            <Cart
              handleRemoveCart={handleRemoveCart}
              key={index}
              cartItem={item}
            ></Cart>
          ))}
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-4 gap-4">
        {watches.map((watch) => (
          <Watch handleCart={handleCart} key={watch.id} watch={watch}></Watch>
        ))}
      </div>
    </>
  );
};

export default Watches;
