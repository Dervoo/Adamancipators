import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {
const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
    if(window.scrollY >= 80) {
        setScrollNav(true)
    } else {
        setScrollNav(false)
    }
}
useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, []);

const toggleHome = () => {
    scroll.scrollToTop();
};

  return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
                Adamancipator
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="bracelets"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Bracelets</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="necklaces"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Necklaces</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="earrings"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Earrings</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="collections"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Collections</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar