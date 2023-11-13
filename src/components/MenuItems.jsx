

const MenuItems = ({men}) => {
    const {price, image, name, recipe} = men
    return (
        <div className=" flex justify-center items-start gap-7">
            <img style={{borderRadius:'10px 200px 200px 200px'}} className=" w-[98px] h-[84px]" src={image} alt="" />
            <div>
                <h1 className=" text-xl text-[#151515] font-cinzel">{name} ------------------</h1>
                <p className=" text-[#737373]">{recipe}</p>
            </div>
            <p className=" text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItems;