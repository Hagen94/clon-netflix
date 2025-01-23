import { useState } from "react";
import ReactPlayer from "react-player/youtube";


const Card = ({image, title, video, descripcion, rating}) => {

  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => {
    setIsFocused(true);
  }
  const handleMouseLeave = () => {
    setIsFocused(false);
  }
  return (
    <div className={`w-full h-full `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} tabIndex="0" >
      {
        isFocused? 
        (<CardFocus isFocused={isFocused} video={video}  title={title}  descripcion={descripcion} rating={rating}/> )
        :
         (<div  >
          <h2 className=" absolute z-0 bottom-10 left-3 text-2xl text-white font-bold">{title}</h2>
          <img className="w-full h-60 object-contain "  src={image}/>
          </div>
        )
      }    
        
      
    </div>
  )
}

export default Card


const CardFocus = ({ isFocused, video,  title, descripcion, rating}) => {
  return (
    <div  className={ ` bg-white text-black scale-75 -translate-x-48 -translate-y-48 overflow-visible ${isFocused? 'absolute z-50 ' : 'static'}`} >
      <section> 
         <ReactPlayer light={true} url={`https://www.youtube.com/watch?v=${video}`}  />
      </section> 
      <section>
        <p>{title}  </p>
        <p>{descripcion} </p>
        <p>{rating} </p>
      </section>
      
    </div>
  )
}