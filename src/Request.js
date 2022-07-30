const key = 'ce8ba436f8f1d4c61464064deab5df1c'



const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=2`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestTvPopular:`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestTvTopRated:`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`
}

 const videos = {
    //requestMovieVideo: `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${key}&language=en-US`,
    requestTvVideo: `https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=${key}&language=en-US`
    
 }

export default requests