import React from "react";
import "./searchPage.css";
function VideoRow({ views, subs, desc, timestamp, title, channel, image }) {
  return (
    <div className="videoRow">
      <img src={image} alt={title} />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {channel} .{" "}
          <span className="videoRow_sub">
            {" "}
            <span className="videoRow_subs">{subs}</span>
            Subscribers
          </span>
          {views} views . {timestamp}{" "}
        </p>
        <p className="videoRow_desc">{desc}</p>
      </div>
    </div>
  );
}

export default VideoRow;
