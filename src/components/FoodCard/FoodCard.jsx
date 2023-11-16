const FoodCard = ({ items }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {items.map((item) => (
        <div key={item._id} className="card w-96 bg-[#F3F3F3] rounded-none">
          <figure>
            <img className=" w-full" src={item.image} alt="Food" />
          </figure>
          <p className=" absolute right-3 top-3 bg-black text-white py-2 px-4">${item.price}</p>
          <div className="card-body">
            <h2 className=" text-[#151515] text-2xl font-semibold text-center">{item.name}</h2>
            <p className=" text-sm text-[#737373] text-justify">{item.recipe}</p>
            <div className=" flex justify-center items-center mt-5">
              <button className=" btn btn-outline border-0 border-b-4 text-[#BB8506] border-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] hover:border-[#BB8506] ">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
