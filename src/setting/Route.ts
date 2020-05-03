export class Route {
    public static readonly Home = "/";
    public static readonly Profile = "/profile";
    public static readonly Blog = "/blog";
}

export class BlogRoute {
    public static readonly BlogList = Route.Blog + "/";
    public static readonly BlogContent = Route.Blog + "/:id";
    public static MakeBlogContent = (id: number) => BlogRoute.BlogContent.replace(":id", id.toString());
}

export default Route;