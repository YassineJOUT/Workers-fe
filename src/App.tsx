import React from 'react';
import LoginPage from './components/LoginPage';
import ForgottenPassord from './components/ForgottenPassword';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <ForgottenPassord />
    </div>
  );
}

export default App;
