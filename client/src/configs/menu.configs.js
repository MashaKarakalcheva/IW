import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const main = [
  {
    display: "🏠 home",
    path: "/",

    state: "home"
  },
  {
    display: "🎬 movies",
    path: "/movie",
   
    state: "movie"
  },
  {
    display: "📺 tv series",
    path: "/tv",

    state: "tv"
  },
  {
    display: "🔍 search",
    path: "/search",
   
    state: "search"
  }
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: "💜",
    state: "favorite"
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: "📃",
    state: "reviews"
  },
  {
    display: "password update",
    path: "/password-update",
    icon: "🔐",
    state: "password.update"
  }
];

const menuConfigs = { main, user };

export default menuConfigs;