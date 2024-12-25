import { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="shadow-md bg-[#0c0c1d] shadow-[#111132] container mx-auto z-[999] px-5 md:px-10 relative">
                <div className="flex items-center justify-between">
                    <div className="py-5 flex items-center justify-center">
                        <img src="/logo.png" alt="logo" />
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="md:hidden">
                            <a href="https://github.com/dev-nirob1"
                                className="transition-all duration-300 px-4 py-2 bg-gradient-to-br from-indigo-800 to-indigo-900 hover:bg-gradient-to-br hover:from-indigo-900 hover:to-indigo-800 text-gray-200 font-medium rounded-sm flex gap-[6px] items-center justify-center"
                                target="_blank" rel="noreferrer">Github <FaGithub size={20} /></a>
                        </div>
                        {isOpen && (
                            <div
                                onClick={handleToggle}
                                className="fixed inset-0 bg-black bg-opacity-30 z-[90]"
                            ></div>
                        )}
                        <div onClick={handleToggle} className="md:hidden">
                            {
                                isOpen ? <FaTimes className="h-8 w-8 z-10" /> : <FaBars className="h-8 w-8 z-10" />
                            }
                        </div>
                    </div>
                    {isOpen ?

                        <ul className={`${isOpen ? 'bg-[#0c0c1d] shadow-lg shadow-[#111132] py-3 flex-col items-center justify-center absolute top-16 right-5 w-1/3 z-[99] font-medium' : 'hidden'}`}>
                            <li className="w-full mb-3 border-b"><a href="#home" className="px-3 py-2">Home</a></li>
                            <li className="w-full mb-3 border-b"><a href="#skills" className="px-3 py-2">Skills</a></li>
                            <li className="w-full mb-3 border-b"><a href="#services" className="px-3 py-2">Services</a></li>
                            <li className="w-full mb-3 border-b"><a href="#portfolio" className="px-3 py-2">Portfolio</a></li>
                            <li className="w-full"><a href="#contact" className="px-3 py-2">Contact</a>
                            </li>
                        </ul>
                        :
                        <ul className='hidden md:flex items-center justify-center font-medium text-lg'>
                            <li><a href="#home" className="px-3 py-2 hover:underline">Home</a></li>
                            <li><a href="#skills" className="px-3 py-2 hover:underline">Skills</a></li>
                            <li><a href="#services" className="px-3 py-2 hover:underline">Services</a></li>
                            <li><a href="#portfolio" className="px-3 py-2 hover:underline">Portfolio</a></li>
                            <li><a href="#contact" className="px-3 py-2 hover:underline">Contact</a>
                            </li>
                            <li className="hidden md:block ml-3">
                                <a href="https://github.com/dev-nirob1"
                                    className="transition-all duration-300 px-4 py-2 bg-gradient-to-br from-indigo-800 to-indigo-900 hover:bg-gradient-to-br hover:from-indigo-900 hover:to-indigo-800 text-gray-200 font-medium rounded-sm flex gap-[6px] items-center justify-center"
                                    target="_blank" rel="noreferrer">Github <FaGithub size={20} /></a>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;
