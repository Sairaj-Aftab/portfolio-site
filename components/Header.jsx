import React from 'react';
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaGithubSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'

const Header = () => {
  return (
    <div className='md:py-2 md:px-0 py-5 px-3 fixed w-[1200px]'>
            <div className="wraper flex justify-between">
                <div className="left">
                    <ul className='flex gap-2 text-xl'>
                        <li><a href="#"><FaFacebookSquare/></a></li>
                        <li><a href="#"><FaInstagramSquare/></a></li>
                        <li><a href="#"><FaLinkedin/></a></li>
                        <li><a href="#"><FaTwitterSquare/></a></li>
                        <li><a href="#"><FaGithubSquare/></a></li>
                    </ul>
                </div>
                <div className="right">
                    <ul className='text-xl'>
                        <li><a className='flex gap-2' href="#"><span className='text-sm font-semibold'>Get a Touch</span><MdEmail/></a></li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Header;