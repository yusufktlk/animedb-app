import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Recommendations() {

    const navigate = useNavigate() 
    const [recom,setRecom] = useState([])
    
    
        const {id} = useParams()
       


        useEffect(() => {
            axios.get(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
            .then(res => setRecom(res.data.data.splice(0,6)))
            .catch(err => console.log(err))
            
        }, [location.pathname, id])
  return (
    <>
    <h1 className='text-lime-500 text-5xl text-center mt-20'>Recommendations</h1>
    <div className='flex justify-around mx-24 mt-24 mb-24 text-center text-sm'>
                {
                    recom.map((rec,key) =>(
                        <div key={key} onClick={() => navigate(`/anime/${rec?.entry?.mal_id}`) & window.scroll(0,0)}>
                             <img src={rec?.entry?.images?.jpg.image_url} className='w-[200px] h-[300px] cursor-pointer rounded-lg' />
                             <h1 className='mt-1 w-[200px]'>{rec?.entry?.title}</h1>
                        </div>
                    ))
                }

    </div>
    </>
  )
}

export default Recommendations