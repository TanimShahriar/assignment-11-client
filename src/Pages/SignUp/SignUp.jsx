
import { useContext } from "react";
import { AiFillFacebook, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {




  const { createUser } = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)


    //create User
    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })


      .catch(error => {
        console.log(error.message);

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
          <p className="text-center font-medium my-2">Or Sign Up With</p>
          <div className="flex justify-center gap-3 ">
            <AiFillFacebook className="cursor-pointer text-3xl text-blue-700 rounded-full"></AiFillFacebook>
            <AiFillGoogleCircle className="cursor-pointer text-3xl text-blue-700 rounded-full"></AiFillGoogleCircle>
            <AiFillLinkedin className="cursor-pointer text-3xl text-blue-700 rounded-full"></AiFillLinkedin>
          </div>
          <Link to="/signIn"> <p className="text-center mt-2">Already have an account? <span className="font-semibold text-[#4287f5]">Sign In</span></p></Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;