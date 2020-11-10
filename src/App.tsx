import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Classifier} from './Components/classifier'
import Main from './Components/Main';
import Learn from './Components/Learn/Learn';
import LearnExtremeLongSot from './Components/Learn/LearnExtremeLongShot'

const App = () => {
  return(
<Router>
<Switch>
<Route path="/" exact component={Main}/>
<Route path="/classifier" exact component={Classifier}/>
<Route path="/learn-intro" exact component={Learn}/>
<Route path="/learn-longshot" exact component={Learn}/>
<Route path="/learn-fullshot" exact component={Learn}/>
<Route path="/learn-extremelongshot" exact component={LearnExtremeLongSot}/>
</Switch>
</Router>)

}

export default App;
