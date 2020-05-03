import React from 'react';
import Blog from '../../../../entity/Blog';
import { Link } from 'react-router-dom';
import { BlogRoute } from 'setting/Route';

interface BlogListProps {
  blogs: Blog[];
}

const BlogListComponent: React.SFC<BlogListProps> = (props) => (
  <ul>
    {props.blogs.map((blog) => (
      <li key={blog.date}>
        <Link to={BlogRoute.MakeBlogContent(blog.id)}>
          {blog.title} {blog.date}
        </Link>
      </li>
    ))}
  </ul>
);

export default BlogListComponent;
