import React from 'react'
import {FaTwitter, FaInstagram, } from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center mx-24 mb-8 mt-24'>
        <h1 onClick={() => navigate(`/`) & window.scroll(0,0)} className='cursor-pointer text-2xl font-bold text-lime-500 mt-4 '>AnimeDB</h1>
        <div className='flex gap-x-20 text-lime-400 text-lg ml-24'>
            <a>Lorem</a>
            <a>Lorem</a>
            <a>Lorem</a>
        </div>
        <div className='flex gap-x-12 mr-2'>
            <FaTwitter className='text-lime-500 cursor-pointer' size={24} />
            <FaInstagram className='text-lime-500 cursor-pointer' size={24} />
            <AiFillFacebook className='text-lime-500 cursor-pointer' size={24 } />

        </div>
    </div>
  )
}

export default Footer