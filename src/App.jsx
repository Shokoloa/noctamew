import React, { useState } from "react";
import Confetti from "react-confetti";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import { Background } from "./components/Background";
import { ScrollToTop } from "./components/ScrollToTop";

// CSS
import "./assets/styles/main.css";
import "./assets/styles/medias.css";

export const App = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [position, setPosition] = useState({ position: "unset", top: "50%", left: "50%" });

  const handleDeny = () => {
    const randomTop = Math.random() * (window.innerHeight - 50);
    const randomLeft = Math.random() * (window.innerWidth - 100);
    setPosition({ position: "absolute", top: `${randomTop}px`, left: `${randomLeft}px` });
  };

  return (
    <Router>
      <div className="text" style={{ transitionDuration: '1s' }}>
        <Background />
        {!isAccepted ? (
          <main>
            <h1 className="underlinetext">Veux-tu être ma valentine ?</h1>
            <img src="https://tenor.com/view/please-gif-6208927578341129473.gif" draggable={false} alt="Gif" />
            <section className="buttons">
              <button className="accept" onClick={() => setIsAccepted(true)}>OUIIIIII</button>
              <button className="deny" onClick={handleDeny} style={{ position: position.position, top: position.top, left: position.left }}>Non.</button>
            </section>
          </main>
        ) : (
          <main>
            <h1 style={{ marginBottom: '-10vh' }}>YAAYYYYYYYY</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 831 509">
              <path className="heart heart--is-small" d="M444.44,386.14c1.63-56.83,22.45-110.89,42.05-120.77,19.6-9.88,44.18.53,40.96,36.43,28.54-14.75,68.81-13.58,72.18,16.2,2.82,24.86-27.91,34.7-62.9,37.01-34.98,2.31-67.64,12.11-92.3,31.13Z" />
              <path className="heart heart--is-large" d="M441,401.62c-10.03-35.56-29.5-70.5-43-113s-8.18-96.55,20-98c18.22-.94,27.5,15.4,30,42,51.67-71.77,131.93-55.64,145.5-33.5,22.26,36.34-23.06,66.74-59.5,85.5-54.49,28.06-75.94,72.67-93,117Z" />
              <path className="line" d="M53.5,319.12c104.85-75.98,214.82-13.62,266,17,49.53,29.64,72.22,56.76,92,50,30.52-10.43-48.19-89.59-55-141-4.55-34.38,12.5-57.5,41-54s34.96,28.4,32,63c13.71-42.57,60.57-69.96,88-68,33.48,2.39,46.34,37.12,0,68-59.6,39.72-81.13,107.21-80,126-23.44-57.19-32.08-99.35-6.5-114.5,32.51-19.25,63.84,2.79,55,41,22.64-35.77,51.42-38.85,65-25,18.95,19.33-2.51,41.08-33,53-26.82,10.49-46.45,19.63-59,34,48.29-70.94,94.69-86.65,172-93,65.87-5.41,112.71,26.72,187,17" />
            </svg>
            <Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.025} />
          </main>
        )}
        <footer>Made by Sakuraishi</footer>
        <ScrollToTop />
      </div >
    </Router >
  )
}