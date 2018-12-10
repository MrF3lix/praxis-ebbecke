import React, { Fragment, lazy } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { tryToUpdateIsPageLoaded } from './actions/global-actions.jsx'
import Loading from './components/_shared/loading'

const Header = lazy(() => import('./components/_shared/header'))
const Footer = lazy(() => import('./components/_shared/footer'))
const Praxis = lazy(() => import('./components/praxis'))
const CMS = lazy(() => import('./components/cms'))

class MainRouter extends React.Component {
    render() {
        const { location, global } = this.props
        return (
            <div className="root__container">
                <Loading isLoaded={global.isPageLoaded}>
                    <Header />
                    <Switch location={location}>
                        <Route path={'/'} component={Praxis} exact={true} />
                        <Route path={'/cms'} component={CMS} exact={true} />
                    </Switch>
                    <Footer />
                </Loading>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})

const mapDispatchToProps = dispatch => ({
    tryToUpdateIsPageLoaded: value => dispatch(tryToUpdateIsPageLoaded(value))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainRouter))