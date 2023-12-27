import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div className="fixed md:w-[calc(100%-85px)] container mx-auto shadow-md shadow-[#111132] z-[999]">
            <div className="py-5 md:py-0 md:h-20 bg-[#0c0c1d] flex md:flex-row-reverse justify-between items-center px-5">
                <div className="order-1 md:order-2 mr-auto">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="ml-8 md:ml-0 text-3xl font-semibold cursor-pointer"
                    >
                        DevNirob
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="md:hidden cursor-pointer fixed z-[50]" onClick={handleToggle}>
                    {
                        open ? <FaTimes className="h-6 w-6  text-neutral-700 absolute z-10" /> : <FaBars className="h-6 w-6 z-10" />
                    }
                </motion.div>
                <motion.ul
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}

                    className={`${open ? "block" : "hidden"} text-neutral-900 text-center md:text-left pt-16 md:pt-0 md:text-[#d3d3d3] h-screen md:h-auto w-1/2 md:w-auto z-1 bg-[#e7e6e6] md:bg-transparent space-y-1 md:space-y-0 absolute md:static top-0 left-0 md:flex gap-4 font-medium text-lg ml-0`}>

                    <li className="my-2 block md:hidden">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-semibold cursor-pointer"
                        >
                            DevNirob
                        </motion.h2>
                    </li>
                    <li className="p-[7px] hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="#home">Home</a>
                    </li>
                    
                    <li className="p-[7px] hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="#skills">Skills</a>
                    </li>
                   
                    <li className="p-[7px] hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="#services">Services</a>
                    </li>
                    <li className="p-[7px] hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="p-[7px] hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="transition-all duration-300 px-4 py-2 bg-gradient-to-br from-indigo-800 to-indigo-900 hover:bg-gradient-to-br hover:from-indigo-900 hover:to-indigo-800 text-gray-200 font-medium rounded-sm hidden md:flex items-center justify-center gap-1">
                        <a href="https://github.com/dev-nirob1" target="_blank" rel="noreferrer">Github</a>  <FaGithub />
                    </li>
                </motion.ul>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 py-[6px] transition-all duration-300 bg-gradient-to-br from-indigo-800 to-indigo-900 hover:bg-gradient-to-br hover:from-indigo-900 hover:to-indigo-800 text-gray-200 order-2 font-medium rounded-sm flex items-center justify-center gap-1 md:hidden">
                    <a href="https://github.com/dev-nirob1" target="_blank" rel="noreferrer">Github</a>
                    <FaGithub />
                </motion.div>

            </div>
        </div>
    );
};

export default Navbar;
