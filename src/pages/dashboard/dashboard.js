import { useEffect } from "react";
import {getMovies} from "../../api/movies";
import { useState } from "react";

function Dashboard() {
    
    const [movies, setMovies] = useState([]);
    
    useEffect( () => { 
        getMovies().then( (movies) => {
        //console.log(movies);
        setMovies(movies);
    });
}, []) //to run one time only n mount. 

function printMovieTitle(movie){
    return movie.original_title;
}
    return (
        <div className= "Dashboard">
            <h1> Dashboard </h1>
            <div id="TotalMovies">
                <div><label>Movies</label></div>
                <div><label>{movies.length}</label></div>
            </div>
           
            <div id="MovieList">
                <ul>
                    {movies?.map((movie) => <li>{movie.title}</li>)};
                </ul>
            </div>
        
        </div>
        
        
    );
}
export default Dashboard;