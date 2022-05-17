import AcceptBook from "../components/UserBookings/AcceptBook";
import BottomNav from "../components/BottomNav";
import { useContext } from "react";
import FirestoreContext from "../FirestoreContext";
import Navbar from "../components/Navbar";
function UserBookings() {
  const { userbookings } = useContext(FirestoreContext)
  if(userbookings.length > 0){
    return (
      <div>
        <Navbar />
       {
         userbookings.map((booking) => {
           return(
           <AcceptBook key={booking.id} booking={booking}/>
           )
         })
       }
       <div className="my-14"></div>
        <BottomNav />
      </div>
    );  
  }
     else {
      return (
        <div>
          <Navbar />
          <div className="flex justify-center items-center font-semibold text-xl h-screen">No Bookings Found!</div>         
          <BottomNav />
        </div>
      );  
    }
}

export default UserBookings;
