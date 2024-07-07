import { IoMdDownload } from "react-icons/io";
import Resume from '/rasel.pdf';
const About = () => {
    return (
        <div className="w-11/12 lg:max-w-6xl mx-auto my-28 grid grid-cols-1 md:grid-cols-3 gap-10" id="about">
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="20">
                <div className="border-b-8 border-r-8 border-[#263170] rounded-3xl lg:h-full lg:w-full shadow-lg">
                    <img
                        className="rounded-2xl z-30 lg:h-full lg:w-full object-cover object-center"
                        src="/profile.jpg" alt="" />
                </div>
            </div>
            <div
                data-aos="fade-down" data-aos-duration="1000" data-aos-delay="20"
                data-aso className="md:col-span-2 shadow-md p-6 rounded-lg">
                <div>
                    <h3 className="text-3xl font-bold italic font-mont text-[#263170]  ">About Me</h3>
                    <div className="md:w-24 w-16 h-1 bg-[#263170] md:mt-2 mt-1"></div>
                </div>
                <div className="font-mont text-[17px] text-black text-justify mt-4">
                    <p>I am a Jr. Frontend Web Developer with professional experience in <strong>HTML5, CSS3, JavaScript, Tailwind CSS</strong>, and <strong>React</strong>. I also have backend skills using <strong>Node.js, Express.js, MongoDB</strong>, and <strong>Firebase</strong>. I am currently learning <strong>Next.js</strong> to enhance my capabilities in building modern web applications. I am passionate about creating responsive, user-friendly web applications and constantly improving my skills and knowledge in web development.</p>
                </div>
                {/* personal information */}
                <div className="flex flex-col md:flex-row gap-6 justify-between mt-4">
                    <div className="font-mont text-sm text-[#263170] font-medium">
                        <div className="flex gap-2">
                            <h3 className="font-bold w-20">Name</h3>
                            <h3>:</h3>
                            <h3>Rasel Mahmud</h3>
                        </div>
                        <div className="flex gap-2">
                            <h3 className="font-bold w-20">Education</h3>
                            <h3>:</h3>
                            <h3>Diploma in Computer Since</h3>
                        </div>
                        <div className="flex gap-2">
                            <h3 className="font-bold w-20">Email</h3>
                            <h3>:</h3>
                            <h3>raselmahamud9360@gmail.com</h3>
                        </div>
                    </div>
                    <div className="font-mont text-sm text-[#263170] font-medium">

                        <div className="flex gap-2">
                            <h3 className="font-bold w-20">Phone</h3>
                            <h3>:</h3>
                            <h3>+880 1933128032</h3>
                        </div>
                        <div className="flex gap-2">
                            <h3 className="font-bold w-20">Address</h3>
                            <h3>:</h3>
                            <h3>Dhaka, Bangladesh</h3>
                        </div>
                        <div className="flex gap-2">
                            <h3 className="font-bold w-20">Hobby</h3>
                            <h3>:</h3>
                            <h3>Codding, Exploring Technology</h3>
                        </div>
                    </div>
                </div>
                {/* CV section */}
                <div className="mt-4">
                    <a href={Resume} download='Resume'>
                        <button className="btn bg-[#263170] text-white font-mont text-lg font-medium hover:bg-[#03A9F4]">Resume <IoMdDownload /></button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;