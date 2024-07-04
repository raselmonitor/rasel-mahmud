import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaMobileScreenButton } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success('Message send successful')
    }

    return (
        <div className="w-11/12 lg:w-10/12 mx-auto mb-28" id="contact">
            <div 
            data-aos="fade-down" data-aos-duration="1000" data-aos-delay="20"
            className="flex justify-center items-center flex-col">
                <h3 className="text-3xl font-bold italic font-mont text-[#263170]  ">Contact Me</h3>
                <div className="md:w-24 w-16 h-1 bg-[#263170] md:mt-2 mt-1"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 mt-10">
                <div 
                data-aos="fade-right" data-aos-duration="1000" data-aos-delay="20"
                className="lg:col-span-3 p-7 rounded-lg shadow-md border">
                    <h3 className="text-2xl font-mont font-bold text-[#263170]">Send Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 font-mont text-lg">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Your Name</label>
                                <input id="username" type="text"
                                    name="name"
                                    required
                                    placeholder="type your full name"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                                <input id="emailAddress" type="email"
                                    name="email"
                                    required
                                    placeholder="type your email address"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Your Number</label>
                                <input id="number" type="number"
                                    name="number"
                                    required
                                    placeholder="type your phone number"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Contact Subject</label>
                                <input id="passwordConfirmation" type="text"
                                    name="subject"
                                    required
                                    placeholder="type your your subject"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        <div className="text-lg font-mont mt-4">
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Message</label>
                            <textarea name="message" id="" cols={5} rows={5}
                                required
                                placeholder="type your message here ...."
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            ></textarea>
                        </div>
                        <div className="w-full mt-6">
                            <button className="btn bg-[#263170] hover:bg-[#03A9F4] w-full text-white font-mont text-lg">Send <FiSend /></button>
                        </div>
                    </form>

                </div>
                {/* description */}
                <div 
                data-aos="fade-left" data-aos-duration="1000" data-aos-delay="20"
                className="rounded-lg shadow-md border p-7 lg:col-span-2">
                    <div className="font-mont">
                        <h3 className="text-2xl font-mont font-bold text-[#263170]">Get In Touch</h3>
                        <div className="md:text-xl font-semibold space-y-3 mt-10">
                            <h3 className="flex items-center gap-4"><FaMobileScreenButton /> +880 1933128032</h3>
                            <h3 className="flex items-center gap-4"><MdOutlineEmail /> raselmahamud9360@gmail.com</h3>
                            <h3 className="flex items-center gap-4"><MdOutlineLocationOn className="text-2xl" /> Kolabagan, Road-9A, Dhaka, Bangladesh</h3>
                        </div>
                        <div className="mt-32">
                            <h3 className="text-2xl font-mont font-bold text-center text-[#263170]">Social Media Links</h3>
                            <div className="flex justify-center items-center gap-5 text-3xl mt-3 text-[#263170]">
                                <a href="https://github.com/Rasel9360" target="_blank"><FaGithub  className="hover:text-[#03A9F4]"/></a>
                                <a href="https://www.linkedin.com/in/rasel9360/" target="_blank"><FaLinkedin  className="hover:text-[#03A9F4]"/></a>
                                <a href="https://www.facebook.com/Rasel9360/" target="_blank"><FaFacebook  className="hover:text-[#03A9F4]"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;