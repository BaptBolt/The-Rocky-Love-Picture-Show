import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Acceuil/Home';
import Form from './Components/Form/Form';
import Match from './Components/Match/MatchList';
import MatchList from './Components/Match/MatchList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path ="/form" component ={Form}/>
          <Route exact path ="/" component ={Home}/>
          <Route path ="/match" component ={Match}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
