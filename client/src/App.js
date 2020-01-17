import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'

const App = () => {
  return (
    <Router>
      <Link to='/'>Search</Link>
      <Link to='/saved'>Search</Link>

      <Switch>
        <Route exact path='/'>
          <Search />
        </Route>
        <Route path='/saved'>
          <Saved />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
