const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className=" text-center w-3/4 md:w-1/2 lg:w-1/4 mx-auto">
      <p className=" text-[#D99904] mb-2">---{subHeading}---</p>
      <h1 className=" border-y-4 text-2xl md:text-4xl py-2 uppercase ">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
