import React from "react";
import { useNavigate } from "react-router-dom";
 
 
 const Moviecard = (props) => {
  const navigate =useNavigate();
     return (
    <>
      <div>
        <h1>title : {props.title}</h1>
        <p> description : {props.description}</p>
        <p> posterurl : {props.posterurl}</p>
        <p> rating : {props.rating}</p>
       <button onClick={()=>{ navigate('/Streaming/'+props.Lien)}}>Live Streaming</button>
     
      </div>
    </>
  );
};

export default Moviecard;