import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterImg,
} from "./FooterElements";
import Icon from "../../images/flick.svg";

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
                            {/* <FooterLinkTitle>About Us</FooterLinkTitle> */}
                            {/* <FooterLink to="/signin">Terms of Use</FooterLink> */}
                        </FooterLinkItems>

                        <FooterLinkItems>
                            {/* <FooterLinkTitle>About Us</FooterLinkTitle> */}
                            {/* <FooterLink to="/signin">Contact Us</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterLinkItems>
                    {/* <FooterLinkTitle>About Us</FooterLinkTitle> */}
                    <FooterLink to="/privacy">Privacy Policy</FooterLink>
                </FooterLinkItems>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            <FooterImg src={Icon} />
                        </SocialLogo>
                        <WebsiteRights>
                            flick © {new Date().getFullYear()} All rights
                            reserved.
                        </WebsiteRights>
                        {/* <SocialIcons>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Youtube"
                            >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.twitter.com/"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Linkedin"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons> */}
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
