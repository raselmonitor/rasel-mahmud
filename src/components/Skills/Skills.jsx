import { FaExternalLinkAlt } from "react-icons/fa";

const Skills = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto mb-28 flex flex-col md:flex-row justify-between gap-16">
            <div className="shadow-md rounded-lg p-6">
                <div className="flex justify-center items-center flex-col">
                    <h3 className="text-3xl font-bold italic font-mont text-[#263170]  ">My Skills</h3>
                    <div className="md:w-24 w-16 h-1 bg-[#263170] md:mt-2 mt-1"></div>
                </div>
                <div className="mt-10 space-y-5">
                    <div className="flex gap-4 justify-center items-center">
                        <div className="w-20 shadow-xl p-4 rounded-lg rotate-45">
                            <img className="-rotate-45" src="/logo/html.png" alt="" />
                        </div>
                        <div className="w-20 shadow-xl p-4 rounded-lg rotate-45">
                            <img className="-rotate-45" src="/logo/css.png" alt="" />
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <div className="w-20 shadow-xl p-4 rounded-lg rotate-45">
                            <img className="-rotate-45" src="/logo/java.png" alt="" />
                        </div>
                        <div className="w-20 shadow-xl p-4 rounded-lg rotate-45">
                            <img className="-rotate-45" src="/logo/tailwind.png" alt="" />
                        </div>
                        <div className="w-20 shadow-xl p-4 rounded-lg rotate-45">
                            <img className="-rotate-45" src="/logo/react.png" alt="" />
                        </div>
                        <div className="w-20 shadow-xl p-4 rounded-lg rotate-45">
                            <img className="-rotate-45" src="/logo/node.png" alt="" />
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <div className="w-20 shadow-xl p-4 rounded-lg rotate-45">
                            <img className="-rotate-45" src="/logo/express.png" alt="" />
                        </div>
                        <div className="w-20 shadow-xl p-4 rounded-lg rotate-45">
                            <img className="-rotate-45" src="/logo/mongo.png" alt="" />
                        </div>
                        <div className="w-20 shadow-xl p-4 rounded-lg rotate-45">
                            <img className="-rotate-45" src="/logo/fire.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-md rounded-lg p-6">
                <div>
                    <h3 className="text-3xl font-bold italic font-mont text-[#263170]  ">My Experience In Other Fields</h3>
                    <div className="md:w-24 w-16 h-1 bg-[#263170] md:mt-2 mt-1"></div>
                </div>
                <div className="font-mont mt-10 space-y-3">
                    <h2 className="text-xl font-semibold text-[#263170]">Hardware Engineer</h2>
                    <a href="http://www.triunebd.com/" target="_blank">
                        <h2 className="text-[16px] font-bold flex gap-2 hover:text-[#03A9F4] items-center text-[#263170]">Triune Group <FaExternalLinkAlt className="text-sm" /></h2>
                    </a>
                    <p className="font-semibold">September 2022 - Present</p>
                    <p className="text-justify">
                        Expert introubleshooting of desktop pc & laptop, install various types of operating systems
                        like as Windows XP / Vista / 7 / 10& 11& all other drivers / software’s related with desktop
                        pc & laptop. I am able to find solutions of drivers &software through internet. I am also
                        expert in printer repair and assembling or disassembling & change parts like as motherboard,
                        wlan, ram, hdd, keyboard, dvd-rw of various brand of laptops such as Hp / Dell / Compaq /
                        Acer / Lenovo / Toshiba / Fujitsu.Ihave basic knowledge in MS Office programs And Adobe
                        Photoshop,Illustrator,Scanning, Printing Etc.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;