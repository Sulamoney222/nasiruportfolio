import React from 'react'


const aboutItems =[
    {
        label: 'Project done',
        number:10,
        key:1
    },
    {
        label:'Years of experience',
        number:5,
        key:2
    }
]

const About = () => {
  return (
    <>
    <section
    id='about'
    className='section'
    >
        <div data-aos='zoom-out' className='container'>
            <div className=' bg-zinc-50 p-7 rounded-2xl md:p-12  '>
                <p className=' text-blue-950 mb-4 md:mb-8 md:text-xl md:max-w-[90ch]'>
                I’m <b>NASIRU SULAIMON</b>, a dedicated React Frontend Developer with over 5 years of experience building intuitive, responsive, and high-performance web applications. I focus on crafting seamless user interfaces that provide smooth and engaging digital experiences while aligning with business goals.

With a strong command of React, TypeScript, JavaScript, HTML5, CSS3, and modern web technologies, I translate client requirements into clean, efficient code. I work closely with teams and stakeholders to deliver scalable and maintainable solutions that not only look great but also perform reliably across devices.
                </p>
                <div className=' flex flex-wrap items-center gap-4 md:gap-7'>
                    {
                        aboutItems.map(({label,number,key})=>{
                          return(
                           <div key={key}>
                            <div className =' flex items-center md:mb-2 '>
                                <span className='text-2xl font-bold ' >{number}</span>
                                <span className=' font-bold' >+</span>
                            </div>

                            <p className=' text-sm text-amber-800'>{label}</p>
                            </div>
                          )
                        })
                    }

                    <img
                    src='https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_11-512.png'
                    width={30}
                    height={30}
                    className='ml-auto md:w-[40px] md:h-[40px]'/>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default About
