import { Link } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </>

    return (
        <div>
            <div className="navbar md:px-20  lg:fixed bg-[#222222] text-orange-600 pt-2">
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
                        <div className=" hidden md:flex items-center gap-7 text-xl font-mont font-semibold">
                            <img
                                className="w-12 h-12 rounded-full "
                                alt="Tailwind CSS Navbar component"
                                src="/Rasel.jpg" />
                            <h4>Rasel Mahmud</h4>
                        </div>
                    </Link>
                </div>

                <div className="navbar-end ">
                    <ul className="menu menu-horizontal hidden lg:flex space-x-4 text-[16px] font-mont uppercase font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'>
                    <div className=" lg:hidden flex items-center gap-7 text-xl font-mont font-semibold">
                        <img
                            className="w-12 h-12 rounded-full "
                            alt="Tailwind CSS Navbar component"
                            src="/Rasel.jpg" />
                        
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;