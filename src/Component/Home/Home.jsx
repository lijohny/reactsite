import React from 'react';
// import mainperson from '../../assets/mainperson.png';
import mainperson from '/src/assets/mainperson.png';

import videoFile from '../../assets/homebannernew.mp4'; 
import Header from '../Header'
import Arrow from '../Arrow/Arrow';
import SectionA from '../Section/SectionA';

export default function Home() {
  return (
    <>    
    <div className="mainBG">
      <div className='absolute top-0 left-0 h-full w-full bg-[#000000cc]'>
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-5 2xl:px-40 h-screen relative">
        <div className="absolute bottom-0 flex items-center justify-center">
          <div className='mb-[8%]'>
            <div className='mb-[13%]'>
                <h1 className="text-9xl text-white leading-none jersey">Li<span className='text-gray-500 maintextstyling text-transparent'>JO</span> <span className='text-gray-500 maintextstyling text-transparent'>JO</span><span className="text-[#A4C639]">HNEY</span><span className="text-gray-500 maintextstyling text-transparent">.s</span></h1>
                <div className='flex items-center gap-[10px]'>
                  <h2 className='text-[#b7b7ba] font-bold dancing'>Day by day I Make My Way</h2>
                  <img src={mainperson} alt="" className="w-full max-w-[70px] object-contain"/>
                </div> 
            </div>
            <Header/>
          </div>
        </div>
        <Arrow/>
      </div>
    </div>

    <div>
      <SectionA/>
    </div>
    </>


  );
}
