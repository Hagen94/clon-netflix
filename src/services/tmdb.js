
import axios from "axios";

//ACA CENTRALIZAMOS LA CONGIGURACION DE LA API

//objeto de configuracion
export const mtdb = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    /*authorization */
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzc3OWJhNjNlYWJhMWU0NmM0OGYwYzJmNzgxZmI0NSIsIm5iZiI6MTY5OTk4MTM3OC4zODUsInN1YiI6IjY1NTNhODQyYWM0MTYxMDBjNjNiMTM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yUqM9RHH0szPlJnkpwzv_WQXrXOB5cPm8XBn2pnrT7E',
    },
    params:{
        apy_key: import.meta.env.VITE_API_API_KEY,
    },
})

//objeto con endpoints
export const tmdb_paths = {

    movies: {/*-MOVIE LISTS--*/
        popular: "/movie/popular",
        top_rated: "/movie/top_rated",
        upcoming: "/movie/upcoming",
        now_playing: "/movie/now_playing",
        id: "find/external_id?external_source=",
    },
    tv: {/*-TV SERIES LISTS--*/
        popular: "/tv/popular",
        top_rated: "/tv/top_rated",
        airing_today: "/tv/airing_today",
        video:"tv/{series_id}/videos"
    },
    images: {
        poster: {
            sizes: {
            w92: "/w92",
            w154: "/w154",
            w185: "/w185",
            w342: "/w342",
            w500: "/w500",
            w780: "/w780",
            original: "/original",
            },
        url: "https://image.tmdb.org/t/p",
        },
        backdrop: {
            sizes: {
            w300: "/w300",
            w780: "/w780",
            w1280: "/w1280",
            original: "/original",
            },
            url: "https://image.tmdb.org/t/p",
        },
    },
};