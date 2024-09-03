import React from 'react';
import developer from '../../assets/develpping.PNG'

function SectionA() {
  return (

    <div className="bg-white dark:bg-black h-screen flex items-center justify-center">
        <div className='container mx-auto px-5 2xl:px-40 '>
            <div className='flex items-center justify-between w-full'>
                <div className='w-full'>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-yellow-50  mb-4">Hello, I'm Lijo Js</h1>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-6">A Passionate Front-End Developer</h2>
                    <p className="text-lg text-gray-600 dark:text-white mb-6">
                        I am a dedicated front-end developer with a strong passion for creating
                        seamless and engaging user experiences. With a keen eye for design and a love
                        for coding, I strive to bring ideas to life with clean and efficient code.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-white">
                        Over the past 3 years, I've gained valuable experience in developing and
                        optimizing web applications using modern technologies such as React, Tailwind
                        CSS, and more. I am always eager to learn and grow, staying updated with the
                        latest trends in web development.
                    </p>
                </div>
                <div className='w-full flex justify-center'>
                    <img src={developer} className='object-fill' alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default SectionA;
