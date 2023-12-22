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
            <div className="h-24 px-5 flex flex-row-reverse md:flex-row justify-between items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-semibold"
                    >
                        DevNirob
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="md:hidden" onClick={handleToggle}>
                    {
                        open ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />
                    }
                </motion.div>
                <motion.ul
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}

                    className={`${open ? "block" : "hidden"} text-neutral-900 text-center md:text-left pt-10 md:pt-0 md:text-[#d3d3d3] h-full md:h-auto w-1/2 md:w-auto z-1 bg-[#e7e6e6] md:bg-transparent space-y-1 md:space-y-0 absolute md:static top-16 left-0 sm:left-12 md:flex gap-4 font-medium text-lg`}>

                    <li className="p-2 hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="">Home</a>
                    </li>
                    <li className="p-2 hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="">Services</a>
                    </li>
                    <li className="p-2 hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="">Portfolio</a>
                    </li>
                    <li className="p-2 hover:bg-gray-300 md:hover:bg-inherit">
                        <a href="">Contact</a>
                    </li>
                </motion.ul>

            </div>
        </div>
    );
};

export default Navbar;
