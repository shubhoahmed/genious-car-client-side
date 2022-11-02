import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero  bg-base-200 rounded-xl mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='img' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt='img' className=" w-3/5 top-1/3 right-20 absolute border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-orange-600 font-bold text-2xl pb-5'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br /> and of experience <br /> in this field.</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-error">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;