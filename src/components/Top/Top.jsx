// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Api from '../api_movie/Api'
// import Main from '../main/Main'
import './Top.css'


function Top() {

	return(
		<>
			<div className="top">
				<div className="container">
						<div className="movies">
								<script src={Api}>
									
								</script>
								{/* <Main /> */}

						</div>
				</div>
			</div>
			
			{/* <Router>
        <Routes>
          <Route exact path="./../main/Main.jsx" component={Main} />
        </Routes>
      </Router> */}
		</>
	)
}

export default Top