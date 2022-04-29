import {
  BellIcon,
  StarIcon,
  ServerIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext";
import BottomNav from "../components/BottomNav";
import IsSigned from '../components/IsSigned'
function UserProfile() {
  const { customerDetails, setIsSignedIn, isSignedIn } = useContext(AppContext);
  const logOut = () => {
    setIsSignedIn(false)
  } 
  if(isSignedIn){
  return (
    <>
      <nav className="text-white text-xl font-semibold flex bg-gray-800 py-3 justify-between px-2 items-center relative">
        <Link to="/" className="md:block font-light">
          Service<span className="font-semibold">Hub</span>
        </Link>
      </nav>
      <div className="flex w-full items-start px-2 py-2">
        <img
          className="rounded-full w-16 h-16"
          src="../images/user-avatar.png"
          alt=""
        />
        <div className="ml-2 mt-2">
          <p className="text-sm font-medium">{customerDetails.name}</p>
          <p className="text-gray-500 text-xs">{customerDetails.email}</p>
        </div>
      </div>
      <div className="flex cursor-pointer w-52 rounded-md py-1 hover:bg-blue-200 mx-2 px-2 mb-2 items-center text-lg font-semibold">
        <BellIcon className="w-7 h-7 text-gray-500" />
        Notifications
      </div>
      <div className="flex cursor-pointer w-52 rounded-md py-1 hover:bg-blue-200 mx-2 px-2 my-8 items-center text-lg font-semibold">
        <StarIcon className="w-7 h-7 text-gray-500" />
        Rate us
      </div>
      <div className="flex cursor-pointer w-52 rounded-md py-1 hover:bg-blue-200 mx-2 px-2 mt-8 mb-4 items-center text-lg font-semibold">
        <ServerIcon className="w-7 h-7 text-gray-500" />
        About ServiceHub
      </div>
      <Link to="/" onClick={logOut} className="flex cursor-pointer w-52 rounded-md py-1 hover:bg-blue-200 mx-2 px-2 my-8 items-center text-lg font-semibold">
        <LogoutIcon className="w-7 h-7 text-gray-500" />
        Sign Out
      </Link>
      {/* Bottom navigation */}
     <BottomNav />
    </>
  );
  } else {
    return(
      <IsSigned />
    )
  }
}

export default UserProfile;
