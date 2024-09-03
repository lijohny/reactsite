import React from 'react'


export default function Header() {
  return (
    <>
      <div className='backdrop-blur-sm bg-white/30 w-fit rounded-[25px]'>
        <header className='flex justify-center px-[25px] py-3'>
              <ul className='cursor-pointer flex justify-center items-center gap-7 text-black '>
                <li>About</li>
                <li>Projects</li>
                <li>Download CV</li>
                <li><a href="https://drive.google.com/file/d/1TPQvcfyLktOlorpH81b9HZk008SkgHCL/view?usp=drive_link" target="_blank" rel="noopener noreferrer">See CV</a></li>
                <li><a href="https://github.com/lijohny" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
        </header>
      </div>  
    </>
  )
}


