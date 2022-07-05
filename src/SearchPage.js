import React from "react";
import "./searchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="serchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        className="cRow"
        image=""
        channel="Deepawesome"
        verified
        subs="1M"
        noOfVideos="100 videos"
        desc="This is vloging channel create by me feel free to watch"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="550K"
        desc="do you want to be like me?"
        timestamp="50 secs ago"
        channel="deepak singh"
        image="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
        title="is this the power of god"
      />
      <VideoRow
        views="1.4M"
        subs="550K"
        desc="do you want to be like me?"
        timestamp="50 secs ago"
        channel="deepak singh"
        image="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
        title="is this the power of god"
      />
      <VideoRow
        views="1.4M"
        subs="550K"
        desc="do you want to be like me?"
        timestamp="50 secs ago"
        channel="deepak singh"
        image="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
        title="is this the power of god"
      />
      <VideoRow
        views="1.4M"
        subs="550K"
        desc="do you want to be like me?"
        timestamp="50 secs ago"
        channel="deepak singh"
        image="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
        title="is this the power of god"
      />
      <VideoRow
        views="1.4M"
        subs="550K"
        desc="do you want to be like me?"
        timestamp="50 secs ago"
        channel="deepak singh"
        image="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
        title="is this the power of god"
      />
      <VideoRow
        views="1.4M"
        subs="550K"
        desc="do you want to be like me?"
        timestamp="50 secs ago"
        channel="deepak singh"
        image="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
        title="is this the power of god"
      />
      <VideoRow
        views="1.4M"
        subs="550K"
        desc="do you want to be like me?"
        timestamp="50 secs ago"
        channel="deepak singh"
        image="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
        title="is this the power of god"
      />
      <VideoRow
        views="1.4M"
        subs="550K"
        desc="do you want to be like me?"
        timestamp="50 secs ago"
        channel="deepak singh"
        image="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
        title="is this the power of god"
      />

      {/* <div>
      </div> */}
    </div>
  );
}

export default SearchPage;
