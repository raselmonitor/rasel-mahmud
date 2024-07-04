import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Projects = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto mb-28" id="project">
            <div
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="20"
            className="flex justify-center items-center flex-col ">
                <h3 className="text-3xl font-bold italic font-mont text-[#263170]  ">My Projects</h3>
                <div className="md:w-24 w-16 h-1 bg-[#263170] md:mt-2 mt-1"></div>
            </div>
            {/* BSM */}
            <div 
            data-aos="fade-down" data-aos-duration="1000" data-aos-delay="20"
            className=" shadow-md border-b-8 border-r-8 rounded-2xl border-[#263170] mt-10 hover:scale-105 hover:border-[#03A9F4]">
                <div className="p-7 grid grid-cols-1 md:grid-cols-2 gap-5 shadow-xl border rounded-xl ">
                    <a href="https://assignment-twelve-1044b.web.app" target="_blank">
                        <img
                            className=" rounded-lg w-full h-full"
                            src="/p1.png" alt="" />
                    </a>
                    <div className="font-mont space-y-3">
                        <h2 className="text-2xl font-semibold text-[#263170]">Building Management System</h2>
                        <p className="text-justify">BEVERLY RESIDENCE, a comprehensive platform designed to streamline the management of buildings, apartments, and facilities. This system provides an efficient way to manage rentals, maintenance requests, payments, and more.</p>
                        <h3 className="text-lg font-semibold">Key Features</h3>
                        <ul className="list-disc ml-8">
                            <li>User-Friendly Interface</li>
                            <li>Online Payments</li>
                            <li>Agreement Requests</li>
                        </ul>
                        <div className="flex gap-10 items-center">
                            <a href="https://assignment-twelve-1044b.web.app" target="_blank">
                                <h3 className="flex items-center gap-2 px-4 py-2 font-semibold bg-[#263170] text-white rounded-full hover:bg-[#03A9F4]">Visit Project <FaExternalLinkAlt /></h3>
                            </a>
                            <a href="https://github.com/Rasel9360/building-management-system" target="_blank"><h3><FaGithub className="text-4xl" /></h3></a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* blog site */}
                <div 
                data-aos="fade-right" data-aos-duration="1000" data-aos-delay="20"
                className=" shadow-md border-t-8 border-l-8 rounded-2xl border-[#263170] mt-10 hover:scale-105 hover:border-[#03A9F4]">
                    <div className="p-7  shadow-xl border rounded-xl ">
                        <a href="https://assignment-eleven-74640.web.app" target="_blank">
                            <img
                                className=" rounded-lg w-full md:h-[200px]"
                                src="/p2.png" alt="" />
                        </a>
                        <div className="font-mont space-y-3 mt-3">
                            <h2 className="text-2xl font-semibold text-[#263170]">Web Wonders Blog Site</h2>
                            <p className="text-justify">Your blog website, "Web Wonders," showcases various posts related to web development. The layout is clean and user-friendly, making it easy for visitors to navigate through the content.</p>
                            <h3 className="text-lg font-semibold">Key Features</h3>
                            <ul className="list-disc ml-8">
                                <li>Responsive Design</li>
                                <li>Interactive Blog Posts</li>
                                <li>Comment Section</li>
                            </ul>
                            <div className="flex gap-10 items-center">
                                <a href="https://assignment-eleven-74640.web.app" target="_blank">
                                    <h3 className="flex items-center gap-2 px-4 py-2 font-semibold bg-[#263170] text-white rounded-full hover:bg-[#03A9F4]">Visit Project <FaExternalLinkAlt /></h3>
                                </a>
                                <a href="https://github.com/Rasel9360/assignment-11-client-blog-site" target="_blank"><h3><FaGithub className="text-4xl" /></h3></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tourism */}
                <div 
                data-aos="fade-left" data-aos-duration="1000" data-aos-delay="20"
                className=" shadow-md border-b-8 border-r-8 rounded-2xl border-[#263170] mt-10 hover:scale-105 hover:border-[#03A9F4]">
                    <div className="p-7  shadow-xl border rounded-xl ">
                        <a href="https://nr-tourism.web.app" target="_blank">
                            <img
                                className=" rounded-lg w-full md:h-[200px]"
                                src="/p3.png" alt="" />
                        </a>
                        <div className="font-mont space-y-3 mt-3">
                            <h2 className="text-2xl font-semibold text-[#263170]">Building Management System</h2>
                            <p className="text-justify">NR Tourism, is a visually appealing platform designed to highlight various travel  and experiences. The website offers an intuitive layout that makes it easy for users to explore and plan their trips.</p>
                            <h3 className="text-lg font-semibold">Key Features</h3>
                            <ul className="list-disc ml-8">
                                <li>User-Friendly Interface</li>
                                <li>Destination Highlights</li>
                                <li>Tourist Spots Post Facility</li>
                            </ul>
                            <div className="flex gap-10 items-center">
                                <a href="https://nr-tourism.web.app" target="_blank">
                                    <h3 className="flex items-center gap-2 px-4 py-2 font-semibold bg-[#263170] text-white rounded-full hover:bg-[#03A9F4]">Visit Project <FaExternalLinkAlt /></h3>
                                </a>
                                <a href="https://github.com/Rasel9360/assignment-10-client-nr-tourism" target="_blank"><h3><FaGithub className="text-4xl" /></h3></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;