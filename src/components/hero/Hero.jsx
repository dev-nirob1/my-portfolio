import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -50,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}
const imgVariants = {
    initial: {
        y: -50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Hero = () => {
    return (
        <div className="h-[calc(100vh-96px)] px-16 bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
            <div className="grid grid-cols-2 items-center justify-center mt-5">
                <div className="flex items-center justify-center">

                    <motion.div className="text-container" variants={textVariants} initial="initial" animate="animate">

                        <motion.h3 variants={textVariants} className="text-2xl">
                            Hi, I&apos;m Al Hasan Nirob
                        </motion.h3>

                        <motion.h1 variants={textVariants} className="text-5xl my-8">
                            A Passionate Front-End Web Developer Specializing in React.js
                        </motion.h1>

                        <motion.button variants={textVariants} className="px-4 py-3 bg-transparent border-2 rounded-md font-medium mr-4">View My Projects</motion.button>

                        <motion.button variants={textVariants} className="px-4 py-3 bg-white text-neutral-800 hover:text-white hover:bg-transparent border-2 rounded-md font-medium mr-4">Get in Touch</motion.button>

                    </motion.div>
                </div>
                <motion.div variants={imgVariants} initial="initial" animate="animate" className="h-full w-full">
                    <motion.img variants={imgVariants} className="w-[450px] h-[450px] mx-auto rounded-full" src="/portfolioImage.png" alt="profile" />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;