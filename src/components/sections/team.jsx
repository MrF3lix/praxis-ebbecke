import React from 'react'
import TeamImage from '../../assets/gfx/background-team.jpg'
import JuliaEbbecke from '../../assets/gfx/team-julia-ebbecke.jpg'
import ChristianeKira from '../../assets/gfx/team-christiane-kira.jpg'
import DanielaChristmann from '../../assets/gfx/team-daniela-christmann.jpg'
import BettinaHuber from '../../assets/gfx/team-bettina-huber.jpg'

const TeamSection = ({ content }) => (
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
            <div className="team">
                <img src={JuliaEbbecke} />
                <p><strong>Heilpraktiker</strong></p>
                <p>Julia Ebbecke</p>
            </div>
            <div className="team">
                <img src={ChristianeKira} />
                <p><strong>Heilpraktiker</strong></p>
                <p>Christiane Kira</p>
            </div>
            <div className="team">
                <img src={DanielaChristmann} />
                <p><strong>Praxisassistent</strong></p>
                <p>Daniela Christmann</p>
            </div>
            <div className="team">
                <img src={BettinaHuber} />
                <p><strong>Praxisassistent</strong></p>
                <p>Bettina Huber</p>
            </div>
        </div>
    </section>
)

export default TeamSection