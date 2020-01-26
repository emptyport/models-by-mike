import React from 'react';

function NotFound() {
    return (
        <div className="pt-8 text-center">
            <h1 className="text-4xl font-bold">Uh oh!</h1>
            <p>It looks like the page you tried to visit doesn't exist!</p>
            <p>Follow the alien to get back home.</p>
            <a href="/">
                <img className="mt-4" src="https://media.giphy.com/media/Phg5BqsiMHDJQeNURr/giphy.gif" />
            </a>
        </div>
    );
}

export default NotFound;
