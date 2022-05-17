import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="text-white text-xl font-semibold flex bg-gray-800 py-3 justify-between px-2 items-center relative">
    <Link to="/" className="md:block font-light">
      Service<span className="font-semibold">Hub</span>
    </Link>
  </nav>
  )
}

export default Navbar