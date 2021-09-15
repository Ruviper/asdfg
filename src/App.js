import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './components/Login';
import Accounter from './components/Accounter';
import Register from './components/Register';

const AppContainer = styled.div`
  height: 100vh;
`

function App() {
  return (
    <Router>
      <Switch>
        <AppContainer>
          <Route path="/login-register" exact>
            <Login />
          </Route>
          <Route path="/accounter" exact>
            <Accounter />
          </Route>
          <Route path="/" exact>
            <Register />
          </Route>
        </AppContainer>
      </Switch>
    </Router>
  );
}

export default App;
