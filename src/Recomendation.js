import React from "react";
import "./Recomendation.css";
import Video from "./Video";

function Recomendation() {
  return (
    <div className="recomendation">
      <h2>Recommended</h2>
      <div className="recomendation_vides">
        <Video
          title="Put Headphones and get lost in your world
          | Indian Lofi songs"
          views="2.3M"
          timestamp="11 days ago"
          channel="Rededit videos"
          channelImage="https://upload.wikimedia.org/wikipedia/en/f/f0/ErenYeagerIsayama.png"
          image="https://static.videezy.com/system/resources/thumbnails/000/004/944/small/magical-tree-4k-living-background.jpg"
        />
        <Video
          title="Complete RoadMap to Andriod Development"
          views="100K"
          timestamp="1 year ago"
          channel="Code with Deepak"
          channelImage="https://img.icons8.com/plasticine/2x/android-os.png"
          image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC2X0sIY_AGvgi6jD8Eh_u8rOdZXKA6PP18tnJdA6jQxR-n4bF6vsIVI2D4FTOnHAlqSY5hJShEjHcRQr7P8QM-YyP3sM3Su_KxFRdBXhg8WUIoXr74luWfFvtgYGJHWdDe_gPnwpCsLR4YhE0U88QcSqrYs3LLjp7dGqQul_pRoerJr__-mD8lUPA/s1600/Android-IO22AndroidDevRecap_Social.png"
        />
      </div>
    </div>
  );
}

export default Recomendation;
