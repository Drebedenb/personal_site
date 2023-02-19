import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    return <Typewriter
        options={{
            strings: ['Web-developer', 'Designer', 'Student'],
            autoStart: true,
            loop: true,
        }}
    />
};

export default TypeWriter;