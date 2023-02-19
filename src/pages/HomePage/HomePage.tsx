import React from 'react';
import Navigation from "../../components/Navigation";
import myGif from '../../images/illusion.gif';
import wave from '../../images/wave.gif'
import styles from './homepage.module.css';
import TypeWriter from "../../components/TypeWriter";

const HomePage = () => {
    return (
        <div className={styles.container}>
            {/*<Navigation/>*/}
            <TypeWriter/>
            <img className={styles.gifRot} src={wave} alt="my-gif" />
        </div>
    );
};

export default HomePage;