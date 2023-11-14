import MenuItems from "../../components/MenuItems";

const MenuCategory = ({ item , button}) => {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 my-14">
        {item.map((men) => (
          <MenuItems key={men._id} men={men}></MenuItems>
        ))}
      </div>
      <div className=" flex justify-center items-center mt-5">
        <button className=" btn btn-outline border-0 border-b-4 mb-10 hover:bg-[#EEFF25] hover:text-slate-800">
         {button}
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
