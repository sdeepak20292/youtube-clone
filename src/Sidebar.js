import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
//icons for sidebar row
import HomeIcon from "@material-ui/icons/Home";
import WhatShotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
// import OndemandVideoIcon from " @material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { OndemandVideo } from "@material-ui/icons";
import WatchLater from "@material-ui/icons/WatchLater";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        icon={<HomeIcon className="sidebarRow_title sidebarRow_icon" />}
        title="Home"
      />
      <SidebarRow
        icon={<WhatShotIcon className="sidebarRow_title sidebarRow_icon" />}
        title="Trending"
      />
      <SidebarRow
        icon={
          <SubscriptionsIcon className="sidebarRow_title sidebarRow_icon" />
        }
        title="Subscription"
      />
      <hr />
      <SidebarRow
        icon={<VideoLibraryIcon className="sidebarRow_title sidebarRow_icon" />}
        title="Library"
      />

      <SidebarRow
        icon={<HistoryIcon className="sidebarRow_title sidebarRow_icon" />}
        title="History"
      />

      <SidebarRow
        icon={<OndemandVideo className="sidebarRow_title sidebarRow_icon" />}
        title="Your Videos"
      />
      <SidebarRow
        icon={<WatchLaterIcon className="sidebarRow_title sidebarRow_icon" />}
        title="Watch Later"
      />
      <SidebarRow
        icon={
          <ThumbUpAltOutlinedIcon className="sidebarRow_title sidebarRow_icon" />
        }
        title="Liked videos"
      />
      <SidebarRow
        icon={
          <ExpandMoreOutlinedIcon className="sidebarRow_title sidebarRow_icon" />
        }
        title="Show more"
      />
      <SidebarRow />
    </div>
  );
}

export default Sidebar;
