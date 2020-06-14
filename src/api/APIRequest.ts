import Blog from "../entity/Blog";
import axios from "axios";
import { Endpoint } from "../config/Setting";

export const fetchBlogs = async (): Promise<Blog[]> => {
  return axios
    .get(Endpoint.Blogs)
    .then((res) => {
      const blogs = res.data.blogs as Blog[];
      return blogs;
    })
    .catch((res) => {
      console.log(res);
      return [];
    });
};

export const fetchContent = async (contentURL: string): Promise<string> => {
  return axios
    .get(contentURL)
    .then((res) => {
      return res.data;
    })
    .catch((res) => {
      console.log(res);
      return "";
    });
};
