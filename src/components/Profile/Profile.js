import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import { connect, subscription } from 'slim-redux-react'
import {getProfileAsync} from '../../changeTriggers/userChangeTriggers'
import {receivedGiftAsync, toggleMenu} from '../../changeTriggers/userChangeTriggers'
import {Menu, MenuItem, Container, Content} from './style'
import MyEvents from '../../components/MyEvents/MyEvents'
import JoinedEvents from '../../components/JoinedEvents/JoinedEvents'
import GiftWon from '../../components/GiftWon/GiftWon'
import Contact from '../../components/Contact/Contact'
import Spinner from '../../components/Spinner/Spinner'

const user = subscription('state.user')
const profile = subscription('state.profile')

class Profile extends Component {
  state = {
    content: 'my_event',
    open: true,
  }

  componentDidMount() {
    this.props.getProfileAsync(this.props.match.params.id)
  }

  _changeContent = (target) => {
    this.setState({content: target})
    this.props.toggleMenu();
  }

  render() {
    const { user, profile, match, receivedGiftAsync, toggleMenu } = this.props
    let renderContent
    switch(this.state.content) {
      case 'my_event':
        renderContent = <MyEvents createdEvents={profile.created} />
        break
      case 'joined_event':
        renderContent = <JoinedEvents joinedEvents={profile.joined} />
        break
      case 'gift':
        renderContent = <GiftWon gifts={profile.gifts} received={receivedGiftAsync} />
        break
      case 'edit':
        renderContent = <Contact user_id={user.user_id} phone={user.phone} address={user.address} />
        break
    }


    return (
      <div>
        {user === null || user.user_id !== match.params.id  ? <Spinner/> :
          <Container >
            <Menu showMenu={profile.showMenu}>
              <MenuItem onClick={() => toggleMenu()}>
                <Icon name={this.state.open? "fas fa-arrow-left" : "fas fa-arrow-right"}/>
              </MenuItem>
              <MenuItem onClick={() => this._changeContent('my_event')} selected={this.state.content === 'my_event'}>
                <Icon name="fa-list-ul"/>My Events
              </MenuItem>
              <MenuItem onClick={() => this._changeContent('joined_event')} selected={this.state.content === 'joined_event'}>
                <Icon name="fa-user-plus"/>Joined Events
              </MenuItem>
              <MenuItem onClick={() => this._changeContent('gift')} selected={this.state.content === 'gift'}>
                <Icon name="fa-gift"/>Gifts Acquired
              </MenuItem>
              <MenuItem onClick={() => this._changeContent('edit')} selected={this.state.content === 'edit'}>
                <Icon name="fas fa-edit"/>Edit Profile
              </MenuItem>
            </Menu>
            <Content>
              {renderContent}
            </Content>
          </Container>}
      </div>
    )
  }
}

const ProfileContainer = connect(Profile, { user, profile, getProfileAsync, receivedGiftAsync, toggleMenu})

export default ProfileContainer