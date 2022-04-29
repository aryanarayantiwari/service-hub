import { useContext,useState } from "react";
import AppContext from "../../AppContext";
import FirestoreContext from "../../FirestoreContext";
import { db } from "../../firebase.config";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import BookingCard from "./BookingCard";
const Booking = () => {
  // const {plumberBookings} = useContext(FirestoreContext)
  const [serviceBookings, setServiceBookings] = useState([])
  const {servicePerson} = useContext(FirestoreContext)
  const colRef = collection(db, "bookings");
  const q = query(colRef, where("service", "==", servicePerson.profession));
  const getserviceBookings = () => {
    onSnapshot(q, (snapshot) => {
      let bookings = [];
      snapshot.docs.forEach((doc) => {
        bookings.push({ ...doc.data(), id: doc.id });
        setServiceBookings(bookings);
      });
    });
  };
  getserviceBookings()
  return (
    <div>
      {
        serviceBookings.map((booking) => {
          return(
           <BookingCard key={booking.id} booking={booking}/>
          )
        })
      }
    </div>
  );
};

export default Booking;
