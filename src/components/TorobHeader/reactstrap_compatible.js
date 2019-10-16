import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

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
      isOpen: false,
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
          <NavItem>
            <NavLink href="#shopPanel">
              <button
                class="btn torob-header-btn navbar-btn"
                onClick={panelConstances.shopPanel.onClick}
                >{panelConstances.shopPanel.title}</button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#ticketing">
              <button
                class="btn torob-header-btn navbar-btn"
                onClick={panelConstances.ticketing.onClick}
                >{panelConstances.ticketing.title}</button>
            </NavLink>
          </NavItem>
        </React.Fragment>
      )
    } else if (torobPanel === "shopPanel") {
      return (
        <React.Fragment>
          <NavItem>
            <NavLink href="#matching">
              <button
                class="btn torob-header-btn navbar-btn"
                onClick={panelConstances.matching.onClick}
                >{panelConstances.matching.title}</button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#ticketing">
              <button
                class="btn torob-header-btn navbar-btn"
                onClick={panelConstances.ticketing.onClick}
                >{panelConstances.ticketing.title}</button>
            </NavLink>
          </NavItem>
        </React.Fragment>
      )
    } else if (torobPanel === "ticketing") {
      return (
        <React.Fragment>
          <NavItem>
            <NavLink href="#shopPanel">
              <button
                class="btn torob-header-btn navbar-btn"
                onClick={panelConstances.shopPanel.onClick}
                >{panelConstances.shopPanel.title}</button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#matching">
              <button
                class="btn torob-header-btn navbar-btn"
                onClick={panelConstances.matching.onClick}
                >{panelConstances.matching.title}</button>
            </NavLink>
          </NavItem>
        </React.Fragment>
      )
    }

  }

  _renderLoginLogout() {
    const { isLoggedIn, onLogin, onLogout } = this.props;

    if (isLoggedIn) {
      return (
        <NavItem>
          <NavLink href="#logout" className="no-decor login-register"
            onClick={onLogout ? onLogout : () => {return undefined;}}
          >{'خروج'}</NavLink>
        </NavItem>
      )
    } else {
      return (
        <NavItem>
          <NavLink href="#login" className="no-decor login-register"
            onClick={onLogin ? onLogin : () => {return undefined;}}
          >{'ورود/ثبت نام'}</NavLink>
        </NavItem>
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
        <UncontrolledDropdown nav inNavbar id="collasible-nav-dropdown">
          <DropdownToggle nav caret>
            {'بخش ها'}
          </DropdownToggle>
          <DropdownMenu left>
            {
              dropDownLinks.map(linkItem => {
                return (
                  <DropdownItem href={linkItem.href}>{linkItem.title}</DropdownItem>
                )
              })
            }
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    }
  }

  render () {
    const { torobPanel } = this.props;
    const { panelConstances } = this.state;
    return (
      
      <div>
        <Navbar className="torob-header" light expand="lg">
          <NavbarBrand href="/">
            <a href="#!" className="logo">
              <img src="/logo.png" alt="torob-logo"/>
              <div className="no-decor">{'ترب'}</div>
            </a>
            <div className="panel-main-title">
              {panelConstances[torobPanel].title}
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={() => {
            this.setState({
              isOpen: !this.state.isOpen
            });
          }} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this._renderShopSelector()}
            <Nav className="ml-auto" navbar>
            {this._renderDropDownLink()}
            {this._renderPanelsNavigationButtons()}
            {this._renderLoginLogout()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    );
  }
}
