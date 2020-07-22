import React from "react"

function MovieItem(props) {
    return (
        <tr>
            <td>{props.movie.title}</td>
            <td>{props.movie.genre.name}</td>
            <td>{props.movie.numberInStock}</td>
            <td>{props.movie.dailyRentalRate}</td>
            <td><button onClick={() => props.delete(props.movie._id)}>Delete</button></td>
        </tr>
    )
}

export default MovieItem