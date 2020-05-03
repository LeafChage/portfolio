import React from 'react';
import * as ReactRouter from 'react-router-dom';
import Profile from '../components/contents/profile/Profile';
import Blog from './contents/blog/BlogRootComponent';
import Error404 from '../components/contents/error/404';
import { Route } from 'setting/Route';

class Main extends ReactRouter.BrowserRouter {
  render() {
    return (
      <ReactRouter.Switch>
        <ReactRouter.Route path={Route.Profile} component={Profile} />
        <ReactRouter.Route path={Route.Blog} component={Blog} />
        <ReactRouter.Route path={Route.Home} component={Profile} />
        <ReactRouter.Route component={Error404} />
      </ReactRouter.Switch>
    );
  }
}

export default Main;
