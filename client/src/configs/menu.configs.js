import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutLinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";



const main = [
    {
        display: "home",
        path: "/",
        icon: <HomeOutlinedIcon/>,
        state: "home"
    },
    {
        display: "movies",
        path: "/movie",
        icon: <SlideshowOutLinedIcon/>,
        state: "movie"
    },
    {
        display: "tv series",
        path: "/tv",
        icon: <LiveTvOutlinedIcon/>,
        state: "hometv"
    },
    {
        display: "search",
        path: "/search",
        icon: <SearchOutlinedIcon/>,
        state: "search"
    }
];

const user = [
    {
        display: "favorites",
        path: "/favorites",
        icon: <FavoriteBorderOutlinedIcon/>,
        state: "favorite"
    },
    {
        display: "reviews",
        path: "/reviews",
        icon: <RateReviewOutlinedIcon/>,
        state: "reviews"
    },
    {
        display: "password update",
        path: "/password-update",
        icon: <LockClockOutlinedIcon/>,
        state: "password.update"
    }
];

const menuConfigs = {
    main,
    user
};

export default menuConfigs;