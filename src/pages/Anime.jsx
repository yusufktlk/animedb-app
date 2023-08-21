import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Recommendations from '../components/Recommendations'
import Characters from '../components/Characters'
import ClipLoader from "react-spinners/ClipLoader";

function Anime() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }, [])

        const navigate = useNavigate()

        const [details, setDetails] = useState()
    
        const {id} = useParams()
        

        useEffect(() => {
            axios.get(`https://api.jikan.moe/v4/anime/${id}`)
            .then(res => setDetails(res.data.data))
            .catch(err => console.log(err))
           console.log(details)
        }, [location.pathname, id])
        


  return (
   <div>
    {
        loading ?
        <ClipLoader color="#00FF00" size={80} className='ml-44 mt-24' />
        :
        <div>
             <h1 onClick={() => navigate("/") & window.scroll(0,0)} className='ml-20 mb-4 mt-4 rounded-lg text-center bg-lime-600 text-black font-bold p-1 w-24 cursor-pointer'>HOME</h1>
            <div className='flex flex-row gap-x-32 mx-20 mt-1  '>
                <div>
                    <div className='flex'>
                        <img src={details?.images?.jpg.image_url} className='w-[450px] h-[700px] mt-20 rounded-xl ' />
                        <div>
                            <h2 className='text-lime-500 text-3xl mt-4 text-center'>Synopsis</h2>
                            <p className=' font-thin tracking-widest mt-6 ml-16 w-[400px]'>{details?.synopsis}</p>
                            
                        </div>
            
                    </div>
                    
                    <iframe
                        width="900"
                        height="400"
                        src={details?.trailer.embed_url}
                        className='mt-12'
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Youtube Trailer"
                        />
                        
                </div>
                
                <div className='flex flex-col gap-y-4 mt-12 font-thin'>
                    
                    <h1 className='text-5xl font-mono mb-4 text-lime-500'>{details?.title} ({details?.title_japanese})</h1>
                    <p className='text-2xl'>Type: {details?.type}</p>
                    <p className='text-lime-600 font-bold text-lg mt-2 mb-2'>{details?.score}</p>
                    <p className='text-2xl'>Episodes: {details?.episodes}</p>
                    <p className='text-xl'>Genres: {details?.genres[0].name} / {details?.genres[1].name}</p>
                    <p className='text-2xl'>Popularity: #{details?.popularity}</p>
                    <p className='text-2xl'>Ranked: #{details?.rank}</p>
                    <p className='text-2xl'>Season: {details?.season}</p>
                    <p className='text-2xl'>Status: {details?.status}</p>
                    <p className='text-2xl'>Studios: {details?.studios[0].name}</p>
                    <h2 className='text-lime-500 text-3xl mt-4'>Background Story</h2>
                    <h1 className='text-sm font-thin tracking-widest mt-2 mb-4'>{details?.background}</h1>
                    <hr className='opacity-50' />
                   
                    
                    <p className='text-center text-xl mt-4'>{details?.aired.string}</p>
                </div>
            </div>

            <Recommendations />

            <Characters />
        </div>
    }
   
   </div>
  )
}

export default Anime