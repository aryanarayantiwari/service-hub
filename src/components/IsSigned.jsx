import { Link } from "react-router-dom"
function IsSigned() {
    return(
        <>
        <div className="flex justify-center items-center flex-col h-screen">
        <h2 className="font-semibold text-2xl ">Please Sign In or SignUp</h2>
        <Link to='/' className="border-black border  bg-gray-700 text-white px-2 py-1 my-2 rounded-md font-semibold">Go to SignIn/SignUp Page</Link>
        </div>
        </>
        )
}

export default IsSigned