import React from 'react';
import Navigation from "../../components/Navigation";
import myGif from '../../media/illusion.gif';
import wave from '../../media/wave.gif'
import styles from './homepage.module.css';
import Intro from '../../components/Intro/Intro';
import AboutMe from '../../components/AboutMe/AboutMe';

const HomePage = () => {
    return (
        <div className={styles.container}>
            {/*<Navigation/>*/}
            <Intro/>
            <img className={styles.gifRot} src={wave}/>
            <AboutMe/>
        </div>
    );
};

export default HomePage;