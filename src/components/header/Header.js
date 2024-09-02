import './Header.css'

function Header() {
	return(
		<>
			<header className='header'>
					<div className="header__logo">LoGo</div>
					<div className="header__search">
						<form>
							<input type="text" placeholder='Искать здесь...'/>
							<button type='submit'>O</button>
						</form>
					</div>
					<div className="header__login"></div>
			</header>
		</>
	)
}

export default Header