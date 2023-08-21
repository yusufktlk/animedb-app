import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

function Characters() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }, [])

    const navigate = useNavigate()

    const [characters,setCharacters] = useState([])

    const {id} = useParams()
    console.log(id)
   
    const getChacters = () => {
       const data = axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then(res => setCharacters(res.data.data.splice(0,25)))
      .catch(err => console.log(err))
    } 

    useEffect(() => {
        getChacters()
    }, [location.pathname, id])
    
  return (
    <>
    {
        loading ? 
        <ClipLoader color="#00FF00" size={80} className='ml-[750px] mt-24' />
        :
        <div>
            <h1 className='text-center text-5xl text-lime-500 mb-20'>Characters</h1>
            <div className='grid grid-cols-5 ml-32 gap-y-12 text-sm font-thin mb-16'>
                {
                    characters.map((char,key) => (
                        <div key={key} onClick={() => navigate(`/character/${char?.character?.mal_id}`) & window.scroll(0,0)}>
                            <img src={char?.character.images?.jpg.image_url} className='w-[150px] h-[200px] rounded-3xl cursor-pointer' />
                            <div>
                                <h1>Character: {char.character?.name}</h1>
                                <h1>Role: {char.role}</h1>
                                <h1>Voice Actor: {char?.voice_actors[0]?.person?.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    }
    
    </>
  )
}

export default Characters