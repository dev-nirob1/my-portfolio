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
        <div className="md:h-[100vh] pt-16 md:pt-[96px] overflow-hidden px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0c0c1d] to-[#111132]">

            <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                <div className="flex text-center md:text-left items-center order-2 md:order-1 justify-center">

                    <motion.div className="my-5" variants={textVariants} initial="initial" animate="animate">

                        <motion.h3 variants={textVariants} className="text-xl md:text-2xl">
                            Hi, I&apos;m Al Hasan Nirob
                        </motion.h3>

                        <motion.h1 variants={textVariants} className="text-2xl md:text-4xl lg:text-5xl my-4 md:my-6 lg:my-8">
                            A Passionate Front-End Web Developer Specializing in React.js
                        </motion.h1>

                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <motion.button variants={textVariants} className="px-2 py-2 md:px-4 md:py-3 bg-transparent border-2 rounded-md font-medium">View My Projects</motion.button>

                            <motion.button variants={textVariants} className="px-2 py-2 md:px-4 md:py-3 bg-white text-neutral-800 hover:text-white hover:bg-transparent border-2 rounded-md font-medium">Get in Touch</motion.button>
                        </div>

                    </motion.div>
                </div>
                <motion.div variants={imgVariants} initial="initial" animate="animate" className="h-full w-full flex items-center order-1">
                    <motion.img variants={imgVariants} className="w-[280px] md:w-[320px] lg:w-[450px] md:h-[320px] lg:h-[450px] mx-auto rounded-full" src="/portfolioImage.png" alt="profile" />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;