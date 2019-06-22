import React from 'react'
import { connect, subscription } from 'slim-redux-react'
import {Link} from 'react-router-dom'
import { getMatchAsync, getSearchAsync, mouseOverMatch, clickMatch } from '../../changeTriggers/searchChangeTriggers'
import { Wrapper, Container, LeftGroup, RightGroup, Logo, LogoImage, Search, Help, LogIn, Suggestion, ListItem, DropdownStyled,
        DropdownItemStyled, StyledLink } from './style'
import logo from '../../assets/icons/LogoLong.svg'

const search = subscription('state.search')
const user = subscription('state.user')

const ToolBar = ({search, getMatchAsync, getSearchAsync, mouseOverMatch, clickMatch, user, fbLogin, fbLogout}) => (
  <Wrapper>
    <Container>
      <LeftGroup>
        <Logo>
          <Link to="/"><LogoImage/></Link>
        </Logo>
        <Search>
          <input placeholder="Search..."
                 value={search.term}
                 onChange={e => {
                   getMatchAsync(e)
                 }}
                 onKeyDown={e => {
                   if(e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 13)
                   getSearchAsync(e.keyCode, search.term)}
                 }
          />
          <i className="fa fa-search" onClick={e => clickMatch(search.term)}></i>
          <Suggestion show={search.match.length > 0}>
              {search.match.length > 0 ?
                search.match.map((m, index) =>
                  <ListItem
                    key={index}
                    active={search.active === index}
                    onMouseOver={e => mouseOverMatch(index)}
                    onClick={e => clickMatch(m)}
                    dangerouslySetInnerHTML={{__html: m.replace(new RegExp(search.term, 'ig'), x => '<strong>'+x+'</strong>')}}
                  />
                  ) : ''}
          </Suggestion>
        </Search>
      </LeftGroup>
      <RightGroup>
        <Help>
          <i className="fa fa-question-circle"></i>
          <h2>Help</h2>
        </Help>
        {user === null ?
          <LogIn>
            <i className="fab fa-facebook"></i>
            <h2 className="log-in-text" onClick={e => fbLogin()}>Log In</h2>
          </LogIn> :
          <LogIn picture={user.picture}>
            <div className="pic"></div>
            <Link to={'/user/profile/' + user.user_id}>{user.name}</Link>
            <DropdownStyled>
              <StyledLink to={'/user/profile/' + user.user_id}>
                <span style={{width: '24px', display: 'inline-block'}}>
                  <i className="fas fa-user"></i>
                </span>
                <span style={{display: 'inline-block', paddingLeft: '12px'}}>Profile</span>
              </StyledLink>
                <StyledLink to={'/privacy'}>
                <span style={{width: '24px', display: 'inline-block'}}>
                  <i className="fa fa-user-shield"></i>
                </span>
                    <span style={{display: 'inline-block', paddingLeft: '12px'}}>Privacy Policy</span>
                </StyledLink>
                <StyledLink to={'/tos'}>
                <span style={{width: '24px', display: 'inline-block'}}>
                  <i className="fas fa-handshake"></i>
                </span>
                    <span style={{display: 'inline-block', paddingLeft: '12px'}}>Terms Of Service</span>
                </StyledLink>
              <StyledLink to="/" onClick={() =>fbLogout()}>
                <span style={{width: '24px',  display: 'inline-block'}}>
                  <i className="fas fa-sign-out-alt"></i>
                </span>
                <span style={{display: 'inline-block', paddingLeft: '12px'}}>Log Out</span>
              </StyledLink>
            </DropdownStyled>
          </LogIn>}

      </RightGroup>
    </Container>
  </Wrapper>
)

export default connect(ToolBar, { getMatchAsync, getSearchAsync, search, mouseOverMatch, clickMatch, user})

