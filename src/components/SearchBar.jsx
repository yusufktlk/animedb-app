import React from 'react'
import { useNavigate } from 'react-router-dom'

function    SearchBar(props) {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between mt-2'>
        <div className='flex items-center gap-x-12 text-lime-400 mt-4'>
            <h1 className='text-5xl ml-24 font-bold '>AnimeDB</h1>
            <h1 onClick={() => navigate(`genres`)} className='text-lg mt-4 font-thin cursor-pointer underline'>Genres</h1>  
            <h1 onClick={() => navigate(`upcoming`)} className='text-lg mt-4 font-thin cursor-pointer underline'>Upcoming</h1> 
        </div>
       
            <div className='font-mono mr-4 absolute right-1 mt-4 ' >
                <input onChange={(e) => props.setInputValue(e.target.value)}  placeholder='Search Anime' className=' mt-4 w-[200px] p-2 text-center border-2 rounded-lg bg-lime-400 placeholder-black text-black border-black ml-44 focus:ml-8 focus:w-[450px] duration-500'  /><br />      
                    <div className='overflow-hidden overflow-y-auto w-[500px] h-[350px] text-right mt-2   '>
                    {
                        props.animes?.map((anime,id) =>{
                            return(
                                <div onClick={() => navigate(`anime/${anime?.mal_id}`)} key={id} className='flex gap-x-12 items-center mt-4 mx-4  hover:bg-slate-800 duration-300 w-[450px] h-[150px]  '>
                                    <img src={anime.images.jpg.image_url} className='w-[130px] h-[150px] z-50  ' /> 
                                    <h1 className='text-sm w-[150px] m-auto text-center mr-20 font-bold z-50 '>{anime.title}</h1>
                                </div>
                            )
                            })
                    }
                    </div>
            </div>
    </div>
  )
}

export default SearchBar