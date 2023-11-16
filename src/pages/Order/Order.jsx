import Hero from "../Shared/Hero";
import orderImage from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories =['salad', 'pizza','soup',  'dessert','drinks']
    const {category} = useParams();
    // console.log(category);
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const dessert = menu.filter(pop => pop.category === 'dessert');
    const pizza = menu.filter(pop => pop.category === 'pizza');
    const soup = menu.filter(pop => pop.category === 'soup');
    const salad = menu.filter(pop => pop.category === 'salad');
    const drinks = menu.filter(pop => pop.category === 'drinks');
  return (
    <div>
        <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
      <Hero
        image={orderImage}
        title={"Our Shop"}
        subTitle={"Would you like to try a dish?"}
      ></Hero>
      <div className=" my-10">
        <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <div className=" flex justify-center"> 
          <TabList style={{ color: "#BB8506" , border:'0'}}>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          </div>

          <TabPanel>
            <FoodCard items={salad}></FoodCard>
          </TabPanel>
          <TabPanel>
          <FoodCard items={pizza}></FoodCard>
          </TabPanel>
          <TabPanel>
          <FoodCard items={soup}></FoodCard>
          </TabPanel>
          <TabPanel>
          <FoodCard items={dessert}></FoodCard>
          </TabPanel>
          <TabPanel>
          <FoodCard items={drinks}></FoodCard>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
