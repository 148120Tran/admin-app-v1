import React from "react";
import { useNavigate } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <div className="container404">
      <h1 className="header404">404 - Not Found</h1>
      <p className="text404">
        The page you are looking for might not be there!
      </p>
      <button className="button404" onClick={backToHome}>
        {" "}
        Back to home{" "}
      </button>
    </div>
  );
};

export default NotFound;
