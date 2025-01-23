
import { mtdb, tmdb_paths } from "../../services/tmdb";
import { tmdbAdapter } from "../../utils/tmdb_adapters";



export const getPopularMovies = async () =>{ 
    let movies=[]
    //instancia + endpoint          
    const {data} = await mtdb.get(tmdb_paths.movies.popular)
        for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];
            let key  = await mtdb.get("/movie/"+element.id+"/videos?language=en-US")
          
            movies.push(key?.data)
        }
    
    return tmdbAdapter(data, movies);
}


export const getTopRatedMovies = async () => {
        let movies=[]
        const { data } = await mtdb.get(tmdb_paths.movies.top_rated);
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
                let key  = await mtdb.get("/movie/"+element.id+"/videos?language=en-US")
              
                movies.push(key?.data)
            }
        return tmdbAdapter(data, movies);
};

export const getUpcomingMovies = async () => {
    let movies=[]
    const { data } = await mtdb.get(tmdb_paths.movies.upcoming);
    for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];
            let key  = await mtdb.get("/movie/"+element.id+"/videos?language=en-US")
          
            movies.push(key?.data)
        }
    return tmdbAdapter(data, movies);
};


export const getNow_playing = async () => {
    let movies=[]
    const { data } = await mtdb.get(tmdb_paths.movies.now_playing);
    for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];
            let key  = await mtdb.get("/movie/"+element.id+"/videos?language=en-US")
          
            movies.push(key?.data)
        }
    return tmdbAdapter(data, movies);
};

export const loader = async () => {
    const porpularMovies = await getPopularMovies();
    const topRatesMovies = await getTopRatedMovies();
    const upcomingMovies = await getUpcomingMovies();
    const nowPlayingMovies = await getTopRatedMovies();
    return {
      porpularMovies,
      topRatesMovies,
      upcomingMovies,
      nowPlayingMovies
    }
  }