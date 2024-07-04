import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import About from "../About/About";
import Tpyewriter from "../tpyewriter/Tpyewriter";
const Banner = () => {
    const [init, setInit] = useState(false);


    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({

            style: { height: "76vh", position: "absolute", width: "100%", overflow: 'hidden' },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 10,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#03A9F4",
                },
                links: {
                    color: "#ffffff",
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 120,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {

                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    // if (init) {
    //     return (
    //         <Particles
    //             id="tsparticles"
    //             particlesLoaded={particlesLoaded}
    //             options={options}
    //         />

    //     );
    // }



    return (
        <div  className="">
            <div className="">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            </div>
            <div className="h-[76vh] flex flex-col gap-10 justify-center bg-[#222222] items-center">
                <h1 className="uppercase font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient font-mont text-2xl md:text-5xl lg:text-7xl z-10 ">
                    Rasel Mahmud
                </h1>
                <Tpyewriter />
            </div>
        </div>
    );
};

export default Banner;