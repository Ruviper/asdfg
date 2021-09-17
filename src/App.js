import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './components/Login';
import Counter from './components/Counter';

const AppContainer = styled.div`
  height: 100vh;
`

if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
  }

function App() {
  return (
    <Router>
      <Switch>
        <AppContainer>
          <Route path="/counter" exact>
            <Counter />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </AppContainer>
      </Switch>
    </Router>
  );
}

export default App;
