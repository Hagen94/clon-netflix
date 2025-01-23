import { Outlet } from "react-router"
import Header from "./layout/Header"
import { getPopularMovies } from "./features/movies/movie_services"

import { Box } from "@mui/material"

function App() {

  getPopularMovies()
  return (
    <Box sx={{position: 'relative'}} >
    <Header></Header>
    <Outlet></Outlet>

    </Box>
  )
}

export default App
