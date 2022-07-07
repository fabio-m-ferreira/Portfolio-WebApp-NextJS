import React from 'react'
import Link from 'next/link'

const CTA = () => {
  return (
    <div className='cta'>
      <Link href="/assets/Fabio-Ferreira_CV.pdf"><a className="btn" target="_blank" rel="noreferrer">Resume/CV</a></Link>
      <Link href="/#contact"><a className="btn btn-primary">Let&apos;s Talk</a></Link>
    </div>
  )
}

export default CTA