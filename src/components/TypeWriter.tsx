import React, {useEffect, useState} from 'react';

const TypeWriter = ({content = "", speed = 1000}) => {
    const [displayedContent, setDisplayedContent] = useState("");
    const [index, setIndex] = useState(0);
    const [speedOfChange, setSpeedOfChange] = useState(speed);

    useEffect(() => {
        setInterval(() => {
            if (index >= content.length - 1) {
                setDisplayedContent((displayedContent) => displayedContent.slice(0, index))
                setIndex((index) => index - 1)
            }
            setIndex((index) => index + 1)
            setDisplayedContent((displayedContent) => displayedContent + content[index])
        }, speedOfChange);
    }, []);

    // useEffect(() => {
    //     setDisplayedContent((displayedContent) => displayedContent + content[index])
    // }, [index])

    return <pre className="type-writer">{displayedContent}</pre>;
};

export default TypeWriter;