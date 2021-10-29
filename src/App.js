import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
