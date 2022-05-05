import { useQuery } from "react-query";
import { getMovies } from "../../api/movies";
import { Table } from 'reactstrap';

const Dashboard = () => {
  const { status, data: movies } = useQuery("movies", () => getMovies());

  return (
    <div>
      <h1>Dashboard</h1>

      <div>Movies</div>
      <h4>{movies?.length}</h4>
      Last 5 movies
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Release date</th>
            <th>Runtime</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies?.map((movie) => (
            <tr>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.release_date}</td>
              <td>{movie.runtime}</td>
              <td><a href={`/movie/{movied.id}`}>View Link</a></td>
            </tr>
            
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;