import './App.css';
import Blog from './components/Blog'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ='/'><Blog/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
