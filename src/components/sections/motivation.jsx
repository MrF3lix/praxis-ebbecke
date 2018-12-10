import React from 'react'
import TitleImage from '../../assets/gfx/background-praxis.jpg'

const MotivationSection = ({ content }) => (
    <section className="motivation">
        <div className="content__container">
            <h2>{content.find(a => a.elementId == 'MotivationTitle').content}</h2>
            <p>{content.find(a => a.elementId == 'MotivationBody').content}</p>
        </div>
        <div className="image__container">
            <img src={TitleImage} />
        </div>
    </section>
)

export default MotivationSection