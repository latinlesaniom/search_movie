import react from "react";
import SearchMovie from "./SearchMovies";

const App = () => {
  return(
     <>
      <div className="container">
         <h1 className="tittle">React Movie Search</h1>
         <SearchMovie />
      </div>
    </>
  )
}

export default App;
