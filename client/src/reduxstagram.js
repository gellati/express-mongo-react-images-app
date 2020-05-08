import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Router, Route, Switch, Redirect } from 'react-router'

import App from './components/App'

import css from './styles/style.styl'

/* Import our data store */
import store from './store'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Router>
          <Switch>
            <Route exact path="/"
              component={App}
            />
            <Redirect from='*' to='/' />
          </Switch>
        </Router>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
