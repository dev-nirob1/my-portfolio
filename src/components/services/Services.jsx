import SectionTitle from '../shared/SectionTitle'

const Services = () => {
    return (
        <div className="bg-gradient-to-b from-[#111132] to-[#0c0c1d]  px-4 md:px-8 lg:px-16 py-16">
            <div className="container mx-auto">
                <SectionTitle
                    heading='My Services'
                    subHeading='I prioritize client satisfaction as my top responsibility, aiming to exceed expectations and deliver exceptional results in every project.'
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service Card 1 */}
                    <div className="bg-[#111132] p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-indigo-500">
                            {/* Replace with your icon or SVG */}
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Web Design</h3>
                        <p className="text-gray-300">
                            Create visually appealing and user-friendly web interfaces with
                            pixel-perfect precision.
                        </p>
                    </div>

                    {/* Service Card 2 */}
                    <div className="bg-[#111132] p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-indigo-500">
                            {/* Replace with your icon or SVG */}
                            <i className="fas fa-code"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Front-end Development</h3>
                        <p className="text-gray-300">
                            Implement interactive and responsive front-end components using
                            modern web technologies.
                        </p>
                    </div>

                    {/* Service Card 3 */}
                    <div className="bg-[#111132] p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-indigo-500">
                            {/* Replace with your icon or SVG */}
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Mobile Responsiveness</h3>
                        <p className="text-gray-300">
                            Ensure seamless user experience across a variety of devices with
                            mobile-responsive designs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
