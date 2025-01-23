import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import  ErrorPage from "./components/Error_page";
import Home from "./features/home/Home";
import Movies from "./features/movies/Movies";
import Series from "./features/series/Series";
import { loader as movieLoader } from "./features/movies/movie_services";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Home/>

                    },
                    {
                        path: "movies",
                        element: <Movies/>,
                        loader: movieLoader
                    },
                    {
                        path: "series",
                        element: <Series/>
                    },
                    {
                        path: "novedades",
                        element: <h1>Novedades populares</h1>
                    },
                    {
                        path: "lista",
                        element: <h1>Mi lista</h1>
                    },
                    {
                        path: "explorar",
                        element: <h1>Explorar por idiomas</h1>
                    }
                ]
            },]
    }
]);

//exporto las rutas al main
export function Router(){
    return (
        <RouterProvider router={routes}/>
    )
}