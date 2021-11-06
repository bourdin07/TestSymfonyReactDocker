import React from "react";
import { Space, Spin } from "antd";
import "./Loading.css";

const Loading = ({ height = "auto", width = "100%", message = null }) => {
  return (
    <div className="Loading-container">
      <div>
        <Space
          size="middle"
          className="Loading-container"
          style={{ height, width }}
        >
          <Spin size="large" />
        </Space>
      </div>
      {message && <div className="Loading-message">{message}</div>}
    </div>
  );
};

export default Loading;
