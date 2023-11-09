import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { MdOutlineLogout } from "react-icons/md";





const Navbar = () => {
  const { user, setUser, signOutt } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutt()
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const navLinks = <>

    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/'>Home</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/assignments'>Assignments</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/createAssignment'>Create Assignment</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/myAssignments'>My Assignments</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/submittedAssignment'>Submitted Assignments</NavLink>
    {!user && <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]" to='/signUp'>Sign Up</NavLink>}



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
        <NavLink to="/"><img className="h-10 lg:h-24 w-12 lg:w-28" src="https://i.ibb.co/kSyxD6z/final-study-group.jpg" alt="" /></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-3">


        <input className="bg-slate-100 p-2 rounded-md w-20 lg:w-48" placeholder="Search" type="search" name="" id="" />

        {
          user && <div className="dropdown  dropdown-end items-center gap-2 px-1  cursor-pointer rounded-md">
            <button className="" tabIndex={0}><img className="h-11 w-11 rounded-full  " src={user.photoURL} alt="" /></button>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-100 rounded-box w-52 ">
              <button className="">{user.displayName}</button>
              <div className="mt-1 flex items-center justify-center gap-1 border-t border-white">
                <button onClick={handleSignOut} >  Sign out</button>
                <MdOutlineLogout></MdOutlineLogout>
              </div>



            </ul>
          </div>
          // <h2 className="text-slate-100 text-center text-sm lg:text-lg font-medium lg:font-medium">{user.displayName}</h2>

        }
        {
          user ?
            <div className="flex items-center gap-1">


              {/* <button onClick={handleSignOut} className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]">Sign out</button> */}

            </div>
            :
            <Link to='/signin'>
              <button className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md focus:text-white  lg:border btn-outline mr-2 duration-300 border-[#4287f5] text-[#4287f5]">Sign in</button>
            </Link>
        }





      </div>
    </div>
  );
};

export default Navbar;
