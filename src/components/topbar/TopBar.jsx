import React from "react";
import "./TopBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import image from '../../assets/uche.jpeg';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Charly Admin</span>
        </div>
        <div className="topRight">
          <div className="topBarIcons">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topBarIcons">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topBarIcons">
            <Settings />
          </div>
          <img alt="" src={image} className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
