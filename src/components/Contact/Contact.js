import React from 'react'
import Input from 'muicss/lib/react/input'
import {connect} from 'slim-redux-react'
import {contactInfoUpdateAsync} from '../../changeTriggers/userChangeTriggers'
import {ContactInputs, PageTitle, Wrapper, ContactInfo} from './style'
import {toggleMenu} from '../../changeTriggers/userChangeTriggers'

class Contact extends React.Component {
  state = {
    phone: "",
    address: "",
    user_id: this.props.user_id
  }

  phoneChange = value => {
    if(value.length <= 15){
      if(value.match(/^[\d+-]+$/) || value === '') {
        this.setState({...this.state, phone: value })
      }
    }
  }

  addressChange = value => {
    if(value.length <= 255) {
      this.setState({...this.state, address: value })
    }
  }

  submitChange = () => {
    this.setState({...this.state, phone: '', address: ''})
    this.props.contactInfoUpdateAsync(this.state)
  }

  render () {
    let {phone, address, user_id, toggleMenu} = this.props

    return (
      <React.Fragment>
      <PageTitle>
        <button onClick={ ()=> toggleMenu()}><i className="fas fa-bars"></i></button>
        <h1>Current Contact Info</h1>
      </PageTitle>
      <ContactInfo>
        <h4>Phone No. : {phone}</h4>
        <h4>Address : {address}</h4>
      </ContactInfo>
      <Wrapper>
        <ContactInputs>
          <Input floatingLabel label="Phone No." onChange={e => this.phoneChange(e.target.value)} value={this.state.phone}/>
          <Input floatingLabel label="Address" onChange={e => this.addressChange(e.target.value)} value={this.state.address}/>
          <input type="submit" onClick={() => this.submitChange()}/>
        </ContactInputs>
      </Wrapper>

      </React.Fragment>
    )
  }
}

const ContactContainer = connect(Contact, {contactInfoUpdateAsync,toggleMenu})

export default ContactContainer