import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import videos from '../Request';


const Row = ({ title, fetchURL, fetchMovieVideo, fetchTvVideo, rowID}) => {
  const [movies, setMovies] = useState([])
  const [like, setLike] = useState([false])
  const [tvVideo, setVideo] = useState();
  const [movieVideo, setMovieVideo] = useState();

  useEffect(()=>{
    axios.get(fetchURL).then((response) =>{
      setMovies(response.data.results)
    })
  }, [fetchURL])

  console.log(fetchURL)

    
  useEffect(()=>{
        axios.get(fetchTvVideo).then((response)=>{
              setVideo(response.data.results)
         })
          }, [])

          console.log(tvVideo)
  useEffect(()=>{
        axios.get(fetchMovieVideo).then((response)=>{
              setMovieVideo(response.data.results)
         })
          }, [])

          console.log(movieVideo)

const slideLeft = () => {
  var slider = document.getElementById('slider' + rowID);
  slider.scrollLeft = slider.scrollLeft - 500;
};
const slideRight = () => {
  var slider = document.getElementById('slider' + rowID);
  slider.scrollLeft = slider.scrollLeft + 500;
};

  return (
    <>
    <h2 className='text-white font-bold md:text-lg p-4'>{title}</h2>
    <div className='relative flex items-center group'>
  <MdChevronLeft onClick={slideLeft}
  className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity:100 cursor-pointer z-10 hidden group-hover:block'/>
      <div id={'slider' + rowID} className='w-ful h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
   <button 
   href={`https://www.youtube.com/watch?v=${tvVideo}${movieVideo}`}
   target='_blank'
   >
      {movies.map((item, id) => (
          <Movie key={id} item={item} />
      ))}
</button>
      </div>
<MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity:100 cursor-pointer z-10 hidden group-hover:block' />
    </div>
    </>
  )
}

export default Row