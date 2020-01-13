import React from 'react';
import Registration from './pages/Registration';
import Login from './pages/Login';
import ForgottenPassord from './pages/PasswordForgotten';
import ResetPassword from './pages/ResetPassword';
import ConfirmationFormPage from './pages/confirmationFormPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router,Route } from 'react-router-dom';
import { history } from './utilities/history';
import { configureStore } from './configureStore';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ApplicationState } from './store';
import Profile from './components/Profile/profile';

const App: React.FC = () => {
  

  const store: Store<ApplicationState> = configureStore(history);
  
  return (
    <Provider store={store}>

        <div className="App">
          <Router history={history}>
    
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/register/" component={Registration} />
            <Route path="/forgotten-password" component={ForgottenPassord} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/confirmation-form" component={ConfirmationFormPage} />
            <Route path="/profile" component={Profile} />

        </Router>
            
        </div>
    </Provider>
  );
}

export default App;
