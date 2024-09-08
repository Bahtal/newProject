import Logo from '../Logo.jsx'
import './Header.css'

// const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

// const form = document.querySelector("form");
// const search = document.querySelector(".header__search--input");

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	const apiSearchUrl = `${API_URL_SEARCH}${search.value}`
// 	if(search.value) {
// 		Api(apiSearchUrl)
// 	}
// })

function Header() {
	return(
		<>
			<header className='header'>
						<div className="container">
							<div className="header__inner">
							<div className="header__logo">LoGo</ div>
							<div className="header__search">
								<form>
									<input className='header__search--input' type="text" placeholder='Искать здесь...'/>
									<button className='header__button' type='submit'>
											<Logo />
									</button>
								</form>
							</div>
							<div className="header__account">
									<a href='#' className="account__sign">Sign In</a>
									<a href='#' className="header__login">Login</a>
							</div>
							</div>
					</div>
					
					
			</header>
		</>
	)
}
export default Header