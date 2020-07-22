import React, {useState} from "react";
import movies from "./services/fakeMovieService";
import MovieItem from "./MovieItem"

function MoviesComponent() {
    const [moviesData, setData] = useState(movies)

    function deleteMovie(id) {
        const nuMovies = moviesData.filter(movie => movie._id !== id)
        setData(nuMovies)
    }

    return (
        <div>
            <table class="table">
                <thead>
                     <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {moviesData.map(movie => {
                        return (
                            <MovieItem id={movie._id} movie={movie} delete={deleteMovie}/>
                            
                        ) 
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default MoviesComponent