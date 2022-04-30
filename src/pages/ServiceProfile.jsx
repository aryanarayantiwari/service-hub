import ProfileCom from "../components/ServiceProvider/ProfileCom"
import { useContext } from "react"
import AppContext from "../AppContext"
import IsSigned from "../components/IsSigned"
import FirestoreContext from "../FirestoreContext"
function ServiceProfile() {
  const {isSignedIn} = useContext(AppContext)
  const { getServicePerson } = useContext(FirestoreContext)
  if(isSignedIn) {
  return (
    <>
    {getServicePerson()}
    {/* navigation */}
        <nav className="text-white text-xl font-semibold flex bg-gray-800 py-3 justify-between px-2 items-center relative">
        <div className="md:block font-light">
          Service<span className="font-semibold">Hub</span>
        </div>
        <div className="text-white text-sm">Professional</div>
      </nav>
    {/* Service Profile */}
    <ProfileCom/>
    {/* Bottom Navigation */}
    </>
  )} else {
    return(
    <IsSigned />
    )
  }
}

export default ServiceProfile