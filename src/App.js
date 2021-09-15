import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './components/Login';
import Accounter from './components/Accounter';

const AppContainer = styled.div`
  height: 100vh;
`

function App() {
  return (
    <Router>
      <Switch>
        <AppContainer>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/accounter" exact>
            <Accounter />
          </Route>
        </AppContainer>
      </Switch>
    </Router>
  );
}

export default App;
