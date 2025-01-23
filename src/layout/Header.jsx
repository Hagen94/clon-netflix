import { Link } from "react-router"
import SearchButton from "../components/SearchButton"
/**bell icon */
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CustomizedMenus from "../components/AccountMenu";
import { useEffect, useState } from "react";


const rutas = [
  {
    path: "/",
    name:"Inicio"
  },
  {
    path: "/movies",
    name:"Peliculas"
  },
  {
    path: "/series",
    name:"Series"
  },
  {
    path: "/novedades",
    name:"Novedades populares"
  },
  {
    path: "/lista",
    name:"Mi lista"
  },
  {
    path: "/explorar",
    name:"Explorar idiomas"
  }
]

const Header = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
   const handleScroll = () => { 
    const position = window.scrollY; 
    setScrollPosition(position); }; 
    
    useEffect(() => {
       window.addEventListener('scroll', handleScroll);
        return () => { 
          window.removeEventListener('scroll', handleScroll); 
        }; }, []);
  return (
    <header className={`flex fixed z-[999] top-0 left-0 right-0  w-full p-5 ${scrollPosition > 0 ? 'bg-black' : 'bg-black-transparent'}`}>
        <div className="logo mx-8">
          <Link to={"/"}>
          <img className="w-28 h-14" src="../../public/Netflix_Logo_PMS.png" alt="Netflix Logo" />
          </Link> 
        </div>
        <nav className="flex grow">
            <ul className="flex justify-center items-center gap-3 ">
                {rutas.map((ruta) => (
                    <li key={ruta.name}>
                        <Link className="text-slate-200 focus:text-white hover:text-gray-400 font-normal size-3" to={ruta.path}>{ruta.name} </Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="flex justify-center items-center gap-4 mr-8" >
            

            <SearchButton/>
          
            <button><NotificationsNoneIcon sx={{ fontSize: 30 }}/></button>
                
            <CustomizedMenus/>
        </div>
    </header>
  )
}

export default Header
