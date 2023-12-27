import { useState } from 'react';
import SectionTitle from '../shared/SectionTitle'
import { useEffect } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [Services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="bg-gradient-to-b from-[#111132] to-[#0c0c1d]  px-4 md:px-8 lg:px-16 py-16">
            <div className="container mx-auto">
                <SectionTitle
                    heading='My Services'
                    subHeading='I prioritize client satisfaction as my top responsibility, aiming to exceed expectations and deliver exceptional results in every project.'
                    />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service Card 1 */}
                    {
                        Services.map((service, index) => <SingleService
                            key={index}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
