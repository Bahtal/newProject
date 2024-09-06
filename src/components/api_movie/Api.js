import ShowMovies from '../movies/ShowMovies'
const API_KEY = "33ce5874-bad1-4139-b857-7f2e4481149f"
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1"

Api(API_URL_POPULAR);

async function Api(url) {
	const resp = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			"X-API-KEY": API_KEY,
		}
	});
	const respData = await resp.json();
	ShowMovies(respData);
	
}

export default Api

