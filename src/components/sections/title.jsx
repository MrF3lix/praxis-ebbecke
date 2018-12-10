import React from 'react'
import TitleImage from '../../assets/gfx/background-title.jpg'

const TitleSection = ({ content }) => (
    <section className="title">
        <div className="inner">
            <div className="image__container">
                <img src={TitleImage} />
            </div>
            <div className="content__container">
                <h1>{content.find(a => a.elementId == 'MainTitle').content}</h1>
                <p>{content.find(a => a.elementId == 'MainBody').content}</p>
            </div>
        </div>
        <div className="background__div"></div>
    </section>
)

export default TitleSection