
import { useContext, useState } from "react";
import { AiFillFacebook, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [signUpError, setSignUpError] = useState('');
  const [success, setSuccess] = useState('');

  const { createUser, signOutt } = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, password)


    setSignUpError('');
    setSuccess('');

    if (password.length < 6) {
      setSignUpError("Password should be at least six character");
      return;
    }

    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      setSignUpError("At least six characters long,  Contains at least one uppercase letter, Allows special characters")
      return;
    }

    const notify = () => {
      toast("User registration successful")
    }


    //create User
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess(notify());

        signOutt(email, password)
          .then()
          .catch()


        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
      })


      .catch(error => {
        console.log(error.message);
        setSignUpError(error.message);
      })

  }



  return (
    <div className=" rounded-lg p-10">
      <div className="flex ">
        <div className="text-center w-1/2">
          <img className="h-[400px] mt-16" src="https://i.ibb.co/YXCtnwk/Signin-Banner.jpg" alt="" />
        </div>
        <div className="w-1/2 p-4  border rounded-lg bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
            </div>
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
              <button className="bg-[#4287f5]  cursor-pointer px-1 text-sm lg:text-base lg:px-4 rounded-md py-1 lg:py-2 btn-outline duration-300 border-white text-white ">Sign Up</button>
            </div>

          </form>

          {
            success &&
            <div>
              <h2 className="text-black mt-2 font-semibold">{success}</h2>
            </div>
          }

          {
            signUpError &&
            <div>
              <h2 className="text-red-700 font-semibold">{signUpError}</h2>
            </div>

          }


          <Link to="/signIn"> <p className="text-center mt-2">Already have an account? <span className="font-semibold text-[#4287f5]">Sign In</span></p></Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;