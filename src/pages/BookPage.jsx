import { useLocation } from "react-router-dom";
import BookService from "../components/BookProcess/BookService";
import BottomNav from "../components/BottomNav";
import ServiceBar from "../components/ServiceBar";
function BookPage() {
  const location = useLocation();
  const { service } = location.state;
  return (
      <>
      <ServiceBar service={service}/>
      <BookService service={service}/>
      <BottomNav />
      </>
  );
}

export default BookPage;
