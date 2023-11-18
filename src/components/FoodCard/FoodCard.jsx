// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";

import Food from "./Food";


const FoodCard = ({ items }) => {
  // const {user} = useContext(AuthContext)

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 my-10">
      {
        items.map(item => <Food item={item} key={item._id}></Food>)
      }
    </div>
  );
};

export default FoodCard;
