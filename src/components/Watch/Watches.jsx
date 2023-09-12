import { useState, useEffect } from "react";
import { addToLS, getStorageCart } from "../../Utilities/Cart";
import Watch from "./Watch";

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
    const storedCart = getStorageCart();
    console.log(storedCart);
  }, []);
  // handle cart
  const handleCart = (items) => {
    setCart([...cart, items]);
    addToLS(items.id);

    console.log(addToLS);
  };

  return (
    <>
      <div>
        <h2 className="text-3xl text-white my-10">
          Watch List:{watches.length}
        </h2>
        <h2 className="text-3xl text-white my-10">Add to Cart:{cart.length}</h2>
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
