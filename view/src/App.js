import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Notes from './pages/Notes';
import Photos from './pages/Photos';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/photos" component={Photos} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
