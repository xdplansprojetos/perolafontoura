import './App.css';
import Header from './Components/Layout/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const Home = () => {
    return <>
      <h1>Home</h1>
    </>
  }



  return (
    <>
      <Header />
      <Router>
      <div>
  
        <Switch>
         
          <Route path="/">
           <Home />
          </Route>
          <Route path="/contato">
           <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    </>
  );
}

export default App;
