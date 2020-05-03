import React from 'react';
import BlogContentComponent from './contents/BlogContentComponent';
import BlogListComponent from './contents/BlogListComponent';
import Blog from '../../../entity/Blog';
import APIRequest from '../../../util/APIRequest';
import * as ReactRouter from 'react-router-dom';
import { match } from 'react-router-dom';
import './BlogRootComponent.scss';
import { BlogRoute } from 'setting/Route';

interface BlogState {
  blogs: Blog[];
}

interface BlogProps {
  match: match<{ id: string }>;
}

class BlogRootComponent extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps, state: BlogState) {
    super(props, state);
    this.state = { blogs: [] };
  }

  private async fetchBlogs() {
    const blogs = await APIRequest.fetchBlogs();
    this.setState({ blogs: blogs });
  }

  componentDidMount() {
    this.fetchBlogs();
  }

  render() {
    return (
      <main id="blog">
        <ReactRouter.Link to={BlogRoute.BlogList}>Blogs</ReactRouter.Link>
        <ReactRouter.Switch>
          <ReactRouter.Route
            exact
            path={BlogRoute.BlogList}
            render={() => <BlogListComponent blogs={this.state.blogs} />}
          />
          <ReactRouter.Route
            exact
            path={BlogRoute.BlogContent}
            render={({ match }) => {
              return (
                <BlogContentComponent
                  blog={this.state.blogs[parseInt(match.params.id)]}
                />
              );
            }}
          />
        </ReactRouter.Switch>
      </main>
    );
  }
}

export default BlogRootComponent;
