import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['C', 'h', 'a', 'i', 't', 'a', 'n', 'y', 'a']

    useEffect(() => {
      const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 1000);
  
      return () => {
          clearTimeout(timeoutId);
      };
  }, []);
    

  return (
    <div className="container home-page">
      <div className="background-image"></div>
      <div className="text-zone">
        <h1>
            <span className={letterClass}></span>
          Hi,
          <br /> I am <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15}/>
        </h1>
        <br />
        <h3>Frontend developer / Java developer / ML developer</h3>
        <br />
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
