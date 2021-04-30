import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Photos from './pages/Photos';
import Verification from './pages/Verification';
import Videos from './pages/Videos';
import ThoughtsAndPrayers from './pages/ThoughtsAndPrayers';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Switch>
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/thoughtsAndPrayers" component={ThoughtsAndPrayers} />
        <Route exact path="/verify" component={Verification} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
