import { useContext } from "react";
import AppContext from "../AppContext";
function ServiceBar({ service }) {
  const { location } = useContext(AppContext);
  return (
    <>
      <nav className="text-white text-xl font-semibold flex bg-gray-800 py-3 justify-start px-2 items-center relative">
        <div className="text-white text-sm">{service} in {location}</div>
        <div className="md:block font-light ml-auto">
          Service<span className="font-semibold">Hub</span>
        </div>
      </nav>
    </>
  );
}

export default ServiceBar;
