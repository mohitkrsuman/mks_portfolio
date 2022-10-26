import React from 'react'
import {motion} from 'framer-motion';
import { Project } from "../typings";
import {urlFor} from '../sanity';

type Props = {
  projects : Project[];
}

const Projects = ({projects}: Props) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition= {{duration: 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
       <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

       <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-track-hidden scrollbar-thumb-[#00BCD4]/80 scrollbar-thumb-rounded-full scrollbar-thumb-thin'>
         {/* Projects */}
         {projects?.map((project, i) =>(
            <motion.div
             key={project._id}
             className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-38 h-screen'>
              <a href={project.url} target='_blank'  rel="noreferrer">
              {project?.image && (
              <motion.img 
              initial={{
                y : -200,
                opacity: 0,
              }}
              transition={{duration: 1.2}}
              whileInView = {{opacity: 1, y: 0}}
              className='h-[200px] w-[300px] md:h-[300px] md:w-[400px] 
              xl:h-[350px] xl:w[500px] object-cover rounded-md '
              src={urlFor(project?.image).url()}
              alt="" />
              )}
              </a>

              <div className='space-y-10 px-0 md:px-10 max-w-2xl'>
                <h4 className='text-2xl font-semibold text-center'>
                  <span className='underline decoration-[#00BCD4]/50'>Project {i+1} of {projects.length}</span>{" "}
                  : {project?.title}
                </h4>

                <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map(technology => (
                   <motion.img 
                     key={technology._id} 
                     src={urlFor(technology?.image).url()} 
                     alt="" className='h-10 w-10 object-contain' />
                ))}
                </div>

                <p className='text-md text-center md:text-left'>{project?.summary}</p>
              </div>
            </motion.div>
         ))}
       </div>

       <motion.div 
       whileInView={{opacity: 1, x: 0, transition: {duration: 1}, scale: 1, skewY: -15}}
       className='w-full absolute top-[30%] bg-[#00BCD4]/10 left-0 h-[300px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects