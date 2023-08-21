import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

function Genres() {
  const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }, [])

  const navigate = useNavigate()

    const [animes, setAnimes] = useState([]) 
    const [genres,setGenres] = useState([])
    const [id,setID] = useState(0)

    const getGenres = async () => {
        const data = await axios.get(`https://api.jikan.moe/v4/genres/anime`)
        .then(res => setGenres(res.data.data.splice(0,20)))
        .catch(err => {
        console.log(err)
      })
      }
      useEffect(() => {
        getGenres()
      }, [genres])

      /////// get genre
      const getGenre = async () => {
        const data = await axios.get(`https://api.jikan.moe/v4/anime?genres=${id}`)
        .then(res => setAnimes(res.data.data))
        .catch(err => {
        console.log(err)
      })
      }

      useEffect(() => {
        getGenre()
      }, [id])


      console.log(animes)
  return (
    <div>
      {
        loading ? 
        <ClipLoader color="#00FF00" size={80} className='ml-[750px] mt-24' />
        :
        <div>
            <h1 onClick={() => navigate("/") & window.scroll(0,0)} className='absolute cursor-pointer ml-20 mb-4 mt-4 rounded-lg text-center bg-lime-600 text-black font-bold p-1 w-24'>HOME</h1>
            <h1 className='text-center text-5xl text-lime-500 mt-2 mb-4'>Genres</h1>
              <div className='flex gap-x-6 mx-6 text-sm font-thin mt-12 '>
                  {
                      genres.map((genre,key) => (
                          <div key={key}>
                              <h1 onClick={() => setID(genre.mal_id)} className=' cursor-pointer hover:text-lime-500 duration-500'>{genre.name}</h1>
                          </div>
                      ))
                  }
              </div>
              <div className='grid grid-cols-5 mt-20 ml-12 gap-y-12 mb-12'>
                  {
                          animes.map((anime,key) => (
                              <div key={key}>
                                  <img onClick={() => navigate(`/anime/${anime?.mal_id}`) & window.scroll(0,0)} src={anime?.images.jpg.image_url} className='w-[250px] h-[300px] rounded-xl opacity-80 hover:opacity-100 hover:scale-110 duration-500 cursor-pointer' />
                              </div>
                          ))
                  }
              </div>
        </div>
      }
    
    </div>
  )
}

export default Genres