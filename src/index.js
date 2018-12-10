import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as ServiceWorker from './serviceWorker'
import 'babel-polyfill'
import Store from './store.jsx'
import MainRouter from './main-router.jsx'

import './assets/scss/app.scss'

ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <MainRouter/>
        </Router>
    </Provider>,
    document.getElementById('root')
)

// ServiceWorker.register()
ServiceWorker.unregister()