import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path='posts/new' component={PostsNew} />
    <Route path='posts/:id' component={PostsShow} />
  </Route>
);


// try using onEnter instead of componentWillMount
//import fetchPosts from ''
//so you could create a store in reducers, then export the store
//then call store.dispatch(fetchPosts)
//have access to the store, or remember to bind fetchPosts
//onEnter={() => fetchPosts()}

//once you've done that turn it into a functional components
