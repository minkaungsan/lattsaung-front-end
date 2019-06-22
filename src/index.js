import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'slim-redux-react'
import { createSlimReduxStore } from 'slim-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './assets/css/all.min.css'
import 'react-select/dist/react-select.css'
import './assets/css/mui.css'
import moment from 'moment'

const initialState = {
  counter: 0,
  events: null,
  user: null,
  search: {
    term: '',
    match: [],
    active: null,
    events: [],
    searched: false,
  },
  sort: 'all',
  filter: 'none',
  eventDetail: null,
  participants: [],
  winners: [],
  eventRegistration: {
    name: '',
    description: '',
    picture: '',
    startDate: '',
    endDate: '',
    addGift: '',
    gifts: [],
    tempGiftPic: '',
    error: null,
    tos: false
  },
  profile: {
    showMenu: false
  }
}

const store = createSlimReduxStore(initialState, {
  //middleware: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

registerServiceWorker()

