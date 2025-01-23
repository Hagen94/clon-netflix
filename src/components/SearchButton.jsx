import { useState } from "react";
/**icon search */
import SearchIcon from '@mui/icons-material/Search';

const SearchButton = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    }
  return (
    
        <div  className={`relative w-60 flex text-center justify-end `}> 
          <button
            onClick={handleExpand}
            className={` absolute top-0 h-full p-3  ${ isExpanded ? "-translate-x-48 transition-all duration-700 ease-in-out" : "-translate-x-0 transition-all duration-1000 ease-in-out "} `}
          >
            <SearchIcon sx={{ fontSize: 30,  }}/>
          </button>
          <input type="text" className={`   ${isExpanded ? ' w-full p-1 text-right transition-all duration-1000 ease-in-out ' : ' w-0 p-0 transition-all duration-500 ease-in-out'}`}  placeholder="Titulos, personas, generos"/> 
        </div>
      
     
  )
}

export default SearchButton
