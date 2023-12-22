import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className="h-24 flex md:flex-row-reverse justify-between items-center mx-5">
                <div className="order-1 md:order-2 mr-auto">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-semibold cursor-pointer"
                    >
                        DevNirob
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="md:hidden cursor-pointer" onClick={handleToggle}>
                    {
                        open ? <FaTimes className="h-6 w-6 text-neutral-700 absolute top-8 z-10" /> : <FaBars className="h-6 w-6 z-10" />
                    }
                </motion.div>
                <motion.ul
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}

                    className={`${open ? "block" : "hidden"} text-neutral-900 text-center md:text-left pt-16 md:pt-0 md:text-[#d3d3d3] h-full md:h-auto w-1/2 md:w-auto z-1 bg-[#e7e6e6] md:bg-transparent space-y-1 md:space-y-0 absolute md:static top-0 left-0 md:flex gap-4 font-medium text-lg`}>
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
                        <a href="#services">Services</a>
                    </li>
                    <li className="p-[7px] hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="p-[7px] hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="px-4 py-2 border-2 border-[#e7e6e6] hover:bg-gray-200 hover:text-black font-medium rounded-sm hidden md:block">
                        <a href="https://github.com/dev-nirob1" target="_blank" rel="noreferrer">Github</a>
                    </li>
                </motion.ul>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 py-[6px] border-2 order-2 font-medium rounded-sm border-[#e7e6e6] block md:hidden">
                    <a href="https://github.com/dev-nirob1" target="_blank" rel="noreferrer">Github</a>
                </motion.div>

            </div>
        </div>
    );
};

export default Navbar;
