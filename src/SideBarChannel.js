import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice";
import "./SideBarChannel.css";
// import Truncate from "react-truncate";

function truncate(str) {
  return str?.length > 25 ? str?.substring(0, 25) + "..." : str;
}

function SideBarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel channel__name"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <div>
          <span className="sidebarChannel__hash">#</span>
          <span style={{ textOverflow: "ellipsis" }}>
            {truncate(channelName)}
          </span>
        </div>

        {/* {channelName} */}
      </h4>
    </div>
  );
}

export default SideBarChannel;
