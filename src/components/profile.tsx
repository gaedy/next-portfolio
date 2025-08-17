'use client'

import { motion } from "motion/react";

import {Behance, Github, Linkedin, Xicon} from "@/components/jsxIcons";
import {useEffect, useState} from "react";

function Profile() {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPosition((prev) => (prev + 1) % 100);
        }, 50);

        return () => clearInterval(intervalId);
    }, []);

    const mySocialIcons = [
        { icon: <Xicon />, url: "https://x.com/" },
        // { icon: <DribbbleLine />, url: "https://dribbble.com/" },
        { icon: <Behance />, url: "https://behance.com/" },
        { icon: <Linkedin />, url: "https://linkedin.com/" },
        { icon: <Github />, url: "https://github.com/gaedy" },
    ];

    const animation = (index: number) => ({
        initial: {
            opacity: 0,
            scale: 0.8,
            y: 5,
            filter: "brightness(0.5)"
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: [
                "brightness(0.5)",
                "brightness(1.4)",
                "brightness(1)"
            ]
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            filter: "brightness(0.3)"
        },
        transition: {
            duration: 0.8 - (index * 0.1),
            type: "spring",
            stiffness: 250,
            damping: 40,
            mass: 0.8,

            filter: {
                duration: 1.4 - (index * 0.15),
                ease: "easeInOut",
                times: [0, 0.6, 1]
            },

            scale: {
                type: "spring",
                stiffness: 280,
                damping: 65
            },
            y: {
                type: "spring",
                stiffness: 550,
                damping: 55
            }
        } as const,


    });

    return (
        <>
            <div className="flex flex-col justify-between gap-2 pt-14">
                <div
                    className="relative h-16 w-16 p-0.5 rounded-full mb-2 overflow-hidden"
                    style={{
                        backgroundImage: `linear-gradient(${position * 3.6}deg, #30E8BF, #FF8235, #FC466B)`,
                        backgroundSize: "200% 200%",
                        animation: "moveGradient 3s ease infinite",
                    }}
                >
                    <style jsx>{`
            @keyframes moveGradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>
                    <div className="h-full w-full bg-fuchsia-950 rounded-full" />
                </div>

                <div className="w-full flex items-center justify-between  flex-wrap">
                    <div className="font-medium text-lg mr-auto flex">Ahmed Gaeedy</div>

                    <div className="flex gap-1 justify-between items-center ">
                        <motion.div className="flex items-center gap-1">
                            {mySocialIcons.map((theIcon, index) => (
                                <motion.a
                                    key={index}
                                    {...animation(index)}
                                    href={theIcon.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div
                                        className="bg-neutral-800 w-7 h-7 rounded-sm cursor-pointer hover:bg-neutral-700 active:bg-neutral-900
                  p-1 flex justify-center items-center transition-colors duration-200"
                                    >
                                        {theIcon.icon}
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <hr className="opacity-20 "></hr>

                <div className="text-base text-[14px] text-neutral-400 text-balance">
                    Front-End Developer / UI Designer
                </div>
            </div>
        </>
    );
}

export default Profile;