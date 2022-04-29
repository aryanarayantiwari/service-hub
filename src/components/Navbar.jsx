import { useContext } from "react";
import AppContext from "../AppContext";
const Navbar = () => {
  const {handleLocation} = useContext(AppContext)
  return (
    <>
      <nav className="flex bg-gray-800 p-4 justify-start items-center relative">
        <div className="flex flex-col md:flex-row md:space-x-2 font-semibold md:items-center justify-start">
          <h4 className="text-gray-50 text-sm md:text-base">You're in</h4>
          <select name="user-location" onChange={handleLocation} className="outline-none">
            <option value="user-location" disabled selected>Select Location</option>
            <option value="Indore">Indore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Banglore">Banglore</option>
          </select>
        </div>
        <div className="md:block text-white text-xl font-light absolute right-5">
          Service<span className="font-semibold">Hub</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
