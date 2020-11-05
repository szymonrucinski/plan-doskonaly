import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Classifier} from './Components/classifier'
import Main from './Components/Main';
import {ClassifierController} from './Logic/ClassifierController'
const controller = new ClassifierController();

const App = () => {
  return(
<Router>
<Switch>
<Route path="/" exact component={Main}/>
<Route path="/classifier" exact component={()=> <Classifier/>}/>
</Switch>
</Router>)

}

export default App;
