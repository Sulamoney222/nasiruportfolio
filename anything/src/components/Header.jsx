import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {

  const [navOpen, setNavOpen] = useState(false)
  return (
    <div>
      <header className='fixed top-0 left-0 w-full h-20 items-center z-40 bg-gradient-to-b from-zinc-50 to-zinc-900/0'>
  <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
<h1>
    <a href='/' className='logo'>
    <img src='https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_11-512.png'
    width={40}
    height={40} />
    </a>
</h1>

<div className=' relative md:justify-self-center'>
    <button className='menu-btn md:hidden' onClick={()=>setNavOpen((prev)=> !prev)}>
        <span className='material-symbols-rounded'>
            {navOpen ? <CloseIcon/>: <MenuIcon/>}
        </span>
       
    </button>
   <Navbar navOpen ={navOpen}/>
</div>

<a 
href='#contact'
className='btn btn-secondary max-md:hidden md:justify-self-end '>
Contact Me
</a>
  </div>
      </header>
    </div>
  )
}

export default Header
