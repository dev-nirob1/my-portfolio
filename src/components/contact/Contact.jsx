import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import phone from '/phone.png';
import envelop from '/envelop.png';
import location from '/location.png';

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.target

        emailjs.sendForm(`${import.meta.env.VITE_SERVICEID}`, `${import.meta.env.VITE_TEMPLATEID}`, formRef.current, `${import.meta.env.VITE_PUBLICKEY}`)
            .then((result) => {
                console.log(result.text);
                setSuccess('Thanks for messaging! I will reply as soon as possible.')
                form.reset()
            }, (error) => {
                console.log(error.text);
                setError('Something went wrong. Please try again later.')
                setError(true)
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#111132] to-[#0c0c1d] text-white px-4 md:px-8 lg:px-16 py-5">
            <h2 className="text-3xl text-gray-300 md:text-4xl font-bold md:font-extrabold py-5 md:py-10 flex items-center justify-center gap-1">
                <hr className='w-[50px] border-t-2' />
                Contact Me
            </h2>
            <div className="container mx-auto p-2 grid justify-center grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left Container */}
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold mb-4 text-gray-300">Let&lsquo;s Talk</h1>
                    <p className="text-lg mb-4 text-gray-400">
                        Have a question or want to discuss a project? Feel free to contact
                        me using the information below:
                    </p>
                    <div className="text-gray-400 ml-6 space-y-4">
                        <div className='flex gap-3 items-center'>
                            <img style={{ width: '30px' }} src={envelop} alt="email link" />
                            <div>
                                <p>Email</p>
                                <p className='text-sm hover:text-gray-300'><a href="mailto:dev.nirob1@gmail.com">dev.nirob1@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <img style={{ width: '30px' }} src={phone} alt="phone Number" />

                            <div>
                                <p>Phone</p>
                                <a className='text-sm hover:text-gray-300' href="tel:+8801703750037">+8801703750037</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img style={{ width: '30px' }} src={location} alt="location" />
                            <div>
                                <p>Location</p>
                                <p className='text-sm hover:text-gray-300'>Bogura, Rajshahi, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Container */}
                <div className="max-w-md bg-[#111132] shadow-md shadow-indigo-800 rounded p-5">
                    <form onSubmit={sendEmail} ref={formRef}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-300 font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2 w-full border rounded-sm border-gray-600 bg-transparent text-gray-200 focus:outline-none focus:border-indigo-800"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-sm border-gray-600 bg-transparent text-gray-200 focus:outline-none focus:border-indigo-800"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="message" className="block text-gray-300 font-medium">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 p-2 w-full border rounded-sm border-gray-600 bg-transparent text-gray-200 focus:outline-none focus:border-indigo-800"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <p className="text-red-500 mb-4">{error}</p>

                        <p className="text-green-500 mb-4">{success}</p>


                        <div className='flex items-center justify-end'>
                            <button
                                type="submit"
                                className="bg-[#0c0c1d] font-medium border border-gray-800 hover:bg-gradient-to-r from-bg-indigo-600 to-bg-indigo-800 rounded text-gray-300 hover:border-indigo-800 shadow hover:shadow-indigo-800 py-[10px] px-5"
                            >
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
