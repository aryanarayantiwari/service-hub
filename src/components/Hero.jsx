const Hero = () => {
  return (
    <div className="text-center flex justify-evenly items-center">
      <img src="../images/hero.jpeg" className="md:w-[500px]  w-40 bg-gray-700" alt="" />
      <div className="text-gray-900 ">
      <h1 className="md:text-4xl text-base font-semibold">Quality Services at your Doorstep</h1>
      <h2 className="md:text-lg text-xs">On Demand, Professional and Easy to Use</h2>
      </div>
    </div>
  );
};

export default Hero;
