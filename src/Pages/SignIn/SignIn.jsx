import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";


const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  console.log("Location in the login page", location);
  const navigate = useNavigate();


  const handleSignIn = event => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        // setDisplayUser(notify());

        navigate(location?.state ? location.state : '/');

        if (result.user.emailVerified) {
          // setSuccess("User logged in successfully");
        }

        // else {
        //   alert("Please verify your email address");
        // }
      })
      .catch(error => console.log(error));
  }
  return (

    <div className=" rounded-lg p-10">
      <div className="flex  ">
        <div className="text-center w-1/2">
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

          </form>
          <Link to="/signUp"> <p className="text-center mt-2">Do not have account? <span className="font-semibold text-[#4287f5]">Sign Up</span></p></Link>
        </div>
      </div>
    </div>

  );
};

export default SignIn;