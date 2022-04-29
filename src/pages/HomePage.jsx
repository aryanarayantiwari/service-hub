import { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import IsSigned from "../components/IsSigned";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import FirestoreContext from "../FirestoreContext";
const HomePage = () => {
  const { isSignedIn } = useContext(AppContext)
  const {getBookings, userbookings} = useContext(FirestoreContext)
  useEffect(() => {
    getBookings()
  },[userbookings])
  if(isSignedIn) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <BottomNav />
    </div>
  );
  } else {
    return(
    <IsSigned />
    )    
  }
};

export default HomePage;
