import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext";
function SignUp() {
  const navigate = useNavigate();
  const { handleCity, handleProfession, providerDetails, setProviderDetails, city, profession } =
    useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProviderDetails({ ...providerDetails , city:city, profession:profession});
    navigate("/serviceprofile");
  };

  return (
    <div>
      <nav className="text-white text-xl font-semibold flex bg-gray-800 py-3 justify-between px-2 items-center relative">
        <Link to="/" className="md:block font-light">
          Service<span className="font-semibold">Hub</span>
        </Link>
        <div className="text-white text-sm">Professional</div>
      </nav>
      <form
        onSubmit={handleSubmit}
        className="h-screen flex flex-col m-16 md:w-1/2 space-y-4"
      >
        <h3 className="text-center font-semibold uppercase">
          We are happy to have you onboard with us!
        </h3>
        <div className="flex w-full justify-between">
          <label className="font-semibold">Name</label>
          <h2>{providerDetails.name}</h2>
        </div>
        <div className="flex w-full justify-between">
          <label className="font-semibold">Email</label>
          <p>{providerDetails.email}</p>
        </div>
        <div className="flex w-full justify-between">
          <label className="font-semibold">City</label>
          <select
            className="outline-none border border-black"
            onChange={handleCity}
          >
            <option value="" selected disabled>Select City</option>
            <option value="Indore">Indore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Banglore">Banglore</option>
          </select>
        </div>
        <div className="flex w-full justify-between">
          <label className="font-semibold">Profession</label>
          <input
            type="text"
            className="border border-black outline-none focus-within:border-green-500"
            onChange={handleProfession}
          />
        </div>
        <div className="flex justify-between">
          <label className="font-semibold">Upload Verification Documents</label>
          <input type="file" className="text-sm border border-black" />
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Sign Up"
            className="border border-black bg-green-500 font-semibold text-white py-1 w-1/2"
          />
        </div>
      </form>
    </div>
  );
}

export default SignUp;