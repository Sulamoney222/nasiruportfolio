import React from 'react'
import { ButtonPrimary } from './Button';
import ArrowOutward from '@mui/icons-material/ArrowOutward';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Sulamoney222'
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nasiru-sulaimon6bb289269'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/Nasiruatanda123?t=v1yR_a_PSQXZSWIuUGlipQ&s=09'
    },
    {
      label: 'Instagram',
      href: ''
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/codewithsadee'
    }
  ];

const Footer = () => {
  return (
   <>
   <footer className="section">
    <div className="container">

        <div className=" lg:grid lg:grid-cols-2 ">
            <div className="">
            <h2 className="headline-1 mb-8 lg:max-w[12ch]">
            Let's work together
        </h2>

        <ButtonPrimary
        href='mailto:sualimonnasiru06@gmail.com'
        label='Start Project'
        icon={<ArrowOutward/>}
        />
            </div>
            <div className=" grid grid-cols-2 gap-4 lg:pl-20">
                <div>
                    <p className='mb-2'>Sitemap</p>
                    <ul>
                        {
                            sitemap.map(({label, href,key})=>{
                                return(
                                       <>
                                       <li key={key}>
                                        <a
                                        href={href}
                                        className='block text-sm py-1 transition-colors hover:text-red-700'>
                                            {label}
                                        </a>

                                       </li>
                                       </>
                                )
                            })
                        }
                    </ul>
                </div>
          

            <div className="">
                <div>
                    <p className='mb-2'>Socials</p>
                    <ul>
                        {
                            socials.map(({label, href,key})=>{
                                return(
                                       <>
                                       <li key={key}>
                                        <a
                                        href={href}
                                        target='_blank'
                                        className='block text-sm py-1 transition-colors hover:text-red-700'>
                                            {label}
                                        </a>

                                       </li>
                                       </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
            <a
            href=''
            className=''>
                <img 
                src='https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_11-512.png'
                width={40}
                height={40}
                alt='logo'/>
            </a>
            <p className='text-zinc-600 text-sm '>
                @2025 Copyright <span className='text-zinc-700'>codewithnasiru</span> all rights served
            </p>
        </div>
    </div>
   </footer>
   </>
  )
}

export default Footer
