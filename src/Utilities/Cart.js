//====================Remember This when work with Local Storage================
// we need to do some simple steps here for set item in local storeage
// 1. set the item in local storage using localStorage.setItem()
// 2. remember all the value fo local storage used string
// 3. if we set an array it will not direcly taken it for save
// 4. it will convert it an string then set the LocalStorage we need to set it JSON.Stringify
// 5. then when we have fetch the data it will convert it back to json using  JSON.parse()

//==============For add cart in local storage=============
// 1. check the value if here of not
// 2. if not the cart value in local storage the set it

//  step 1
const getStorageCart = () => {
  const storedCartstring = localStorage.getItem("cart");

  if (storedCartstring) {
    return JSON.parse(storedCartstring);
  }
  return [];
};

// step 2 set the cart data in local storage
const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

//  step 3. this function will appear with the event button
const addToLS = (id) => {
  const cart = getStorageCart();
  cart.push(id);
  saveCartToLS(cart);
};

// remove cart items
const removeCartFromLS = (id) => {
  const cart = getStorageCart();
  const newCart = cart.filter((item) => item !== id);
  saveCartToLS(newCart);
};
export { addToLS, getStorageCart, removeCartFromLS };
