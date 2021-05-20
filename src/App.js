import {Route, Switch} from 'react-router-dom';

import AllMeetupPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritePage from './pages/Favorites';
import Layout from './components/layout/Layout'


function App() {
  // localhost:3000/
  return (
  <Layout>
    <Switch>
      <Route path='/' exact>
        <AllMeetupPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <FavoritePage />
      </Route>
    </Switch>
  </Layout>
  
  );
}

export default App;
