import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    return <Typewriter
        options={{
            strings: ['Web-разработчик', 'Fullstack-developer', 'JavaScript-программист'],
            autoStart: true,
            loop: true,
        }}
    />
};

export default TypeWriter;