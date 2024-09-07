

function ShowMovies(data) {
	const moviesEl = document.querySelector(".movies");
	

	data.items.forEach((movie) => {
		const Rating = function() {
			if(movie.ratingImdb == null) {
				return 0;
			} else {
				return movie.ratingImdb;
			}
		};
		const movieEl = document.createElement("div")
		moviesEl.classList.add("movie")
		movieEl.innerHTML = `
			<div class="movie__background">
				<div class="top--image">
						<img class="movie__img" src="${movie.posterUrlPreview}" alt="${movie.nameOriginal}"/>
						<div class="movie__average">${Rating()}</div>
						</div>
						<div class="movie__info">
						<div class="movie__title">${movie.nameRu}</div>
						<div class="movie__category">${movie.genres.map((genre) => `${genre.genre}`)}</div>
				</div>
			</div>
		`;
		moviesEl.appendChild(movieEl);
	});
}

export default ShowMovies