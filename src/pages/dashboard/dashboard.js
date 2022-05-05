import { useQuery } from "react-query";
import { getMovies } from "../../api/movies";

const Dashboard = () => {
  const { status, data: movies } = useQuery("movies", () => getMovies());

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {movies?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;