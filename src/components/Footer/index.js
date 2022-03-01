import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
      
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">FAQ</FooterLink>
                            <FooterLink to="/signin">Commercial</FooterLink>
                            <FooterLink to="/signin">Join us</FooterLink>
                            <FooterLink to="/signin">Recommendation</FooterLink>
                            <FooterLink to="/signin">News</FooterLink>
                            <FooterLink to="/signin">Delivery</FooterLink>
                            <FooterLink to="/signin">Help</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Community</FooterLinkTitle>
                            <FooterLink to="/signin">Forum</FooterLink>
                            <FooterLink to="/signin">Campaigns</FooterLink>
                            <FooterLink to="/signin">Collections ideas</FooterLink>
                            <FooterLink to="/signin">Share your ideas</FooterLink>
                            <FooterLink to="/signin">Fanclub</FooterLink>
                            <FooterLink to="/signin">Representative</FooterLink>
                            <FooterLink to="/signin">Company's story</FooterLink>
                            <FooterLink to="/signin">Voting</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Awards</FooterLinkTitle>
                            <FooterLink to="/signin">Choose best collection</FooterLink>
                            <FooterLink to="/signin">Choose best item</FooterLink>
                            <FooterLink to="/signin">Vote for next representative</FooterLink>
                            <FooterLink to="/signin">Vote for favourite representative</FooterLink>
                            <FooterLink to="/signin">Sign up to get Newsletter</FooterLink>
                            <FooterLink to="/signin">Sign up to get discount for next item</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Adamancipator
                    </SocialLogo>
                    <WebsiteRights>Adamcipator © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://facebook.com/" traget="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="https://Instagram.com/" traget="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="https://youtube.com/" traget="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        <SocialIconLink href="https://twitter.com/" traget="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                        <SocialIconLink href="https://linkedin.com/" traget="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer