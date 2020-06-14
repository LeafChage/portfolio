export module Page {
  export const Profile: string = "profile";
}

export module URL {
  export const Home: string = "/";
  export const Profile: string = "/" + Page.Profile;
}

