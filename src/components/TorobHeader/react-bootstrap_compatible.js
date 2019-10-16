import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

import './styles.css';

export default class TorobHeader extends Component {

  static get propTypes() {
    return {
      typeaheadComponent: PropTypes.object,
      shops: PropTypes.array,
      selectedShop: PropTypes.object,
      isLoggedIn: PropTypes.bool,
      hasDropDown: PropTypes.bool,
      dropDownLinks: PropTypes.array,
      selectedRole: PropTypes.string,
      torobPanel: PropTypes.string,
      onRoleChange: PropTypes.func,
      onShopChange: PropTypes.func,
      onLogin: PropTypes.bool,
      onLogout: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      typeaheadComponent: undefined,
      shops: [],
      selectedShop: {
        "name": "test",
        "domain": "tost"
      },
      isLoggedIn: false,
      hasDropDown: false,
      dropDownLinks: [],
      selectedRole: 'shop',
      torobPanel: 'matching',
      onRoleChange: undefined,
      onShopChange: undefined,
      onLogin: undefined,
      onLogout: undefined,
    };
  }

  constructor (props) {
    super(props);

    this._renderLoginLogout = this._renderLoginLogout.bind(this);
    this._renderPanelsNavigationButtons = this._renderPanelsNavigationButtons.bind(this);
    this._renderShopSelector = this._renderShopSelector.bind(this);
    this.state = {
      panelConstances: {
        matching: {
          title: "پنل ادغام محصولات",
          onClick: () => {
            window.location = "https://matching.torob.com/"
          }
        },
        shopPanel: {
          title: "پنل فروشگاه",
          onClick: () => {
            window.location = "https://panel.torob.com/"
          }
        },
        ticketing: {
          title: "پنل پشتیبانی",
          onClick: () => {
            window.location = "https://ticketing.torob.com/"
          }
        }
      }
    }
  }

  _renderPanelsNavigationButtons() {
    const { torobPanel } = this.props;
    const { panelConstances } = this.state;
  
    if (torobPanel === "matching") {
      return (
        <React.Fragment>
          <Nav.Link href="#shopPanel">
            <button
              class="btn torob-header-btn navbar-btn"
              onClick={panelConstances.shopPanel.onClick}
              >{panelConstances.shopPanel.title}</button>
          </Nav.Link>
          <Nav.Link href="#ticketing">
            <button
              class="btn torob-header-btn navbar-btn"
              onClick={panelConstances.ticketing.onClick}
              >{panelConstances.ticketing.title}</button>
          </Nav.Link>
        </React.Fragment>
      )
    } else if (torobPanel === "shopPanel") {
      return (
        <React.Fragment>
          <Nav.Link href="#matching">
            <button
              class="btn torob-header-btn navbar-btn"
              onClick={panelConstances.matching.onClick}
              >{panelConstances.matching.title}</button>
          </Nav.Link>
          <Nav.Link href="#ticketing">
            <button
              class="btn torob-header-btn navbar-btn"
              onClick={panelConstances.ticketing.onClick}
              >{panelConstances.ticketing.title}</button>
          </Nav.Link>
        </React.Fragment>
      )
    } else if (torobPanel === "ticketing") {
      return (
        <React.Fragment>
          <Nav.Link href="#shopPanel">
            <button
              class="btn torob-header-btn navbar-btn"
              onClick={panelConstances.shopPanel.onClick}
              >{panelConstances.shopPanel.title}</button>
          </Nav.Link>
          <Nav.Link href="#matching">
            <button
              class="btn torob-header-btn navbar-btn"
              onClick={panelConstances.matching.onClick}
              >{panelConstances.matching.title}</button>
          </Nav.Link>
        </React.Fragment>
      )
    }

  }

  _renderLoginLogout() {
    const { isLoggedIn, onLogin, onLogout } = this.props;

    if (isLoggedIn) {
      return (
        <React.Fragment>
          <Nav.Link href="#logout" className="no-decor login-register"
            onClick={onLogout ? onLogout : () => {return undefined;}}
          >{'خروج'}</Nav.Link>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Nav.Link href="#login" className="no-decor login-register"
            onClick={onLogin ? onLogin : () => {return undefined;}}
          >{'ورود/ثبت نام'}</Nav.Link>
        </React.Fragment>
      )
    }
  }

  _renderShopSelector() {
    const { shops, typeaheadComponent: Typeahead, onShopChange } = this.props;
    // const defaultItemProps = (selectedShop ? {defaultSelected: [selectedShop,]} : {});

    if (Typeahead) {
      return (
        <Typeahead
          renderMenuItemChildren={(option) =>
            <div>
              <strong>{option.name}</strong>{' - '}<em>({option.domain})</em>
            </div>
          }
          options={shops}
          labelKey={'name'}
          placeholder={'انتخاب فروشگاه'}
          onChange={onShopChange ? onShopChange : () => { return undefined; }}
          // {...defaultItemProps}
        />
      )
    }
    return ''
  }

  _renderDropDownLink() {
    const { hasDropDown, dropDownLinks } = this.props;
    if (!hasDropDown) {
      return '';
    } else {
      return (
        <NavDropdown title="بخش ها" id="collasible-nav-dropdown">
          {
            dropDownLinks.map(linkItem => {
              return (
                <NavDropdown.Item href={linkItem.href}>{linkItem.title}</NavDropdown.Item>
              )
            })
          }
        </NavDropdown>
      );
    }
  }

  render () {
    const { torobPanel } = this.props;
    const { panelConstances } = this.state;
    return (
      
      <Navbar collapseOnSelect expand="lg" variant="light" className="torob-header">
        <Container>
        <Navbar.Brand href="#home">
          <a href="#!" className="logo">
            <img src="/logo.png" alt="torob-logo"/>
            <div className="no-decor">{'ترب'}</div>
          </a>
          <div className="panel-main-title">
            {panelConstances[torobPanel].title}
          </div>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            {this._renderShopSelector()}
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            {this._renderDropDownLink()}
            {this._renderPanelsNavigationButtons()}
            {this._renderLoginLogout()}
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

    );
  }
}
