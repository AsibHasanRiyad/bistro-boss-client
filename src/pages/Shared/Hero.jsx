import { Parallax } from "react-parallax";


const Hero = ({ image, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt="Image"
      strength={-200}
    >
      <div
        className="hero h-96 md:h-[70vh] mt-8 md:mt-20"
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-40 py-6 md:py-12 w-3/4 lg:w-7/12 ">
          <div className=" text-white ">
            <h1 className="mb-2 text-2xl md:text-5xl font-bold font-cinzel">{title}</h1>
            <p className="mb-2 text-sm font-cinzel">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
     </Parallax>
  );
};

export default Hero;
