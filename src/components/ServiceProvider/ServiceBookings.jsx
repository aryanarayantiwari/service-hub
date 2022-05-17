import {
  UserCircleIcon,
  CalendarIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Booking from "./Booking";
function ServiceBookings() {
  return (
    <div>
      <nav className="text-white text-xl font-semibold flex bg-gray-800 py-3 justify-between px-2 items-center relative">
        <Link to="/" className="md:block font-light">
          Service<span className="font-semibold">Hub</span>
        </Link>
        <div className="text-white text-sm">Professional</div>
      </nav>
      <Booking />
      <div className="flex justify-around fixed bg-white bottom-0 w-full">
        <div className="flex flex-col items-center justify-center">
          <Link exact to="/serviceprofile">
            <UserCircleIcon className="w-6 h-6 cursor-pointer  text-indigo-500" />
          </Link>
          Profile
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link to="/servicebook">
            <CalendarIcon className="w-6 h-6 cursor-pointer  text-indigo-500" />
          </Link>
          Manage Bookings
        </div>
      </div>
    </div>
  );
}

export default ServiceBookings;
