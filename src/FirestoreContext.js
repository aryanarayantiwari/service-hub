import { createContext, useState } from "react";
import { useContext } from "react";
import { db } from "./firebase.config";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import AppContext from "./AppContext";
const FirestoreContext = createContext();

export const FiresotreProvider = ({ children }) => {
  const [userbookings, setuserbookings] = useState([]);
  const [servicePerson, setServicePerson] = useState({})
  const {
    customerDetails,
    service,
    bookingDate,
    bookingTime,
    paymentMethod,
    address,
    location,
  } = useContext(AppContext);

  const { providerDetails, city, profession } = useContext(AppContext);
  // collection ref
  const colRef = collection(db, "bookings");
  const serviceRef = collection(db, "serviceperson");

  // queries
  const q = query(colRef, where("email", "==", customerDetails.email));
  const q2 = query(serviceRef, where("email", "==", providerDetails.email));
  

  const getBookings = () => {
    onSnapshot(q, (snapshot) => {
      let bookings = [];
      snapshot.docs.forEach((doc) => {
        bookings.push({ ...doc.data(), id: doc.id });
        setuserbookings(bookings);
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
      location: location,
    });
  };

  const deleteBooking = (id) => {
    const docRef = doc(db, "bookings", id);
    deleteDoc(docRef).then(() => {
      getBookings();
    });
  };

  const getServicePerson = () => {
    onSnapshot(q2, (snapshot) => {
      let person = []
      snapshot.docs.forEach((doc) => {
        person.push({ ...doc.data(), id: doc.id });
      });
      setServicePerson(person[0])
    });
  }

  const addServicePerson = () => {
    addDoc(serviceRef, {
      name: providerDetails.name,
      email: providerDetails.email,
      city: city,
      profession: profession,
    });
  };

  return (
    <FirestoreContext.Provider
      value={{
        userbookings,
        servicePerson,
        addBooking,
        deleteBooking,
        getBookings,
        addServicePerson,
        getServicePerson,
      }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};
export default FirestoreContext;
