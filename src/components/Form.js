import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


const Form = () => {

    const [movieData, setMovieData] = useState([]);
    const [inputSearch, setInputSearch] = useState("");
    const [sortGoodBad, setSortGoodBad] = useState(null);

    // Requête pour récupérer les data de l'api
    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${inputSearch}&language=fr-FR`
          )
          .then((res) => setMovieData(res.data.results));
      }, [inputSearch]);


  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            id="search-input"
            placeholder="Entrez le titre d'un film"
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </form>
        <div className="btn-sort-container">
            <div className="btn-sort" id="goodToBad" onClick={() => setSortGoodBad("goodToBad")}>
                Top
            </div>
            <div className="btn-sort" id="badToGood" onClick={() => setSortGoodBad("badToGood")}>
                Flop
            </div>
        </div>
      </div>
      <div className="result">
        {movieData
        .slice(0,36)
        .sort((a, b) => { 
            if (sortGoodBad === "goodToBad"){
                return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
                return a.vote_average - b.vote_average};
            })
        .map((movie) => <Card key={movie.id}  movie={movie}/>)}
      </div>
    </div>
  );
};

export default Form;
