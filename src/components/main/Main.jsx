import './Main.css'

function Main() {
	return(
		<>
			<div className="main">
				<div className="container">
				<div className="film-list">
					<div className="film--image">
					</div>
				<div className="film-title">
					<h1 className='film--title__name'>Name Film</h1>
					<p className='film--title__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quos autem ipsum officia assumenda optio eos quae ducimus sapiente. Incidunt nesciunt magni molestiae. Nam temporibus nihil, quidem tempora iure est perspiciatis, sunt, delectus dignissimos alias recusandae saepe necessitatibus quod? Voluptates aut commodi ullam ea soluta quam quisquam aliquam, dolor eligendi rem quia accusamus nemo illo perspiciatis ut vel, dignissimos exercitationem!</p>
					<ul className='list--title'>
						<a className='list--title__genre' href="#">Drama</a>
						<a className='list--title__genre' href="#">Treiler</a>
						<a className='list--title__genre' href="#">Comedy</a>
					</ul>
					<div className="film--watch">
						<button className='watch__this'>Смотреть фильм</button>
					</div>
				</div>
			</div>
				</div>
			</div>
		</>
	)
}

export default Main