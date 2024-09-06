import Logo from '../Logo.jsx'
import './Header.css'

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