import { createContext, useState } from "react";
const AppContext = createContext();
export const ContextProvider = ({ children }) => {
  const [service, setService] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [address, setAddress] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  
  const [providerDetails, setProviderDetails] = useState({
    name: "",
    email: "",
  });
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
  });



  const handleCustomer = (user) => {
    setCustomerDetails({
      name: user.displayName,
      email: user.email,
    });
  };

  const signUpProvider = (user) => {
    setProviderDetails({
      name: user.displayName,
      email: user.email,
    });
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleProfession = (e) => {
    setProfession(e.target.value);
  };
  return (
    <AppContext.Provider
      value={{
        location,
        providerDetails,
        city,
        profession,
        isSignedIn,
        customerDetails,
        service,
        bookingDate,
        bookingTime,
        paymentMethod,
        address,
        handleLocation,
        setProviderDetails,
        signUpProvider,
        handleCity,
        handleProfession,
        setIsSignedIn,
        handleCustomer,
        setAddress,
        setBookingDate,
        setBookingTime,
        setPaymentMethod,
        setService,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
