import logo from './logo.svg';
import './App.css';
import uparrow from './uparrow.png';
import downarrow from './downarrow.png';
import clock from './clock.png';
import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [started, setStarted] = useState(false);
  const [showBoom, setShowBoom] = useState(false);
  const [paused, setPaused] = useState(false);
  const { hours, minutes, seconds } = time;
  let interval;
  useEffect(() => {
    if (started) {
      interval = setInterval(() => {
        //console.log("test");
        if (seconds > 0) {
          setTime({
            ...time,
            seconds: seconds - 1,
          });
        }
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(interval);
              setStarted(false);
              setShowBoom(true);
            } else {
              setTime({
                ...time,
                hours: hours - 1,
                minutes: 59,
                seconds: 59,
              });
            }
          } else {
            setTime({
              ...time,
              minutes: minutes - 1,
              seconds: 59,
            });
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time, started]);

  const startCountdown = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      return;
    }

    setStarted(true);
    setPaused(false);
  };

  const resetCountodown = () => {
    setStarted(false);
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  const handleChange = (type, waktu) => {
    setShowBoom(false);
    if (type === "increment" && waktu === "h") {
      if (hours + 1 > 24) {
        return;
      }
      setTime({ ...time, hours: hours + 1 });
    }

    if (type === "decrement" && waktu === "h") {
      if (hours - 1 < 0) {
        return;
      }
      setTime({ ...time, hours: hours - 1 });
    }

    if (type === "increment" && waktu === "m") {
      if (minutes + 1 > 59) {
        return;
      }
      setTime({ ...time, minutes: minutes + 1 });
    }

    if (type === "decrement" && waktu === "m") {
      if (minutes - 1 < 0) {
        return;
      }
      setTime({ ...time, minutes: minutes - 1 });
    }

    if (type === "increment" && waktu === "s") {
      if (seconds + 1 > 59) {
        return;
      }
      setTime({ ...time, seconds: seconds + 1 });
    }

    if (type === "decrement" && waktu === "s") {
      if (seconds - 1 < 0) {
        return;
      }
      setTime({ ...time, seconds: seconds - 1 });
    }
  };

  const pauseCountdown = () => {
    clearInterval(interval);
    setPaused(true);
    if (started) {
      setStarted(false);
    } else {
      setStarted(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src = {clock} className="clock"></img>
        <p className ="Title">
          SIMPLE COUNTDOWN 
        </p>
        <div className ="time">
        <div style={{ textAlign: "center" }}>
        <div>{showBoom && "BOOMMM!!!"}</div>
        <div>{started && !showBoom && "Remaining:"}</div>
        <div>
          {hours} : {minutes}: {seconds}
        </div>
        </div>
        </div>
        
        <img src = {uparrow} className="arrow1" onClick={(e) => handleChange("increment", "h")}></img>
        <img src = {downarrow} className="arrow6"onClick={(e) => handleChange("decrement", "h")}></img> 
        <img src = {uparrow} className="arrow3"onClick={(e) => handleChange("increment", "m")}></img>
        <img src = {downarrow} className="arrow2" onClick={(e) => handleChange("decrement", "m")}></img>
        <img src = {uparrow} className="arrow5" onClick={(e) => handleChange("increment", "s")}></img>
        <img src = {downarrow} className="arrow4" onClick={(e) => handleChange("decrement", "s")}></img>
        <div>
        <button onClick={startCountdown}>
            {paused ? "Resume" : "Start"}
          </button>
          <button onClick={resetCountodown}> Reset</button>
          {started && <button onClick={pauseCountdown}> Pause</button>}
       
        </div>
      
      <p clasName ="nama">Vincent - 37401 - Universitas Multimedia Nusantara</p>
      </header>
    </div>
  );
}


export default App;
