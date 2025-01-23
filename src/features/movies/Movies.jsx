import { useLoaderData } from "react-router";
import SelectLabels from "../../components/SelectLabel"
import { SwipperComponent } from "../../components/Swipper"


const titulos = {
  porpularMovies: "Películas populares",
  topRatesMovies: "Películas mejor calificadas",
 upcomingMovies: "Peliculas próximas",
  nowPlayingMovies: "Peliculas en cartelera"
}

const Movies = () => {
  //cargamos todas las movies
  const allMovies = useLoaderData();
  Object.keys(allMovies).map((key) => console.log(key, allMovies[key]));
  return (
   
   
    <div className="mt-24 mx-14 overflow-visible">
        <SelectLabels name={"Películas"}/>
        {
          Object.keys(allMovies).map((key) =>(
            <div key={key} >
              <h2 className="text-2xl">{titulos[key]}</h2>
              <SwipperComponent style={{overflow: 'visible'}} key={key} movies={allMovies[key]} />
            </div>
          ))
        }
        
    </div>

   
  )
}

export default Movies
