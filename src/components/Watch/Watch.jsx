const Watch = ({ watch, handleCart }) => {
  const { name, price, image } = watch;

  return (
    <div className="card my-5 bg-base-100 shadow-xl">
      <figure className="h-[16rem] w-[16rem] ">
        <img className="object-cover w-full h-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body px-0 py-2">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <div className="card-actions ">
          <button onClick={() => handleCart(watch)} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watch;
