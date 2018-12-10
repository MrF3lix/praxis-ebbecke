import React from 'react'
import { connect } from 'react-redux'
import { tryGetContent, tryGetTeam, tryGetTimes } from '../actions/cms-actions'

class CMS extends React.Component {

    componentDidMount() {
        this.props.tryGetContent()
        this.props.tryGetTeam()
        this.props.tryGetTimes()
    }

    render() {
        const { content, team, times } = this.props.global
        return (
            <main>
                <div className="inner">
                    <h1>CMS</h1>
                    <h2>Content</h2>
                    <div className="content__container">
                        {content.map((content, i) => (
                            <div key={i} className="content__item">
                                <h3>{content.title}</h3>
                                <p>{content.content}</p>
                            </div>
                        ))}
                    </div>
                    <h2>Team</h2>
                    <div className="team__container">
                        {team.map((member, i) => (
                            <div key={i} className="team__item">
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                                <img src={`./assets/gfx/${member.image}`} />
                            </div>
                        ))}
                    </div>
                    <h2>Opening times</h2>
                    <div className="times__container">
                        <div className="times__item">
                            {times.map((time, i) => (
                                <div key={i} className="item">
                                    <div className="day">{time.day}</div>
                                    <div className="time">{time.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})

const mapDispatchToProps = dispatch => ({
    tryGetContent: () => dispatch(tryGetContent()),
    tryGetTeam: () => dispatch(tryGetTeam()),
    tryGetTimes: () => dispatch(tryGetTimes())
})

export default connect(mapStateToProps, mapDispatchToProps)(CMS)