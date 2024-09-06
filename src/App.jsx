// import { Router } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer'
import Header from "./components/header/Header"
// import Main from "./components/main/Main"
import Top from './components/Top/Top'


function App() {
  

  return (
    <>
      <div className="wrapper">
        <Header />
        {/* <Main />   */}
        <Top />
        <Footer />
      </div>

      {/* <Router>
        <Switch>
          <Route exact path="./components/Top/Top.jsx" component={Top} />
        </Switch>
      </Router> */}

    </>
  )
}

export default App
