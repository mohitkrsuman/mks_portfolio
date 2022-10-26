import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
   name : string,
   email : string,
   subject : string,
   message : string,
 };
type Props = {};

const ContactMe = ({}: Props) => {
   const { 
      register,
      handleSubmit,
     } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:m123aryan123@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} , ${formData.message} (${formData.email})`;
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-xl'>
         Contact
      </h3>
      
      <div className='flex flex-col space-y-10'>
         <h4 className='text-sm font-semibold text-center tracking-[5px] text-gray-400'>
            I have what you need <span className= "decoration-[#00BCD4]/40 underline">Let's Talk</span>
         </h4>

         <div className='space-y-7'>
            <div className='flex items-center space-x-5 justify-center'>
              <PhoneIcon className='text-[#00BCD4] h-7 w-7 animate-pulse'/>
              <p className='text-xl'>+91 9162503910</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
              <EnvelopeIcon className='text-[#00BCD4] h-7 w-7 animate-pulse'/>
              <p className='text-xl'>m123aryan123@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
              <MapPinIcon className='text-[#00BCD4] h-7 w-7 animate-pulse'/>
              <p className='text-xl'>Madhya Pradesh, India</p>
            </div>
         </div>

         <form onSubmit = { handleSubmit(onSubmit) } className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
               <input 
                {...register('name')} 
                placeholder='Name' 
                className='contactInput' 
                type="text" />
               <input 
                {...register('email')} 
                placeholder='Email' 
                className='contactInput' 
                type="email"/>
            </div>

            <input 
              {...register('subject')} 
              placeholder='Subject' 
              className='contactInput' 
              type="text" />

            <textarea 
             {...register('message')} 
             placeholder='Message' 
             className='contactInput'/>
            <button type='submit' className='bg-[#00BCD4] py-3 px-6 rounded-md text-black font-bold text-lg'>Submit</button>
         </form>

      </div>
    </div>
  )
}

export default ContactMe