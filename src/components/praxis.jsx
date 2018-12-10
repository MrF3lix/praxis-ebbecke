import React, { lazy } from 'react'
import TeamSection from './sections/team'
import { connect } from 'react-redux'
import { tryGetContent, tryGetTeam, tryGetTimes } from '../actions/cms-actions'

const TitleSection = lazy(() => import('./sections/title'))
const ContactSection = lazy(() => import('./sections/contact'))
const MotivationSection = lazy(() => import('./sections/motivation'))
const Footer = lazy(() => import('./_shared/footer'))

class Praxis extends React.Component {
    componentDidMount() {
        this.props.tryGetContent()
        this.props.tryGetTeam()
        this.props.tryGetTimes()
    }

    render() {
        const { content, team, times } = this.props.global
        return (
            <React.Fragment>
                <main>
                    {content.length > 0 &&
                        <React.Fragment>
                            <TitleSection content={content} />
                            <MotivationSection content={content} />
                            <TeamSection content={content} team={team} />
                            <ContactSection content={content} times={times} />
                        </React.Fragment>
                    }
                </main>
                <Footer />
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Praxis)