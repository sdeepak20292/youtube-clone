import React from "react";
import "./Sidebar.css";
function SidebarRow(props) {
  return (
    <div className="sidebarRow">
      {props.icon}
      <h3 className="sidebarRow_title">{props.title}</h3>
    </div>
  );
}

export default SidebarRow;
