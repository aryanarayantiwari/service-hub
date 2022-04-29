import {
  BellIcon,
  LogoutIcon,
  StarIcon,
  ServerIcon,
  UserCircleIcon,
  CalendarIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import {useContext} from "react"
import AppContext from "../../AppContext";
function ProfileCom() {
  const { providerDetails, setIsSignedIn } = useContext(AppContext)
  const handleSignOut = () => {
    setIsSignedIn(false)
  }
  return (
    <>
      <div className="flex w-full items-start px-2 py-2">
        <img
          className="rounded-full w-16 h-16"
          src="../images/people.png"
          alt=""
        />
        <div className="ml-2 mt-2">
          <p className="text-sm font-medium">{providerDetails.name}</p>
          <p className="text-gray-500 text-xs">{providerDetails.profession} {providerDetails.profession && providerDetails.city ? 'in' : ""} {providerDetails.city}</p>
          <p className="text-gray-500 text-xs">{providerDetails.email}</p>
        </div>
      </div>
      <div className="flex cursor-pointer w-52 rounded-md py-1 hover:bg-blue-200 mx-2 px-2 mb-2 items-center text-lg font-semibold">
        <BellIcon className="w-7 h-7 text-gray-500" />
        Notifications
      </div>
      <div className="flex cursor-pointer w-52 rounded-md py-1 hover:bg-blue-200 mx-2 px-2 my-8 items-center text-lg font-semibold">
        <StarIcon className="w-7 h-7 text-gray-500" />
        Feedback Received
      </div>
      <Link to="/about" className="flex cursor-pointer w-52 rounded-md py-1 hover:bg-blue-200 mx-2 px-2 mt-8 mb-4 items-center text-lg font-semibold">
        <ServerIcon className="w-7 h-7 text-gray-500" />
        About ServiceHub
      </Link>
      <Link to="/" onClick={handleSignOut} className="flex cursor-pointer w-52 rounded-md py-1 hover:bg-blue-200 mx-2 px-2 my-8 items-center text-lg font-semibold">
        <LogoutIcon className="w-7 h-7 text-gray-500"  />
        Sign Out
      </Link>
      {/* Bottom navigation */}
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
    </>
  );
}

export default ProfileCom;
