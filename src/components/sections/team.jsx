import React from 'react'
import TeamImage from '../../assets/gfx/background-team.jpg'

const TeamSection = ({ content, team }) => (
    <section className="team">
        <div className="container">
            <div className="image__container">
                <img src={TeamImage} />
            </div>
            <div className="content__container">
                <h2>{content.find(a => a.elementId == 'TeamTitle').content}</h2>
                <p>{content.find(a => a.elementId == 'TeamBody').content}</p>
            </div>
        </div>
        <div className="team__container">
            {team.map((member, index) => (
                <div key={index} className="team">
                    <img src={`./assets/gfx/${member.image}`} />
                    <p><strong>{member.position}</strong></p>
                    <p>{member.name}</p>
                </div>
            ))}
        </div>
    </section>
)

export default TeamSection