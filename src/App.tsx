import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import store from './store';
import AsyncComponent from './components/asyncComp/AsyncComponent';

const Home = AsyncComponent(() => import('./pages/home'));
const About = AsyncComponent(() => import('./pages/about'));

const App: React.FC = () => {
  return (
    <Provider store={store({})}>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default App;
