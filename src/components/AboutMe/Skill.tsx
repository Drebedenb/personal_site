import React from 'react';
import s from './skill.module.css'

const Skill = ({title, description, image}: {title: string, description: string, image: string}) => {
    return (
        <div>
            <img className={s.gif} src={image}/>
            {title}
            {description}
        </div>
    );
};

export default Skill;