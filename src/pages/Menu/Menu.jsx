import { Helmet } from "react-helmet-async";
import Hero from "../Shared/Hero";
import menuBg from '../../assets/menu/banner3.jpg'
import desertBg from '../../assets/menu/dessert-bg.jpeg'
import soupBg from '../../assets/menu/soup-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory";
import SectionTitle from "../../components/SectionTitle";
const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(pop => pop.category === 'dessert');
    const pizza = menu.filter(pop => pop.category === 'pizza');
    const soup = menu.filter(pop => pop.category === 'soup');
    const salad = menu.filter(pop => pop.category === 'salad');
    const offered = menu.filter(pop => pop.category === 'offered');
    // console.log(menu, dessert, pizza);
  return (
    <div className="">
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
        <Hero image={menuBg} title={'OUR MENU'} subTitle={'Would you like to try a dish?'}></Hero>
        <div className=" mt-10">
        <SectionTitle heading="TODAY'S OFFER" subHeading="Don't Miss"></SectionTitle>
        </div>
        <MenuCategory item={offered} title={'offered'} button={'ORDER YOUR FAVOURITE FOOD'} ></MenuCategory>
        {/* dessert */}
        <Hero image={desertBg} button={'ORDER YOUR FAVOURITE FOOD'} title={'Desserts'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Hero>
        <MenuCategory item={dessert} title={'dessert'} button={'ORDER YOUR FAVOURITE FOOD'} ></MenuCategory>
        {/* pizza */}
        <Hero image={pizzaBg} title={'Pizza'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }></Hero>
        <MenuCategory item={pizza} title={'pizza'}  button={'ORDER YOUR FAVOURITE FOOD'} ></MenuCategory>
          {/* salad */}
        <Hero image={saladBg} title={'Salad'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Hero>
        <MenuCategory item={salad} title={'salad'} button={'ORDER YOUR FAVOURITE FOOD'} ></MenuCategory>
        {/* soup */}
        <Hero image={soupBg} title={'Soup'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Hero>
        <MenuCategory item={soup} title={'soup'} button={'ORDER YOUR FAVOURITE FOOD'} ></MenuCategory>
    </div>
  );
};

export default Menu;
