import React from 'react';
import { Route } from 'react-router';
import Home from './Pages/Home';
import MostRecent from './Pages/MostRecent';
import Admin from './Pages/Admin';
import Layout from './Layout';
import ViewBlog from './Components/ViewBlog';

const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/mostrecent' component={MostRecent} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/viewblog/:postId' component={ViewBlog} />

    </Layout>
  )
}
export default App;