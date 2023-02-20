import React from 'react';
import Skill from './Skill';
import brain from '../../media/brain.gif';
import clock from '../../media/clock.gif';
import planet from '../../media/planet.gif';

const arrOfSkills = [
    {id: 1, title: 'Web-программирование', description: 'fggargerg', image: brain},
    {id: 2, title: 'Frontend', description: 'raegreggreagr', image: clock},
    {id: 3, title: 'Backend', description: 'ragreag', image: planet},
]
const AboutMe = () => {
    return (
        <div>
            <h1>Обо мне</h1>
            <p>Я разрабатываю веб-приложения и делаю верстку по макету.</p>
            {arrOfSkills.map((item) =>
                <Skill title={item.title} description={item.description} image={item.image} key={item.id}/>)}
        </div>
    );
};

export default AboutMe;