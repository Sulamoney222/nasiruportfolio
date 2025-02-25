import React from 'react'


const aboutItems =[
    {
        label: 'Project done',
        number:20,
        key:1
    },
    {
        label:'Years of experience',
        number:7,
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
        <div className='container'>
            <div className=' bg-zinc-50 p-7 rounded-2xl md:p-12  '>
                <p className=' text-blue-950 mb-4 md:mb-8 md:text-xl md:max-w-[90ch]'>
                I’m <b>NASIRU SULAIMON</b>, a passionate React Frontend Developer and UI/UX Designer with over 5 years of hands-on experience creating seamless, user-centered digital experiences. I specialize in building intuitive, responsive, and high-performance web applications that delight users and meet business goals. My dual expertise in both front-end development and user experience design allows me to craft cohesive solutions that not only look great but function smoothly and efficiently.

I have a strong foundation in React, Typescript, JavaScript, HTML5, CSS3, and modern web technologies, coupled with a keen eye for design. I collaborate closely with clients to understand their vision, translate it into clean code, and deliver interfaces that engage users and drive results.
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
