import React from 'react'
import{useRef} from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'


const Navbar = ({navOpen}) => {

    const lastActiveLink = useRef()
    const activeBox = useRef();
   
    const initActiveBox =()=>{
      
      activeBox.current.style.top= lastActiveLink.current.offsetTop + 'px'
      activeBox.current.style.left= lastActiveLink.current.offsetLeft + 'px'
      activeBox.current.style.width= lastActiveLink.current.offsetWidth + 'px'
      activeBox.current.style.height= lastActiveLink.current.offsetHeight+ 'px'
    }

    useEffect(initActiveBox,[])

    //responsiveness of the navbar
    window.addEventListener('resize', initActiveBox)
  
    //when clicking the current link
  const activeCurrentLink =(event)=>{
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active')
    lastActiveLink.current = event.target;

      activeBox.current.style.top=     event.target.offsetTop + 'px'
      activeBox.current.style.left=  event.target.offsetLeft + 'px'
      activeBox.current.style.width= event.target.offsetWidth + 'px'
      activeBox.current.style.height=event.target.offsetHeight+ 'px'

  }


    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink,
          key:1,
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link',
          key:2,
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link',
          key:3,
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link',
          key:4,
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden',
          key:5,
        }
      ];
 
    return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
        {
            navItems.map(({label,link, className, ref,key})=>{
              return(
               
                <div key={key}>
                <a href={link}
                key={key}
                ref={ref}
                className={className}
                onClick={activeCurrentLink}>
                  {label}
                </a>
                </div>
               
              )
            })
        }

        <div
        className='active-box'
        ref={activeBox}
        ></div>
    </nav>
  )
}


Navbar.PropTypes ={
  navOpen : PropTypes.bool.isRequired
}

export default Navbar


//https://gist.github.com/codewithsadee/4b386510410b3cec02a22c3753f59e0b