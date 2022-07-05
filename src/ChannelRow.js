import React from "react";
import "./searchPage.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
function ChannelRow({ image, channel, subs, noOfVideos, desc, verified }) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" alt={channel} src={image} />
      <div className="channelRow_text">
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>

        <p>
          {subs} . {noOfVideos}
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
