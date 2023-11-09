import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { AiFillGoogleCircle } from "react-icons/ai";


const SignIn = () => {
  const { user } = useContext(AuthContext);


  const [signInError, setSignInError] = useState('');
  const [success, setSuccess] = useState('');
  const [displayUser, setDisplayUser] = useState('');

  console.log(displayUser);

  const { signIn } = useContext(AuthContext);
  const { googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  console.log("Location in the login page", location);
  const navigate = useNavigate();



  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    setSignInError('');
    setSuccess('');

    signIn(email, password)
      .then(result => {
        console.log(result.user);
        // setDisplayUser(notify());
        toast.success("Login Successful")

        navigate(location?.state ? location.state : '/');

        if (result.user.emailVerified) {
          setSuccess("User logged in successfully");
        }

      })


      .catch(error => {
        console.error(error.message);
        toast.error("Email/Password doesn't match")
      })

  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/');
        setDisplayUser(result.user)
        toast.success("Login Successful")
      })
      .catch(error => {
        console.error(error.message)
      })



  }

  // const notify = () => {
  //   toast("Email/Password doesn't match")
  // }




  return (

    <div className=" rounded-lg p-10">
      <div className="flex  ">
        <div className="text-center lg:w-1/2">
          <img className="h-[400px] mt-10" src="https://i.ibb.co/YXCtnwk/Signin-Banner.jpg" alt="" />
        </div>
        <div className="w-1/2 p-4  border rounded-lg bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="Your email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Your password" name="password" className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
              <button className="bg-[#4287f5]  cursor-pointer px-1 text-sm lg:text-base lg:px-4 rounded-md py-1 lg:py-2 btn-outline duration-300 border-white text-white ">Sign In</button>
            </div>

            <p className="text-center">-------  or  -------</p>
            <div className="relative">
              <AiFillGoogleCircle className="absolute top-[6px] left-1/3 cursor-pointer  text-3xl text-white rounded-full"></AiFillGoogleCircle>
              <input onClick={handleGoogleSignIn} className="bg-[#4287f5]  cursor-pointer px-1 text-sm lg:text-base lg:px-4 rounded-md py-1 lg:py-2 btn-outline duration-300 border-white text-white w-full " type="submit" value="Sign in with Google" />
            </div>

          </form>

          {
            success &&
            <div>
              <h2 className="text-lg text-center font-semibold text-green-700">{success}</h2>
            </div>
          }

          {
            signInError &&
            <div>
              <h2 className="text-lg text-center font-semibold text-red-700">{signInError}</h2>
            </div>
          }


          <Link to="/signUp"> <p className="text-center mt-2">Do not have account? <span className="font-semibold text-[#4287f5]">Sign Up</span></p></Link>
        </div>
      </div>

    </div>

  );
};

export default SignIn;