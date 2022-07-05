import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";
// header is done.

function Header() {
  const [inputSearch, setInputSearch] = React.useState("");
  function handleInput(event) {
    setInputSearch(event.target.value);
  }
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        {/* <YouTubeIcon /> */}
        <Link to="/">
          <img
            className="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/375px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </Link>
      </div>

      <div className="header_center">
        <input
          onChange={handleInput}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="input_button" />
        </Link>
      </div>

      <div className="header_right">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar src="https://upload.wikimedia.org/wikipedia/en/f/f0/ErenYeagerIsayama.png" />
      </div>
    </div>
  );
}

export default Header;
