import React, { lazy } from 'react'
import TeamSection from './sections/team'
import { connect } from 'react-redux'
import { tryGetContent } from '../actions/cms-actions'

const TitleSection = lazy(() => import('./sections/title'))
const ContactSection = lazy(() => import('./sections/contact'))
const MotivationSection = lazy(() => import('./sections/motivation'))

class Praxis extends React.Component {
    componentDidMount() {
        this.props.tryGetContent()
    }

    render() {
        const { content } = this.props.global
        return (
            <main>
                {content.length > 0 &&
                    <React.Fragment>
                        <TitleSection content={content} />
                        <MotivationSection content={content} />
                        <TeamSection content={content} />
                        <ContactSection content={content} />
                    </React.Fragment>
                }
            </main>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})

const mapDispatchToProps = dispatch => ({
    tryGetContent: () => dispatch(tryGetContent())
})

export default connect(mapStateToProps, mapDispatchToProps)(Praxis)