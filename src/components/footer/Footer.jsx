import '../footer/Footer.css'

function Footer() {
	return(
		<>
			<div className="footer">
				<div className="container">
					<div className="footer__inner">
					<div className="footer--name">2024, MovieFilm</div>
				<div className="footer__link">
					<a href="#" className="all__films">Все фильмы</a>
					<a href="#" className="footer__filtres">Фильтры</a>
					<a href="#" className="my__github">GitHub</a>
				</div>
				<div className="project__by">Бахталов Артем</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer