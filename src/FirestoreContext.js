import { createContext, useState } from "react";
import { useContext } from "react";
import { db } from "./firebase.config";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query, where
} from "firebase/firestore";
import AppContext from "./AppContext";
const FirestoreContext = createContext();

export const FiresotreProvider = ({ children }) => {
  const [userbookings, setuserbookings] = useState([]);
  const {
    customerDetails,
    service,
    bookingDate,
    bookingTime,
    paymentMethod,
    address,
  } = useContext(AppContext);
  // collection ref
  const colRef = collection(db, "bookings");

  // queries
  const q = query(colRef, where("email", "==", customerDetails.email))


  const getBookings = () => {
    onSnapshot(q, (snapshot) => {
      let bookings = [];
      snapshot.docs.forEach((doc) => {
        bookings.push({ ...doc.data(), id: doc.id });
        setuserbookings(bookings)
      });
    });
  };

  const addBooking = () => {
    addDoc(colRef, {
      address: address,
      date: bookingDate,
      name: customerDetails.name,
      email: customerDetails.email,
      payment: paymentMethod,
      service: service,
      status: "pending",
      time: bookingTime,
    });
  };

  const deleteBooking = (id) => {
    console.log(id)
    const docRef = doc(db, "bookings", id);
    deleteDoc(docRef).then(() => {
      console.log("deleted")
      getBookings()
    });
  };


  return (
    <FirestoreContext.Provider
      value={{
        userbookings,
        addBooking,
        deleteBooking,
        getBookings
      }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};
export default FirestoreContext;
