import React, {useState, useEffect} from "react";
import {Display} from "./Display";

export const Timer = (props) => {
    const [time, setTime] = useState(props.timeStart);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime>0?prevTime - 10:0);
            }, 10);
        } else if (!timerOn || time <= 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);


    return (
        <section className="timer-container">
            <section className="timer">
                <div>
                    <h2>Countdown timer</h2>
                </div>

                <Display time = {time}/>

                <div className="buttons">
                    {!timerOn && time === props.timeStart && (
                        <button onClick={() => setTimerOn(true)}>Start</button>
                    )}
                    {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
                    {!timerOn && time < props.timeStart && (
                        <button onClick={() => setTime(props.timeStart)}>Reset</button>
                    )}
                    {!timerOn && time < props.timeStart && (
                        <button onClick={() => setTimerOn(true)}>Resume</button>
                    )}
                </div>
            </section>
        </section>
    );
}

