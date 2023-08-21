import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Upcoming() {
  const navigate = useNavigate()

  const [upcoming,setUpcoming] = useState([])

  const getUpcoming = async () => {
    const data = await axios.get(`https://api.jikan.moe/v4/seasons/upcoming`)
    .then(res => setUpcoming(res.data.data))
    .catch(err => {
    console.log(err)
  })
  }
  useEffect(() => {
    getUpcoming()
  }, [])


  return (
    <div>
      <h1 onClick={() => navigate("/") & window.scroll(0,0)} className='absolute cursor-pointer ml-20 mb-4 mt-4 rounded-lg text-center bg-lime-600 text-black font-bold p-1 w-24'>HOME</h1>
      <h1 className='text-5xl text-lime-500 text-center mt-2'>Top Upcoming</h1>
      <div className='grid grid-cols-5 gap-y-12 mx-24 mt-20'>
        {
          upcoming.map((up,key) =>(
            <div key={key}>
              <img  src={up?.images.jpg.image_url} className='rounded-lg opacity-80 hover:opacity-100 hover:scale-110 duration-500' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Upcoming