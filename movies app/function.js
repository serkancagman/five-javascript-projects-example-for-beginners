const apiURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPATH = "https://image.tmdb.org/t/p/w1280";
const searchAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const form = document.getElementById("form");
const input = document.getElementById("search");
const moviess = document.getElementsByClassName("movies")[0];

getMovies(apiURL);

async function getMovies(url) {
  const getApi = await fetch(url);
  const response = await getApi.json();
  console.log(response);

  showMovies(response.results);
}

function showMovies(movies) {
  moviess.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;

    const movieArea = document.createElement("div");
    movieArea.className = "movie-area";
    movieArea.innerHTML = `
            <img src="${imgPATH + poster_path}" alt="" srcset="">
            <div class="movie-info">
                <h6 class="movie-title">${title}</h6>
                <span class="movie-rating ${movieRating(
                  vote_average,
                )}">${vote_average}</span>
            </div>
            <div class="movie-overview">
            ${overview}
            </div>
        `;
    function movieRating(vote) {
      if (vote >= 8) {
        return "green";
      } else if (vote < 8) {
        return "orange";
      } else if(vote < 5){
        return "red";
      }
    }
    moviess.appendChild(movieArea);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchValue = input.value;

  if (searchValue) {
    getMovies(searchAPI + searchValue);
  }
});
