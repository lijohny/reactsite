import React from 'react';
import mainperson from '@assets/mainperson.png';  // Using alias for assets
import videoFile from '@assets/homebannernew.mp4';
import Header from '@components/Header';          // Using alias for components
import Arrow from '@components/Arrow/Arrow';
import SectionA from '@components/Section/SectionA';

export default function Home() {
  return (
    <>    
      <div className="mainBG">
        {/* Overlay and Video Background */}
        <div className='absolute top-0 left-0 h-full w-full bg-[#000000cc]'>
          <video className="background-video" autoPlay loop muted playsInline>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-5 2xl:px-40 h-screen relative">
          <div className="absolute bottom-0 flex items-center justify-center w-auto">
            <div className='mb-[8%] text-center'>
              <div className='mb-[13%]'>
                {/* Main Heading */}
                <h1 className="text-9xl text-white leading-none jersey">
                  Li<span className='text-gray-500 maintextstyling'>JO</span> <span className='text-gray-500 maintextstyling'>JO</span><span className="text-[#A4C639]">HNEY</span><span className="text-gray-500 maintextstyling">.s</span>
                </h1>
                {/* Subtitle and Image */}
                <div className='flex items-center gap-[10px] justify-start'>
                  <h2 className='text-[#b7b7ba] font-bold dancing'>Day by day I Make My Way</h2>
                  <img src={mainperson} alt="Main Person" className="w-full max-w-[70px] object-contain"/>
                </div> 
              </div>
              {/* Header Component */}
              <Header />
            </div>
          </div>
          {/* Arrow Component */}
          <Arrow />
        </div>
      </div>

      {/* Section A Component */}
      <div>
        <SectionA />
      </div>
    </>
  );
}
