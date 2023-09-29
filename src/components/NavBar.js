import {Container, Nav, Navbar} from 'react-bootstrap';
import {useEffect, useState} from "react";
import {SCROLL_OFFSET, SOCIAL_LINKS, NAV_ITEMS, HOME_LINK, NAV_ICONS_COLOR} from "../constants";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState(HOME_LINK);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > SCROLL_OFFSET);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const onUpdateActiveLink = (link) => setActiveLink(link);

    return (
        <Navbar variant={'dark'} fixed="top"
                collapseOnSelect expand="lg"
                className={`sticky-top shadow-lg border-bottom ${scrolled ? "scrolled" : ""}`}
                style={{borderBottomColor: `${NAV_ICONS_COLOR}`, backgroundColor: `#000000`}}
        >
            <Container>
                <Navbar.Brand href="#">
                    <div className={'logo'}><span style={{color: `${NAV_ICONS_COLOR}`}}>O</span>la.</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <i className="fas fa-bars" style={{color: `${NAV_ICONS_COLOR}`}}></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        {NAV_ITEMS && Object.keys(NAV_ITEMS).map((key, index) => {
                            const navItem = NAV_ITEMS[key];
                            return (
                                <Nav.Link key={index} href={navItem.link}
                                          className={'me-5 nav-link ' + (activeLink === navItem.activeLink ? 'active' : '')}
                                          onClick={() => onUpdateActiveLink(navItem.activeLink)}>
                                    <i className={navItem.icon}
                                       style={{color: `${NAV_ICONS_COLOR}`}}></i> {navItem.name}
                                </Nav.Link>
                            )
                        })}
                    </Nav>
                    <Nav.Link href='/#contact-info' className={'me-5 nav-link'}>
                        <i className="fas fa-envelope" style={{color: `${NAV_ICONS_COLOR}`}}></i> Contact Me
                    </Nav.Link>
                    <span className="navbar-text">
                            <div className={'social-icons'}>
                                {SOCIAL_LINKS && Object.keys(SOCIAL_LINKS).map((key, index) => {
                                    const socialLink = SOCIAL_LINKS[key];
                                    return (
                                        <a key={index} href={socialLink.link} className="me-5">
                                            <i className={socialLink.icon} style={{color: `${NAV_ICONS_COLOR}`}}></i>
                                        </a>
                                    )
                                })}
                            </div>
                        </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar