import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto h-screen bg-gradient-to-b from-[#111132] to-[#0c0c1d] px-4 md:px-8 lg:px-16 py-5 md:py-10'>
            <h2 className="text-3xl text-gray-100 md:text-4xl font-bold md:font-extrabold py-5 md:py-10 flex items-center justify-center gap-1">
                <hr className='w-[50px] border-t-2' />
                About Me
            </h2>
            <div className='grid md:grid-cols-2 items-center justify-center'>
                <div>
                    <figure className='opacity-90 hover:opacity-100 hover:scale-105 transition duration-700'>
                        <img className='rounded-lg' src="/portfolioImage.png" alt="profile" />
                    </figure>
                </div>
                <div className='text-gray-400 text-base'>
                    <p>
                        Hi, I'm Al Hasan Nirob, a passionate front-end web developer currently pursuing BBA Management at Govt. Azizul Haque College. I started my journey into the world of technology and programming by successfully completing my SSC examination in 2018 from Sariakandi Govt High School, followed by my HSC examination in 2021 at Govt. Azizul Haque College.
                    </p>
                    <p className="mt-4">
                        Over the last 1.5 years, I've immersed myself in the exciting realm of web development. While my primary focus is on front-end technologies, I'm also familiar with backend technologies like Node.js and Express.js. I can build full-stack applications using the basics, creating seamless and integrated user experiences.
                    </p>
                    <p className="mt-4">
                        With a passion for crafting beautiful and user-friendly interfaces, I am dedicated to delivering exceptional digital experiences. Join me on this exciting journey as I continue to explore and contribute to the ever-evolving world of web development.
                    </p>
                    <div className='flex gap-4 mt-4'>
                        <a className='hover:-translate-y-2 transition-all duration-500' href="https://www.facebook.com/alhasan.nirob.1/" target="_blank" rel="noreferrer">
                            <img src="/facebook.png" alt="facebook link" />
                        </a>

                        <a className='hover:-translate-y-2 transition-all duration-500' href="https://www.linkedin.com/in/al-hasan-nirob10925/" target="_blank" rel="noreferrer">
                            <img src="/linkedin.png" alt="linkedin link" />
                        </a>

                        <a className='hover:-translate-y-2 transition-all duration-500' href="https://github.com/dev-nirob1" target="_blank" rel="noreferrer">
                            <img src="/github-1.png" alt="github link" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;