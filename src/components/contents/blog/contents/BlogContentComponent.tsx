import React from 'react';
import Blog from '../../../../entity/Blog';
import APIRequest from '../../../../util/APIRequest';
import SyntaxHighlighter from './SyntaxHighlightComponent';
import RParse from 'remark-parse';
import Unified from 'unified';
const R2R = require('remark-react');

interface BlogContentState {
  content: string;
}

interface BlogContentProps {
  blog?: Blog;
}

class BlogContentComponent extends React.Component<
  BlogContentProps,
  BlogContentState
> {
  constructor(props: BlogContentProps, state: BlogContentState) {
    super(props, state);
    this.state = {
      content: '',
    };
  }

  private fetchStateCancel: boolean = false;
  private async fetchContent() {
    if (this.props.blog) {
      const content = await APIRequest.fetchContent(this.props.blog.url);
      if (!this.fetchStateCancel) {
        this.setState({ content: content });
      }
    }
  }

  private fetchContentCancel() {
    this.fetchStateCancel = true;
  }

  renderContent() {
    return (
      <div id="preview">
        {
          Unified()
            .use(RParse)
            .use(R2R, { remarkReactComponents: { code: SyntaxHighlighter } })
            .processSync(this.state.content).contents
        }
      </div>
    );
  }

  // React Lifecycle
  componentDidUpdate() {
    this.fetchContent();
  }

  componentDidMount() {
    this.fetchContent();
  }

  componentWillUnmount() {
    this.fetchContentCancel();
  }

  render() {
    return this.renderContent();
  }
}

export default BlogContentComponent;
