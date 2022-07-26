import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import React from 'react'
import App from './App'

const root = createRoot(document.querySelector('#root'))

root.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
)