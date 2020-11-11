import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Classifier} from './Components/classifier'
import Main from './Components/Main';
import Learn from './Components/Learn/Learn';

const App = () => {
  return(
<Router>
<Switch>
<Route path="/" exact component={Main}/>
<Route path="/classifier" exact component={Classifier}/>
<Route path="/learn" exact component={Learn}/>
</Switch>
</Router>)

}

export default App;
