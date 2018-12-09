import React, { lazy } from 'react'
import Loading from './_shared/loading'
import TeamSection from './sections/team';

const Footer = lazy(() => import('./_shared/footer'))
const Header = lazy(() => import('./_shared/header'))
const TitleSection = lazy(() => import('./sections/title'))
const ContactSection = lazy(() => import('./sections/contact'))
const MotivationSection = lazy(() => import('./sections/motivation'))

export default class Praxis extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 1000)
    }

    render() {
        return (
            <div className="root__container">
                <Loading isLoading={this.state.isLoading}>
                    <React.Fragment>
                        <Header />
                        <main>
                            <TitleSection />
                            <MotivationSection />
                            <TeamSection />
                            <ContactSection />
                        </main>
                        <Footer />
                    </React.Fragment>
                </Loading>
            </div>
        )
    }
}