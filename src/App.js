import firebase from "./firebase.config";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import LandingPage from "./pages/Landingpage";
import { ContextProvider } from "./AppContext";
import ServiceProfile from "./pages/ServiceProfile";
import ServiceBookings from "./components/ServiceProvider/ServiceBookings";
import BookConfirmed from "./pages/BookConfirmed";
import SignUp from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";
import UserBookings from "./pages/UserBookings";
import About from "./pages/About";
import { FiresotreProvider } from "./FirestoreContext";
function App() {
  return (
    <ContextProvider>
    <FiresotreProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/serviceprofile" element={<ServiceProfile />} />
        <Route path="/servicebook" element={<ServiceBookings />} />
        <Route path="/bookconfirm" element={<BookConfirmed />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/customerbookings" element={<UserBookings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </FiresotreProvider>
    </ContextProvider>
  );
}

export default App;
