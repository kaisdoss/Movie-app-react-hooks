import "./App.css";
import MovieList from "./components/MovieList";

function App({listMovies}) {
  // console.log({listMovies});
  return (
    <div>
      <MovieList />
    </div>
  );
}

export default App;
