const Cart = ({ cartItem }) => {
  const { name, image, price } = cartItem;
  console.log(name);
  console.log(cartItem);
  return (
    <>
      <div className="card w-[10rem] h-[16rem] bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body py-2 px-0">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions ">
            <button className="btn btn-primary">{price}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
