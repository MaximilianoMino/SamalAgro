import React from "react";
import "./info.css";
import InfoEs from "./InfoEs";
import InfoEn from "./InfoEn";
const InfoContainer = ({ english }) => {
  return <div> {english ? <InfoEn /> : <InfoEs />} </div>;
};

export default InfoContainer;
