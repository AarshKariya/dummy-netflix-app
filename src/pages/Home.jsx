import React from 'react'
import videos from '../Request'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID = '1' title='popular' fetchURL={requests.requestPopular} fetchMovieVideo={videos.requestMovieVideo}/>
        <Row rowID = '2' title='Top Rated' fetchURL={requests.requestTopRated} fetchMovieVideo={videos.requestMovieVideo} />
        <Row rowID = '3' title='Trending' fetchURL={requests.requestTrending} fetchMovieVideo={videos.requestMovieVideo}/>
        <Row rowID = '4' title='Up Coming' fetchURL={requests.requestUpcoming} fetchMovieVideo={videos.requestMovieVideo}/>
        <Row rowID = '5' title='Popular Tv' fetchURL={requests.requestTvPopular} fetchTvVideo={videos.requestTvVideo}/>
        <Row rowID = '6' title='Top Rated Tv' fetchURL={requests.requestTvTopRated} fetchTvVideo={videos.requestTvVideo}/>
    </div>
  )
}

export default Home