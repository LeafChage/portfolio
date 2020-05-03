import axios from "axios";
import Endpoint from "setting/Endpoint";
import Blog from "../entity/Blog";

class APIRequest {
    public static fetchBlogs = async (): Promise<Blog[]> => {
        return axios.get(Endpoint.BlogInformation)
            .then(res => {
                const blogs = res.data.blogs as Blog[];
                return blogs;
            }).catch(res => {
                console.log(res);
                return [];
            })
    }

    public static fetchContent = async (contentURL: string): Promise<string> => {
        return axios.get(contentURL)
            .then(res => {
                return res.data;
            }).catch(res => {
                console.log(res);
                return "";
            })
    }
}

export default APIRequest;

