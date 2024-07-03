
const About = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-24 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
                <div className="border-b-8 border-r-8 border-[#263170] rounded-3xl ">
                    <img
                        className="rounded-2xl z-30"
                        src="/profile.jpg" alt="" />
                </div>
            </div>
            <div className="col-span-2">
                <div>
                    <h3 className="text-3xl font-bold italic font-mont text-[#263170]  ">About Me</h3>
                    <div className="md:w-24 w-16 h-1 bg-[#263170] md:mt-2 mt-1"></div>
                </div>
                <div className="font-mont text-[17px] text-black text-justify mt-10">
                    <p>I am a Jr. Frontend Web Developer with professional experience in <strong>HTML5, CSS3, JavaScript, Tailwind CSS</strong>, and <strong>React</strong>. I also have backend skills using <strong>Node.js, Express.js, MongoDB</strong>, and <strong>Firebase</strong>. I am currently learning <strong>Next.js</strong> to enhance my capabilities in building modern web applications. I am passionate about creating responsive, user-friendly web applications and constantly improving my skills and knowledge in web development.</p>
                </div>
            </div>
        </div>
    );
};

export default About;