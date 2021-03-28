import './App.scss';
import AuthProvider from './providers/AuthProvider';

//ROUTES//
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './config/routes';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteFather key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

function RouteFather(route) {
  return (
    <Route path={route.path} exact={route.exact} render={props => <route.component routes={route.routes} {...props}/>}/>
  );
}

export default App;
