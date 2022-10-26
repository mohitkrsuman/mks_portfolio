import React from 'react'
import {motion} from "framer-motion";

type Props = {}

function BackgroundCircles(props: Props) {
  return (
    <motion.div 
      whileInView={{scale: 0.9}}
      initial={{
      opacity : 0,
      }}
      animate = {{
         scale: [1, 2, 2, 3, 1],
         opacity : [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
         borderRadius : ['20%', "20%", "50%", "80%", "20%"],
      }}
      transition = {{
         duration : 2.5,
      }}
       className='relative flex justify-center items-center mt-15'>
       <div className='absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping'/>
       <div className='border border-[#8c8787] rounded-full h-[200px] w-[200px] mt-52 animate-ping absolute'/>
       <div className='border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping absolute'/>
       <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[450] w-[450] absolute mt-52 animate-pulse'/>
       <div className='border border-[#8c8787] rounded-full h-[500px] w-[500px] mt-52 absolute'/>
    </motion.div>
  );
}

export default BackgroundCircles