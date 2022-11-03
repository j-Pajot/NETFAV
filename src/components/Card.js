import React from "react";

const Card = ({ movie }) => {
  // Changement de date en vf
  const dateFormater = (date) => {
    // Mettre date en fr(langue) FR(zone géographique)
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  // Récup les genres de films en français selon l'id dans un nouveau tableau
  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantaisie`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science Fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  // Ajouter les coups de coeurs dans le local storage
  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    // s'assure qu'il n'y a pas de double
    if (!storedData.includes(movie.id.toString())) {
      //on ajoute un autre film
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
  };

  // Supprimer les coups de coeurs du local storage
  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");
    let newData = storedData.filter((id) => id != movie.id);

    window.localStorage.movies = newData;
  };

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={"Affiche " + movie.title}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Sortie le {dateFormater(movie.release_date)}</h5>
      ) : (
        "Oups! Apparement il n'y a pas de date... 😢"
      )}
      <h4>{movie.vote_average.toFixed(1)}/10 ⭐</h4>
      <ul>
        {movie.genre_ids
          ? genreFinder()
          : movie.genres.map((genre) => <li key={genre}>{genre.name}</li>)}
      </ul>
      <h4>Synopsis</h4>
      <p>
        {movie.overview
          ? movie.overview
          : "Oups! Apparement il n'y a pas de synopsis... 😢"}
      </p>
      {movie.genre_ids ? (
        <div className="btn" onClick={() => addStorage()}>
          Ajouter aux favoris
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}
        >
          Supprimer des favoris
        </div>
      )}
    </div>
  );
};

export default Card;
