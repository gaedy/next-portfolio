'use client'
import {motion} from "motion/react";
export default function BlogLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="min-h-screen w-full flex justify-center font-medium px-8">
            <motion.div
                className="w-2xl flex flex-col min-h-screen"
                initial={{opacity: 1, x: -50}}
                animate={{opacity: 1, x: 1}}
                exit={{opacity: 0}}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 1,
                    opacity: {duration: 0.4, ease: "easeIn"},
                }}
            >
                {children}
            </motion.div>
        </div>


    );
}