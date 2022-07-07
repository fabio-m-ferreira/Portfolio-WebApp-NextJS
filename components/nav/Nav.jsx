import React, { useState, useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import Scrollspy from '../scrollspy/scrollspy.js'
import Link from 'next/link'

const Nav = () => {

  useEffect(() => {

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll < 50) {
        document.querySelector('#menu').classList.add('menu-invisible');
        document.querySelector('#menu').classList.remove('menu-visible');
      } else {
        document.querySelector('#menu').classList.add('menu-visible');
        document.querySelector('#menu').classList.remove('menu-invisible');
      }
    });

  }, []);

  const [activeNav, setActiveNav] = useState('#')

  return (

    <nav id='menu' className='menu-invisible'>
      <Scrollspy items={['home', 'about', 'portfolio', 'contact']} className="scroll-nav" currentClassName="active" offset={-100}>
        <li><Link href='/#home'><a onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''} aria-label="Home"><AiOutlineHome /></a></Link></li>
        <li><Link href='/#about'><a onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} aria-label="About"><AiOutlineUser /></a></Link></li>
        <li><Link href='/#portfolio'><a onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} aria-label="Portfolio"><BiBook /></a></Link></li>
        <li><Link href='/#contact'><a onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} aria-label="Contact"><BiMessageSquareDetail /></a></Link></li>
      </Scrollspy>
    </nav>
  )
}

export default Nav