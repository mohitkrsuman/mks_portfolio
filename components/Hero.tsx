import React from 'react'
import {motion} from 'framer-motion';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from "../components/BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from '../sanity';


type Props = {
  pageInfo : PageInfo;
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words : [
      `Myself, ${pageInfo?.name}`,
      '<A Full stack Developer/>',
      'A Proud INDIAN',
      'Guy-who-loves-to-code.tsx',
      'Cares for cars'
       ],

       loop : true,
       delaySpeed : 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      {pageInfo?.heroImage && (
      <motion.img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover' 
        src={urlFor(pageInfo?.heroImage).url()} 
        alt="" 
      />
      )}
      <div className='z-20'>
        <h2 className='text-sm uppercase text-cyan-600 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#00FFFF'/>
        </h1>

        <div className='pt-5'>
          <a href="#about">
             <button className='heroButton'>About</button>
          </a>

          <a href="#experience">
            <button className='heroButton'>Experience</button>  
          </a>

          <a href="#skills">
             <button className='heroButton'>Skills</button>
          </a>

          <a href="#projects">
             <button className='heroButton'>Projects</button>
          </a>
        </div>
      </div>
    </div>
  )
}