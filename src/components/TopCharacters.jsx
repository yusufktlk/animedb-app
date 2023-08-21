import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

function TopCharacters() {
    let [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }, [])
    const navigate = useNavigate()
    
    const [topCharacters, setTopCharacters] = useState([])
        
    const getTopCharacters = async () => {
        const data = await axios.get(`https://api.jikan.moe/v4/top/characters`)
        .then(res => setTopCharacters(res.data.data.splice(0,6)))
        .catch(err => {
        console.log(err)
      })
      }

      useEffect(() => {
        getTopCharacters()
      }, [])

  return (
    <div>
        {
            loading ?
            <ClipLoader color="#00FF00" size={80} className='ml-44 mt-24' />
            :
            <div>
                <h1 className='text-3xl text-lime-500 ml-24 mb-4'>Top Characters</h1>
                <div className='grid grid-cols-6 mx-24 gap-x-10 gap-y-6 mb-12'>
                    {
                        topCharacters.map((anime,key) => (
                            <div key={key}>
                                <img  onClick={() => navigate(`character/${anime?.mal_id}`)} src={anime.images.jpg.image_url} className='rounded-3xl opacity-80 hover:opacity-100 duration-500 hover:scale-105  m-auto mt-4 h-[300px]' />
                            </div>
                        ))
                    }
                </div>
            </div>
        
        }
        
        
    </div>
  )
}

export default TopCharacters