import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItems from "../../components/MenuItems";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popular = data.filter(pop => pop.category === 'popular');
            setMenu(popular)
        })
    },[])
    console.log(menu);
    return (
        <div>
             <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it Out'}></SectionTitle>
             <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 my-14">
                {
                    menu.map(men => <MenuItems key={men._id} men={men}></MenuItems>)
                }
             </div>
             <div className=" flex justify-center items-center mt-5">
                <button className=" btn btn-outline border-0 border-b-4">View Full Menu</button>
             </div>
        </div>
    );
};

export default PopularMenu;