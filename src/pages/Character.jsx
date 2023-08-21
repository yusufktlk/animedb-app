import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Character() {

    const navigate = useNavigate()

    const {id} = useParams()

    const [character,setCharacter] = useState([])

    useEffect(() => {
      axios.get(`https://api.jikan.moe/v4/characters/${id}`)
      .then(res => setCharacter(res.data.data))
    }, [location.pathname, id])
    
   
   
  return (
    <>
    <div className='flex'>
      <h1 onClick={() => navigate("/") & window.scroll(0,0)} className='ml-20 mb-4 mt-4 h-[33px] rounded-lg text-center bg-lime-600 text-black font-bold p-1 w-24'>HOME</h1>
      <h1 className='text-5xl text-lime-500 mt-4 text-center w-[700px] m-auto   '>{character.name} ({character?.name_kanji})</h1>
    </div>
    <div className='flex mb-8 mt-12 '>
        <img src={character.images?.jpg?.image_url} className='rounded-xl h-[600px] ml-24' />
        
        <div>
          <h1 className='tracking-widest font-thin mx-44 '>{character?.about}</h1>
        </div>
        
    </div>
    </>
  )
}

export default Character