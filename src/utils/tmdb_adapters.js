import { tmdb_paths } from "../services/tmdb";




//objeto para adaptar la respuesta de la api
export const tmdbAdapter = (response, movies) => {
    // Manejar caso de respuesta vacía o incorrecta
    if (!response || !response.results) return [];
    
    // Obtener los resultados
    const { results } = response;
    return results.map((item) => {
      // Obtener el video
      const video = movies?.find(movie => movie.id === item.id)?.results[0]?.key || null;
      return {
        id: item.id,
        title: item.title || item.name || "Untitled",
        poster: item.poster_path
          ? `${tmdb_paths.images.poster.url}${tmdb_paths.images.poster.sizes.w500}${item.poster_path}`
          : null,
        backdrop: item.backdrop_path
          ? `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.w780}${item.backdrop_path}`
          : null,
        description: item.overview || "No description available.",
        rating: item.vote_average || "N/A",
        video: video,
      };
    });
  };
  

