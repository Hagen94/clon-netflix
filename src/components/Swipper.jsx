// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination,  } from 'swiper/modules';
// Import Swiper styles

// Import Swiper styles 
 import 'swiper/css'; 
import 'swiper/css/navigation'; // Estilos de navegación
import 'swiper/css/pagination'; // Estilos de paginación;
import Card from './Card';



export const SwipperComponent = ({movies}) => {
    
  
  return (
  
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{
        overflow: 'visible', // Permitir que los elementos desborden
        position: 'relative', // Asegurar que el Swiper tenga un contexto relativo
      }}
        >
        {
            movies.map((movie) => (
                <SwiperSlide key={movie.id}  >
                    <Card video={movie.video} image={movie.backdrop} title={movie.title}  descripcion={movie.description} rating={movie.rating} />
                </SwiperSlide>
            ))
        }
            
        </Swiper>
   
  );
}