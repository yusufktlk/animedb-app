import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

function TopAnimes() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }, [])

    const navigate = useNavigate()
    const [topAnimes, setTopAnimes] = useState([])

    const getTopAnimes = async () => {
        const data = await axios.get(`https://api.jikan.moe/v4/top/anime`)
        .then(res => setTopAnimes(res.data.data.splice(0,6)))
        .catch(err => {
        console.log(err)
      })
      }

      useEffect(() => {
        getTopAnimes()
      }, [])


      

  return (
    <div>
        {
            loading ? 
            <ClipLoader color="#00FF00" size={80} className='ml-44 mt-24' />
            :
            <div>
                <h1 className='text-3xl text-lime-400 ml-24 mt-12 font-thin tracking-wider'>Top Anime Series</h1>
            <div className='grid grid-cols-6 mx-24 gap-x-10 gap-y-6 mb-12'>
            {
                topAnimes?.map((anime,key) => (
                    <div key={key}>
                        <img onClick={() => navigate(`anime/${anime?.mal_id}`) & window.scroll(0,0)} src={anime?.images.jpg.image_url} className='rounded-xl opacity-80 hover:opacity-100 duration-500 hover:scale-105  m-auto mt-4 h-[300px]' />
                    </div>
                ))
            }
                </div>
            </div>
        }
       

    </div>
  )
}

export default TopAnimes