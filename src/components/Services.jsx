import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div>
      <h1 className="font-semibold md:text-2xl text-lg pl-4 text-gray-50 py-3 mb-2 bg-gray-800">
        Categories
      </h1>
      <div className="grid grid-cols-3 mb-12 md:my-2  font-semibold justify-evenly items-center">
        <Link to="/book" state={{service:"Beauty and Spa"}} className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
          <img
            src="../images/beauty.png"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
            alt="beauty"
          />
          Beauty & Spa
        </Link>
        <div className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
        <Link to="/book" state={{service:"Appliance Repair"}} className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
          <img
            src="../images/repair.png"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
            alt="repair"
          />
          Appliance Repair
          </Link>
        </div>
        <div className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
        <Link to="/book" state={{service:"Home Cleaning"}} className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
          <img
            src="../images/clean.png"
            alt="clean"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Home Cleaning
          </Link>
        </div>
        <div className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
        <Link to="/book" state={{service:"Carpenter"}} className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
          <img
            src="../images/carpenter.png"
            alt="event"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Carpenter
          </Link>
        </div>
        <div className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
        <Link to="/book" state={{service:"Paints"}} className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
          <img
            src="../images/paints.png"
            alt="paints"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Paints
          </Link>
        </div>
        <div className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
        <Link to="/book" state={{service:"Pest Control"}} className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
          <img
            src="../images/pest.png"
            alt="pest"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Pest Control
          </Link>
        </div>
        <div className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
        <Link to="/book" state={{service:"Moving Homes"}} className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
          <img
            src="../images/movehome.png"
            alt="movehome"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Moving Homes
          </Link>
        </div>
        <div className=" flex flex-col items-center py-3 md:py-0.5 md:my-12">
        <Link to="/book" state={{service:"Plumber"}} className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
          <img
            src="../images/plumber.png"
            alt="plumber"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Plumber
          </Link>
        </div>
        <div className=" flex flex-col items-center py-3 md:py-0.5 md:my-12">
        <Link to="/book" state={{service:"Electrical"}} className=" flex flex-col items-center py-3 md:py-0.5 md:my-12 md:text-base text-sm text-center">
          <img
            src="../images/electrical.png"
            alt="electrical"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Electrical
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
