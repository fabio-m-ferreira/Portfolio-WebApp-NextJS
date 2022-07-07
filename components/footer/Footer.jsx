import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {

  return (
    <footer>
      <a href='#home' className='footer-logo'>Fábio Ferreira</a>

      <ul className='permalinks'>
        <li><Link href="/#home"><a>Home</a></Link></li>
        <li><Link href="/#about"><a>About</a></Link></li>
        <li><Link href="/#portfolio"><a>Portfolio</a></Link></li>
        <li><Link href="/#contact"><a>Contact</a></Link></li>
      </ul>

      <div className="footer-socials">
        <Link href='https://www.linkedin.com/in/fabio--ferreira/'><a target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin /></a></Link>
        <Link href='https://github.com/Voydd9' ><a target="_blank" rel="noreferrer" aria-label="GitHub"><BsGithub /></a></Link>
      </div>

      <div className="footer-copyright">
        <p>Website Developed by Fábio Ferreira.</p>
        <Link href="https://www.freepik.com/aleksandr-samochernyi"><a> Portfolio Section Websites mockups designed by aleksandr_samochernyi - Freepik</a></Link>
      </div>
    </footer>
  )
}

export default Footer