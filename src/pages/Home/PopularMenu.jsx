
import SectionTitle from "../../components/SectionTitle";
import MenuItems from "../../components/MenuItems";
import useMenu from "../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(pop => pop.category === 'popular');
    return (
        <div>
             <div className=" my-10">
             <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it Out'}></SectionTitle>
             </div>
             <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 my-14">
                {
                    popular.map(men => <MenuItems key={men._id} men={men}></MenuItems>)
                }
             </div>
             <div className=" flex justify-center items-center mt-5">
                <button className=" btn btn-outline border-0 border-b-4 hover:bg-[#EEFF25] hover:text-slate-800">View Full Menu</button>
             </div>
        </div>
    );
};

export default PopularMenu;