import AcceptBook from "../components/UserBookings/AcceptBook";
import CustomNav from "../components/CustomNav";
import BottomNav from "../components/BottomNav";
import { useContext } from "react";
import FirestoreContext from "../FirestoreContext";
function UserBookings() {
  const { userbookings } = useContext(FirestoreContext)
  if(userbookings.length > 0){
    return (
      <div>
        <CustomNav />
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
          <CustomNav />
          <div className="flex justify-center items-center font-semibold text-xl h-screen">NO Bookings Found!</div>         
          <BottomNav />
        </div>
      );  
    }
}

export default UserBookings;
