import React from 'react';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ForgottenPassord from './components/ForgottenPassword';
import ResetPassword from './components/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router,Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const App: React.FC = () => {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
 
         <Route path="/" exact component={LoginPage} />
         <Route path="/login" exact component={LoginPage} />
         <Route path="/register/" component={RegistrationPage} />
         <Route path="/forgotten-password" component={ForgottenPassord} />
         <Route path="/reset-password" component={ResetPassword} />

     </Router>
        
    </div>
  );
}

export default App;
