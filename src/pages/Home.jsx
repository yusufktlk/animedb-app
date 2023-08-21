import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import TopAnimes from '../components/TopAnimes'
import TopCharacters from '../components/TopCharacters'
import News from '../components/News'
import Footer from '../components/Footer'

function Home() {

   
    
    const [inputValue,setInputValue] = useState(0)
    const [animes,setAnimes] = useState()


      const getAnime = async () => {
        const data = await axios.get(`https://api.jikan.moe/v4/anime?q=${inputValue}&sfw&limit=20`)
        .then(res => setAnimes(res.data.data))
        .catch(err => {
        console.log(err)
      })
      }

      const getEmpity = async () => {
        const data = await axios.get(`https://api.jikan.moe/v4/anime?q=${0}&sfw&limit=20`)
        .then(res => setAnimes(res.data.data))
        .catch(err => {
        console.log(err)
      })
      }
    
      useEffect(() => {
        inputValue === "" ? getEmpity() : getAnime()
       
      }, [])
      
    
    
  return (
    <div>
        <SearchBar animes={animes} setInputValue={setInputValue} />
        <News />
        <TopAnimes  />
        <TopCharacters />
    </div>
  )
}

export default Home