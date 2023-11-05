import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Navbar = () => {
  const { user, signOutt } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutt()
      .then(() => {

      })
      .catch(error => console.log(error))
  }

  const navLinks = <>

    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/'>Home</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/about'>Assignments</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/createAssignment'>Create Assignment</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/contact'>My Assignments</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/contact'>Submitted Assignments</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/signUp'>Sign Up</NavLink>



  </>

  return (
    <div className="navbar bg-base-100 mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <NavLink to="/"><img className="h-10 lg:h-24 w-28" src="https://i.ibb.co/kSyxD6z/final-study-group.jpg" alt="" /></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2 lg:gap-4">
        <Link className="text-2xl"><a> <AiOutlineShoppingCart></AiOutlineShoppingCart></a></Link>
        <Link className="text-2xl"><a><AiOutlineSearch></AiOutlineSearch></a></Link>

        {user?.email ?

          <button className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" onClick={handleSignOut}>Sign Out</button>
          :
          <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/signIn'>Sign In</NavLink>
        }

      </div>
    </div>
  );
};

export default Navbar;

//