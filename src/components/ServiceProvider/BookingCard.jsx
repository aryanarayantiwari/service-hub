import { InformationCircleIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import FirestoreContext from "../../FirestoreContext";
const BookingCard = ({booking}) => {
  const {deleteBooking} = useContext(FirestoreContext)
  const handleClick = () => {
    toast.success('Booking Accepted', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      document.getElementById(booking.id).style.display = "none"
  }
  const handleDecline = () => {
    toast.info('Booking Deleted', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    deleteBooking(booking.id)
    
  }
  return (
    <>
      <div className="m-2 border-2 border-gray-500 px-2 rounded-lg py-1 font-semibold">
        <ToastContainer/>
        <h2 className="text-xl border-b-2">{booking.service}</h2>
        <div className="flex items-center">
          <InformationCircleIcon className="w-5 h-5 text-green-500" />
          <h3 className="text-green-500">Booking Information</h3>
        </div>
        <p className="text-sm text-gray-500">Scheuled Date and Time</p>
        <h4>{booking.time}, {booking.date}</h4>
        <div className="flex text-sm items-center justify-start space-x-2">
        <p className="text-gray-500">Address -</p>
        <p className="">{booking.address} ,{booking.location}</p>
        </div>
        <div id={booking.id} className="w-full flex justify-around p-2 items-center text-blue-700 font-semibold">
        <div onClick={handleClick} className="cursor-pointer hover:bg-blue-100 hover:rounded-md p-1">
          Accept 
        </div>
        <div onClick={handleDecline} className="cursor-pointer hover:bg-blue-100 hover:rounded-md p-1">
          Decline 
        </div>
      </div>
      </div>
    </>
  );
};

export default BookingCard;
