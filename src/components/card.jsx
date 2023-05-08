import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

export function LeftCard({ title, p , img}) {
  const paragraphs = [];
  for(let par of p){
    paragraphs.push(<p key={par}>{par}</p>)
  }

  return (
    <div className="card Left">
      <div className="descContainer">
        <h2>{title}</h2>
        {paragraphs}
      </div>
      <img src={img} alt="Gif"/>
    </div>
  );
}

export function RightCard({ title, p , img}) {
  const paragraphs = [];
  for(let par of p){
    paragraphs.push(<p key={par}>{par}</p>)
  }

  return (
    <div className="card Right">
      <img src={img} alt="Gif"/>
      <div className="descContainer">
        <h2>{title}</h2>
        {paragraphs}
      </div>
    </div>
  );
}
