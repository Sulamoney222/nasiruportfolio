import React from 'react'
import sula from './images/sula.png'
import {ButtonPrimary, ButtonOutline} from './Button'
import resume from './images/NASIRUSULAIMONCV.pdf'

const Hero = () => {
  return (
   <>
   <section
   id='home'
   className='pt-28 lg:pt-36'
   >
  
  <div className='container lg:grid lg:grid-cols-2 items-center
   lg:gap-10
  '>
   
   <div>    
    <div className=' flex items-center gap-3'>
        <figure className=' img-box w-9 h-9 rounded-lg'>
            <img 
            src=''
            width={40}
            height={40}
            alt='Nasiru Sulaimon'
            className='img-cover'/>
        </figure>

        <div className='flex items-center gap-1.5 text-blue-950 text-sm tracking-wide'>
            <span className='relative w-4 h-4 rounded-full bg-emerald-500'>
                <span className='absolute inset-0 rounded-full bg-emerald-500 animate-ping'></span>
            </span>

            Available for Work
        </div>
    </div>
         <h2 className='headline-1 max-w-[15ch sm:max-w-[20ch] lg:max-w-[15ch] mt-5 lg:mb-10'>
            <br></br>Frontend Developer & UI/UX Designer
         </h2>

         <div className=' flex items-center gap-3'>
            <ButtonPrimary 
            label={'Download CV'}
            icon={'7'}
            href={resume}           
            />

           < ButtonOutline 
           href={'#about'}
           label={'Scroll down'}
           />
         </div>
   </div>

<div className=''>
    <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-200
                       via-5% via-sky-900 to 65% rounded-[60px] overflow-hidden'>
        <img 
        src={sula}
        height={800}
        width={656}
        alt="Nasiru Sulaimon" 
        className='w-full'/>
    </figure>
</div>
  </div>

   </section>
   </>
  )
}

export default Hero
