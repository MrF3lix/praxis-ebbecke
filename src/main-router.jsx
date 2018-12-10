import React, { Fragment, lazy } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { tryToUpdateIsPageLoaded, updateAuthorization } from './actions/global-actions.jsx'
import Loading from './components/_shared/loading'
import Messages from './components/_shared/messages'

const Header = lazy(() => import('./components/_shared/header'))
const Praxis = lazy(() => import('./components/praxis'))
const CMS = lazy(() => import('./components/cms'))
const Login = lazy(() => import('./components/login'))
const Register = lazy(() => import('./components/register'))

class MainRouter extends React.Component {
    componentDidMount() {
        this.props.updateAuthorization(window.sessionStorage.getItem("authorization") !== null)
    }
    logout() {
        window.sessionStorage.removeItem("authorization")
        this.props.updateAuthorization(false)
        this.props.history.push('/')
    }
    render() {
        const { location, global } = this.props
        return (
            <div className="root__container">
                <Messages />
                <Loading isLoaded={global.isPageLoaded}>
                    <Header isAuthenticated={global.isAuthenticated} logout={() => this.logout()} />
                    <Switch location={location}>
                        <Route path={'/'} component={Praxis} exact={true} />
                        <Route path={'/cms'} component={CMS} exact={true} />
                        <Route path={'/login'} component={Login} exact={true} />
                        <Route path={'/register'} component={Register} exact={true} />
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
    updateAuthorization: value => dispatch(updateAuthorization(value))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainRouter))