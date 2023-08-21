import axios from 'axios'
import React, { useEffect, useState } from 'react'

function News() {

    const [news, setNews] = useState([])

    const getNews = async () => {
        const data = await axios.get(`https://api.jikan.moe/v4/anime/1/news`)
        .then(res => setNews(res.data.data.splice(0,3)))
        
        .catch(err => {
        console.log(err)
      })
      }

      useEffect(() => {
        getNews()
      }, [news])
      console.log(news)
  return (
    <div>
        <h1 className='text-3xl text-lime-500 ml-24 mt-12 font-thin'>Anime News</h1>

        <div className='flex flex-col mt-10 gap-y-6'>
            
            {
                news.map((news,key) => (
                    <>
                    
                    <div key={key} className='flex ml-24 '>
                        <img src={news.images.jpg.image_url} className='w-24' />
                        <div className='flex flex-col gap-y-4 ml-4'>
                            <h1 className='text-xl w-[700px] text-purple-300 font-bold'>{news.title}</h1>
                            <h1 className='w-[600px] font-thin tracking-wider'>{news.excerpt} <a href={news.url} target='_blank' rel='noreferrer' className='text-lime-300'>read more</a></h1>
                            <h1 className='text-sm font-thin'>{news.date.slice(0,10)} by <a href={news.author_url} target='_blank' rel='noreferrer' className='text-lime-200 italic '>{news.author_username} </a></h1>
                        </div>
                        <hr />
                    </div>
                    <hr className='ml-24 mt-4 w-[700px] border-1 border-purple-400 rounded-xl' />
                    </>
                ))
            }
            
        </div>

    </div>
  )
}

export default News