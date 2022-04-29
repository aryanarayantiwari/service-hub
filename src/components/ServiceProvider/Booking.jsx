import { useContext } from "react";
import FirestoreContext from "../../FirestoreContext";
import BookingCard from "./BookingCard";
const Booking = () => {
  const {plumberBookings} = useContext(FirestoreContext)
  return (
    <div>
      {
        plumberBookings.map((booking) => {
          return(
           <BookingCard booking={booking}/>
          )
        })
      }
    </div>
  );
};

export default Booking;
