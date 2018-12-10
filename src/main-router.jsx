import React, { Fragment, lazy } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { tryToUpdateIsPageLoaded, tryGetUserInformation } from './actions/global-actions.jsx'
import Loading from './components/_shared/loading'
import Messages from './components/_shared/messages'

const Header = lazy(() => import('./components/_shared/header'))
const Praxis = lazy(() => import('./components/praxis'))
const CMS = lazy(() => import('./components/cms'))
const Login = lazy(() => import('./components/login'))

class MainRouter extends React.Component {
    componentDidMount() {
        this.props.tryGetUserInformation()
    }
    render() {
        const { location, global } = this.props
        return (
            <div className="root__container">
                <Messages />
                <Loading isLoaded={global.isPageLoaded}>
                    <Header />
                    <Switch location={location}>
                        <Route path={'/'} component={Praxis} exact={true} />
                        <Route path={'/cms'} component={CMS} exact={true} />
                        <Route path={'/login'} component={Login} exact={true} />
                    </Switch>
                </Loading>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})

const mapDispatchToProps = dispatch => ({
    tryToUpdateIsPageLoaded: value => dispatch(tryToUpdateIsPageLoaded(value)),
    tryGetUserInformation: () => dispatch(tryGetUserInformation())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainRouter))