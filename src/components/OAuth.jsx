import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";
import { useContext } from "react";
function OAuth() {
  const { signUpProvider, setIsSignedIn, handleCustomer } = useContext(AppContext)
  const navigate = useNavigate();
  const customerSignUp = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if(user){
        setIsSignedIn(true)
        handleCustomer(user)
        navigate('/home')
      }
    } catch (error) {
      console.log(error + "Could not Sign In");
    }
  };
  const goServicePage = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if(user){
      signUpProvider(user)
      setIsSignedIn(true)
      navigate('/serviceprofile')
      }
    } catch (error) {
      console.log(error + "Could not Sign In");
    }
  };

  const signUp = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if(user){
      signUpProvider(user)
      setIsSignedIn(true)
      navigate('/signup')
      }
    } catch (error) {
      console.log(error + "Could not Sign In");
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <h2>As a Customer</h2>
      <button
        className="space-between flex w-54 items-center rounded-md border-2 font-medium space-x-1 border-black bg-white text-black p-2"
        onClick={customerSignUp}
      >
        <FcGoogle size={42} />
        <h2>Sign In with Google</h2>
      </button>
      <h2>As a Professional</h2>
      <button
        className="space-between flex w-54 items-center rounded-md border-2 font-medium space-x-1 border-black bg-white text-black p-2"
        onClick={goServicePage}
      >
        <FcGoogle size={42} />
        <h2>Sign In with Google</h2>
      </button>
      <button
        className="space-between flex w-54 items-center rounded-md border-2 font-medium space-x-1 border-black bg-white text-black p-2"
        onClick={signUp}
      >
        <FcGoogle size={42} />
        <h2>Sign Up with Google</h2>
      </button>
    </div>
  );
}

export default OAuth;
