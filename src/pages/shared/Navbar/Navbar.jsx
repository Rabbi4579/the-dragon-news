import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from '../../../assets/user.png'
const Navbar = () => {

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>

    </>

    return (
        <div className="mb-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={userDefaultPicture} />
                        </div>
                    </div>
                    <Link>
                        <button className="btn">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;