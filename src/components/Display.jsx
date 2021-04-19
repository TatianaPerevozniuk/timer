import React from "react";

export const Display = (props) => {
    return(
        <div className='display'>
            <section>
                <p>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}</p>
                <p><small>Minutes</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}</p>
                <p><small>Seconds</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{("0" + ((props.time / 10) % 100)).slice(-2)}</p>
                <p><small>Milliseconds</small></p>
            </section>
        </div>
    );
}