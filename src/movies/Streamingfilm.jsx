import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const Streamingfilm = (props) => {
console.log(props)  ; 
const {name} =useParams();
    const navigate =useNavigate();
    return (
        <>
        
        <button onClick={()=>{ navigate('/home')}}>Go Home</button>
        <hr/>

        <iframe width="1280" height="720" src={name} 
        title="1-Introduction of React.js|#Reactjs" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        
        </>
    );
};

export default Streamingfilm;
