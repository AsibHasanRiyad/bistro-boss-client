import SectionTitle from "./SectionTitle";
import image from "../assets/home/featured.jpg";
import '../css/featured.css'

const Featured = () => {
  return (
    <div
      className=" text-gray-200 bg-fixed featured mb-20"
    >
       <div className=" bg-gray-900 pb-24 pt-8 bg-opacity-50">
       <SectionTitle
          heading={"Check it Out"}
          subHeading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className=" md:flex justify-center items-center w-8/12 gap-10 mx-auto">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <p>March 20, 2023</p>
            <h1>WHERE CAN I GET SOME?</h1>
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
        </div>
      </div>
       </div>
    </div>
  );
};

export default Featured;
