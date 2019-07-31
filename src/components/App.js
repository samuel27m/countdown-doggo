import React from 'react';

import Countdown, { zeroPad } from 'react-countdown-now';
import ConfettiGenerator from "confetti-js";

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        var confettiSettings = { "target": "partyCanvas", "max": "500", "size": "1", "animate": true, "props": ["circle", "square", "triangle", "line"], "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], "clock": "150", "rotate": false, "width": "1920", "height": "947" };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        return (
            <div>
                <h1 className="cover-heading">
                    <span role="img" aria-label="emoji">🎉</span>
                    Eevee is home!
                    <span role="img" aria-label="emoji">🎉</span>
                </h1>
                <h2 className="font-weight-bold">{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</h2>
                <br />
                <img alt="Big Doggo" className="img-fluid" src="assets/doggo.jpg" />
                <br />
                <br />
                <span role="img" aria-label="emoji">😍</span>
            </div>
        );
    } else {
        // Render a countdown
        return (
            <div>
                <h1 className="cover-heading">
                    <span role="img" aria-label="emoji">🎉</span>
                    <span className="cover-heading">Eevee is coming home</span>
                    <span role="img" aria-label="emoji">🎉</span></h1>

                <h2 className="font-weight-bold">{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</h2>
            </div>
        );
    }
};

export default function App() {
    const date = new Date('2019/07/13 14:00');

    return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <canvas id="partyCanvas"></canvas>
            <header className="masthead mb-auto">
                <div className="inner">
                    <h3 className="text-center">Doggo countdown <span role="img" aria-label="emoji">😍</span></h3>
                </div>
            </header>

            <main role="main" className="inner cover">
                <Countdown
                    date={date}
                    renderer={renderer}
                    zeroPadTime={3}
                />
                <br></br>
                <p className="lead">And we love her, that's why we have a timer.</p>
            </main>

            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p>Made with <span role="img" aria-label="emoji">❤</span></p>
                </div>
            </footer>
        </div>

    );
}
