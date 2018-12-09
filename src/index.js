import React from 'react'
import ReactDOM from 'react-dom'
import * as ServiceWorker from './serviceWorker'
import 'babel-polyfill'

import Praxis from './components/praxis'
import './assets/scss/app.scss'

ReactDOM.render(
    <Praxis/>,
    document.getElementById('root')
)

ServiceWorker.register()
// ServiceWorker.unregister()