import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <NavLink
            className={({ isActive }) => isActive ? 'border-b-2 border-orange-500 pb-1 font-semibold' : ''}
            to='/'
        ><li>Home</li>
        </NavLink>
        <NavLink
            className={({ isActive }) => isActive ? 'border-b-2 border-orange-500 pb-1 font-semibold' : ''}
            to='/a'
        ><li>About</li>
        </NavLink>
        <NavLink
            className={({ isActive }) => isActive ? 'border-b-2 border-orange-500 pb-1 font-semibold' : ''}
            to='/s'
        ><li>Skills</li>
        </NavLink>
        <NavLink
            className={({ isActive }) => isActive ? 'border-b-2 border-orange-500 pb-1 font-semibold' : ''}
            to='/p'
        ><li>Projects</li>
        </NavLink>
        <NavLink
            className={({ isActive }) => isActive ? 'border-b-2 border-orange-500 pb-1 font-semibold' : ''}
            to='/r'
        ><li>Resume</li>
        </NavLink>
        <NavLink
            className={({ isActive }) => isActive ? 'border-b-2 border-orange-500 pb-1 font-semibold' : ''}
            to='/c'
        ><li>Contact</li>
        </NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 md:px-28 shadow-md fixed bg-opacity-0 text-orange-600 pt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[16px] font-mont uppercase font-medium space-y-3 text-black">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'>
                        <div className=" flex items-center gap-7 text-xl font-mont font-semibold">
                            <img
                                className="w-12 h-12 rounded-full "
                                alt="Tailwind CSS Navbar component"
                                src="/Rasel.jpg" />
                                <h4>Rasel Mahmud</h4>
                        </div>
                    </Link>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-12 text-[16px] font-mont uppercase font-semibold">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;