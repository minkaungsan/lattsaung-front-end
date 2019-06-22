import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect, subscription} from 'slim-redux-react'
import {userLoginAsync, userLogout, userLogin} from './changeTriggers/userChangeTriggers'
import {ThemeProvider, injectGlobal} from 'styled-components'
import theme from './theme'
import ToolBar from './components/ToolBar/ToolBar'
import MainContent from './components/MainContent/MainContent'
import EventDetail from './components/EventDetail/EventDetail'
import Profile from './components/Profile/Profile'
import Privacy from './components/Info/Privacy'
import TermOfService from './components/Info/TermOfService'
import Roboto from './assets/fonts/Roboto-Regular.ttf'
import ShareTech from './assets/fonts/sharetech.ttf'
import * as FB from 'fb-sdk-wrapper'

{

  injectGlobal`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
  }
   
  @font-face {
    font-family: 'ShareTech';
    src: url(${ShareTech});  
  }

  * {
    box-sizing: border-box;
  }

  body, div {
    margin: 0;
    padding: 0;
  }
  
  .sk-cube-grid {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: #ff8336;
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; 
  }
  .sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
  .sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
            animation-delay: 0s; }
  .sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube9 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  
  @-webkit-keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1); 
    }
  }
  
  @keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    } 
  }
  
  .date-wrapper {
    width: 500px;
  }
  
  .date-range {
    font-family: Roboto;
    font-size: 18px;
    font-weight: lighter;
    display: inline-block;
    text-align: center;
    
    
  }
  .date-input {
    display: inline-block;
    padding: 6px 0;
    text-align: center;
    width: 250px;
  }
  .rdtCounters>div:nth-child(2), .rdtCounters>div:nth-child(3) {
      background-color: #4f4f4f;
      display: none;
  }
`
}

const user = subscription('state.user')

class App extends Component {
  componentDidMount() {
    FB.load()
      .then(() => {
        FB.init({
          appId: '841722859328247'
        });
        FB.getLoginStatus()
          .then(response => this.facebookLoginHandler(response))
      });
  }

  facebookLoginHandler = response => {
    console.log(response)
    if (response.status === 'connected') {
      const dataToFetch = {
        fields: 'name, id, picture, link',
      }

      FB.api('/me', 'get', dataToFetch)
        .then(userData => {
          let result = {
            name: userData.name,
            fb_id: userData.id,
            picture: userData.picture.data.url,
            fb_link: userData.link
          }
          console.log(userData)
          this.props.userLoginAsync(result)
        })
        .catch(err => {
          console.log('Login Failed')
          //console.log(err)
        });
    }
  }

  facebookLogin = () => {
    FB.login()
      .then(response => this.facebookLoginHandler(response))
    // if (!this.FB) return
    //
    // this.FB.getLoginStatus(response => {
    //   if (response.status === 'connected') {
    //     this.facebookLoginHandler(response)
    //   } else {
    //     this.FB.login(this.facebookLoginHandler, {scope: 'public_profile'})
    //   }
    // })
  }

  facebookLogout = () => {
    FB.logout()
      .then((response) => {
        console.log(response)
        this.props.userLogout()
      })
    // if (!this.FB) return
    //
    // this.FB.logout(res => {
    //   console.log(res)
    //   sessionStorage.setItem('user', null)
    //   this.props.userLogout()
    // })
  }

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <ToolBar fbLogin={this.facebookLogin} fbLogout={this.facebookLogout}/>
            <Switch>
              <Route path="/event/:id" component={EventDetail}/>
              <Route path="/user/profile/:id" component={Profile}/>
              <Route path="/privacy" component={Privacy}/>
              <Route path="/tos" component={TermOfService}/>
              <Route path="/" component={MainContent}/>

              {/*<Counter/>*/}
            </Switch>
          </React.Fragment>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

const AppContainer = connect(App, {userLoginAsync, userLogout, userLogin, user})

export default AppContainer
