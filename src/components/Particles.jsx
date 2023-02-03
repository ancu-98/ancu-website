import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from "react";
import './styles/particles.css'

const ParticleComp = (props) => {

    const color_darkPurpple = '#2A2438';
    const color_green = '#9CFF2E';
    const color_black = '#000000';

    const options = useMemo(() => {
        return {
            background: {
                color: color_darkPurpple, // this sets a background color for the canvas
            },
            fpsLimit: 80,
            fullScreen: {
                enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true, // enables the click event
                        mode: "push", // adds the particles on click
                    },
                    onHover: {
                        enable: true, // enables the hover event
                        mode: "repulse", // make the particles run away from the cursor
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4, // number of particles to add on click
                    },
                    repulse: {
                        distance: 100, // distance of the particles from the cursor
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: color_black,
                },
                links: {
                    color: color_green,
                    distance: 150, // maximum distance for linking the particles
                    enable: true, // enabling this will make particles linked together
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable:true,
                },
                move: {
                    direction: "none",
                    enable: true,  // enabling this will make particles move in the canvas
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: { min: 1, max: 2 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
                    straigth: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: { min: 1, max: 5 }, // let's randomize the particles size a bit
                },
            },
            detectRetina: true,
        }
    }, []);

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    return (
        <div className="container_particles">
            <Particles id={props.id} init={particlesInit} options={options} />
        </div>
    )
}

export default ParticleComp;
