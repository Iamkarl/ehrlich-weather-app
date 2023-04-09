import React from "react";
import loading from "../assets/icons/loading.svg";
import '../styles/loading.css'

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;