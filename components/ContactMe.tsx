import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler} from 'react-hook-form';

type Inputs = {
    name: string;
    email:string;
    message:string;
    subject:string;
};
type Props ={};


const ContactMe = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler  <Inputs> =  (formData)=> {
        window.location.href =`mailto:prayes@gmail?subject=${formData.subject}& 
        body =Hi, my name is ${formData.name}.${formData.message} (${formData.email})`;
        
    }
    
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase  pb-6 tracking-[20px] to-gray-500 text-2xl space-y-10'>Contact</h3>
        <div className='flex flex-col space-y-10'>

            <h4 className='hidden md:block text-xl font-semibold md:text-center'>
                I have got just what you need. {""}
                <span className='decoration-[#F7AB0A]/50 underline'> Lets Talk.</span>
            
            </h4>
            
            <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon  className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>0424161616</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon  className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>pravyes@global.au</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon  className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>123 Developer Lane</p>
            </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex w-fit flex-col space-y-2  mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput'/> 
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg uppercase' >submit</button>
            </form>
        </div>
        </div>
  )
}

export default ContactMe