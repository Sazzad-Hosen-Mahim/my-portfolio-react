import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header-social'>
        <a href="https://www.linkedin.com/in/sazzad-hosen-mahim/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Sazzad-Hosen-Mahim" target='_blank'><BsGithub/></a>
        <a href="https://www.facebook.com/sazzad.mahimm" target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocial