import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { useContext } from "react";
import AppContext from "../AppContext";
import IsSigned from "../components/IsSigned";
function About() {
  const { isSignedIn } = useContext(AppContext);
  if(isSignedIn){
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <div className="font-semibold mx-5 my-14 md:flex md:justify-center md:items-center block text-justify">
          ServiceHub is a website – based service marketplace that connects
          customer to service professional. Our strategy is to connect a greater
          number of customers to use our platform to make their life easier and
          more comfortable by providing on demand services through our website.
          ServiceHub has multiple categories to choose from for all of your
          daily needs. ServiceHub provides a platform that allows skilled and
          experienced professionals to connect with users looking for specific
          services. Professionals can list their services on website. Once on
          the platform, our match-making algorithm identifies professionals who
          are closest to the users’ requirements and available at the requested
          time and date.
        </div>
        <img src="../images/services.jpg" alt="" />
        <BottomNav />
      </div>
    </>
  );
  } else {
    return(
      <IsSigned />
    )
  }
}

export default About;
