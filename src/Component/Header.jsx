import React from 'react'
function Header() {
  return (
    <>
      <div className='container mx-auto px-5 2xl:px-40 py-5 absolute top-0 w-full text-white z-50'>
        <header className='flex justify-between'>
            <div className='hover:scale-125 transition duration-150 ease-in'>
                <h1 className='cursor-pointer nerko'>LiJO <span className='text-[#A4C639]'>JS</span></h1>
            </div>
            <div>
              <ul className='cursor-pointer flex items-center gap-7'>
                <li>About</li>
                <li>Projects</li>
                <li>Download CV</li>
                <li>See CV</li>
                <li>Github</li>
              </ul>
            </div>
        </header>
      </div>  
    </>
  )
}

export default Header
