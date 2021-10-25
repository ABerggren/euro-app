import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MyInsurances } from './components/myinsurances';
import { CustomerAccessPage } from './containers/customerAccessPage';
import { HomePage } from './containers/HomePage';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/customer/access/:action" exact component={CustomerAccessPage} />
          <Route path="/customer/mypages" exact component={MyInsurances} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
