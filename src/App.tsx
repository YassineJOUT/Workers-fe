import React from 'react';
import Registration from './pages/Registration';
import Login from './pages/Login';
import ForgottenPassord from './components/ForgottenPassword';
import ResetPassword from './components/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router,Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { configureStore } from './configureStore';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ApplicationState } from './store';

const App: React.FC = () => {
  const history = createBrowserHistory();

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

        </Router>
            
        </div>
    </Provider>
  );
}

export default App;
