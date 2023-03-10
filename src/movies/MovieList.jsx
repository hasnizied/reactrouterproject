import React, { useState } from "react";
import Moviecard from "./MovieCard";

const Movielist = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [posterurl, setposterurl] = useState("");
  const [rating, setrating] = useState("");
  const [ratingfilter, setratingfilter] = useState(0);
  const [list, setlist] = useState([]);
  const [filtered, setfilterd] = useState([]);
  const [Lien, setLien] = useState([""]);

  const ajouti = (e) => {
    e.preventDefault();
    //list.push({ title, description, posterurl, rating });
    setlist([...list, { title, description, posterurl, rating,Lien  }]);
    setfilterd(list);
  };

  const filterli = (e) => {
    setfilterd(list.filter((el) => el.title.includes(e.target.value)));
  };

  const filter2 = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setfilterd(list.filter((el) => el.rating >= ratingfilter));
  };

  return (
    <>
      <form onSubmit={ajouti}>
        <input onChange={(e) => settitle(e.target.value)} />
        <input onChange={(e) => setdescription(e.target.value)} />
        <input onChange={(e) => setposterurl(e.target.value)} />
        <input onChange={(e) => setLien(e.target.value)} />
        
        <input type="number" onChange={(e) => setrating(e.target.value)} />
                <input type="submit" />
      </form>

      <input onChange={filterli} />

      <form onSubmit={filter2}>
        <input
          type="number"
          onChange={(e) => setratingfilter(e.target.value)}
        />
        <input type="submit" />
      </form>

      <div>
        {filtered.map((el, index) => (
          <Moviecard
            title={el.title}
            description={el.description}
            posterurl={el.posterurl}
            rating={el.rating}
            Lien={el.Lien}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Movielist;
