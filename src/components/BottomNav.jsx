import { Link } from "react-router-dom";
import {
  HomeIcon,
  CalendarIcon,
  UserCircleIcon,
  InformationCircleIcon
} from "@heroicons/react/solid";
const BottomNav = () => {
  return (
    <div className="flex justify-around fixed bg-white bottom-0 w-full">
      <div className="flex flex-col items-center justify-center">
        <Link exact to="/home">
          <HomeIcon className="w-6 h-6 cursor-pointer  text-indigo-500" />
        </Link>
        Home
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link to="/about">
          <InformationCircleIcon className="w-6 h-6 cursor-pointer  text-indigo-500" />
        </Link>
        ServiceHub
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link to="/customerbookings">
        <CalendarIcon className="w-6 h-6 cursor-pointer  text-indigo-500" />
        </Link>
        My Bookings
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link to="/profile">
        <UserCircleIcon className="w-6 h-6 cursor-pointer  text-indigo-500" />
        </Link>
        Profile
      </div>
    </div>
  );
};

export default BottomNav;
