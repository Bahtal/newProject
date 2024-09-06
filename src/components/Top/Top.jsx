import Api from '../api_movie/Api'
import './Top.css'


function Top() {

	return(
		<>
			<div className="top">
				<div className="container">
						<div className="movies">
								<script src={Api}></script>
						</div>
				</div>
			</div>
			
		</>
	)
}

export default Top