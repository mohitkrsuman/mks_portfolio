import React from 'react'
import { motion } from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity'; 

type Props = {
   experience : Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
   <a href={experience?.url} target='_blank' rel='noreferrer'>
    <article 
    className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[500px] xl:w-[600px] snap-center bg-[#0659b1] p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      {experience?.companyImage && (
      <motion.img 
         initial = {{y : -100, opacity : 0}}
         transition = {{duration : 1.5}}
         whileInView = {{opacity : 1, y : 0}}
         className='w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
         src={urlFor(experience?.companyImage).url()}
         alt="" />
      )}

     <div className='px-0 md:px-10'>
      <h4 className='text-2xl font-light'>{experience.jobTitle}</h4>
      <p className='font-bold  text-1xl mt-1'>{experience?.company}</p>
      <div className='flex space-x-2 my-2'>
         {experience.technologies.map((technology) => (
            <motion.img 
            key={technology._id}
            className='h-7 w-7 rounded-full'
            src={urlFor(technology.image).url()} alt="" />
         ))}
      </div>
      <p className='uppercase py-1 text-gray-300'>
         {new Date(experience.dateStarted).toDateString()} -{" "} {experience.isCurrentWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
      </p>
      <ul className='list-disc space-y-1 ml-5 text-md max-w-36 h-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#9E9E9E]/50 scrollbar-track-hidden'>
         {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
         ))}
      </ul>
     </div>
    </article>
    </a>
  )
}

export default ExperienceCard