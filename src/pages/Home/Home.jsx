import Banner from "../../components/Banner";
import Category from "../../components/Category";
import bg from '../../assets/home/chef-service.jpg'
import PopularMenu from "./PopularMenu";
import Call from "../../components/Call";
import Featured from "../../components/Featured";

const Home = () => {
  return (
    <div className=" overflow-hidden mx-4 lg:mx-0">
      <Banner></Banner>
      <Category></Category>

      {/* bistro boss */}
      <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
      }} className=" text-center h-[380px] bg-fixed lg:h-[500px] flex justify-center items-center px-6 my-0 md:my-4 lg:my-16">
        <div className=" w-[300px] md:w-3/4 lg:w-full h-1/2 lg:max-w-3xl text-center mx-auto bg-white py-4 lg:py-10">
        <h1 className=" font-cinzel text-xl md:text-2xl lg:text-5xl font-normal">Bistro Boss</h1>
        <p className=" text-justify p-3 text-xs md:text-sm lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
        </div>
      </div>

      <PopularMenu></PopularMenu>
      <Call></Call>
      <Featured></Featured>
    </div>
  );
};

export default Home;
