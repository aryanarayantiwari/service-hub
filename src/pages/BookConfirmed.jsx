import { CheckCircleIcon } from "@heroicons/react/solid"
import { useContext } from "react"
import BottomNav from "../components/BottomNav"
import IsSigned from "../components/IsSigned"
import CustomNav from "../components/CustomNav"
import AppContext from "../AppContext"

const BookConfirmed = () => {
  const {isSignedIn} = useContext(AppContext)

  if(isSignedIn){
  return (
    <>
    <CustomNav />
    <div className="flex flex-col justify-center items-center h-screen">
      <CheckCircleIcon className="w-12 h-12 text-green-500"/>
      <p className="font-semibold text-xl">Booking Request Sent</p>
      <p>Go to bookings page to view your bookings</p>
      <BottomNav />
    </div>
    </>
  )
  } else {
    return(
      <IsSigned />
    )
  }
}

export default BookConfirmed