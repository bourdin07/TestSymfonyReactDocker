import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="PageNotFound-container d-flex align-items-center flex-column justify-content-center">
      <FiAlertTriangle />
      <div>Page introuvable</div>
    </div>
  );
};

export default PageNotFound;
