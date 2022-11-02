import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600 '>Services</p>
                <h2 className='text-5xl font-semibold my-5 '>Our Services Area</h2>
                <p className='w-1/2 mx-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in, expedita labore voluptatibus dicta aliquam neque earum soluta, culpa quibusdam minima dignissimos, iure vitae hic.
                </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;