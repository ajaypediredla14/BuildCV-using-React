import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import {HomeRounded,WhatsApp} from '@material-ui/icons';
import resumeData from "../../utils/resumeData";
import CustButton from '../Button/Button';
import './Header.css';

const Header = (props) => {
	const pathName = props?.location?.pathname;
	return (
		<Navbar expand='lg' sticky='top' className='header'>
			<Nav.Link as={NavLink} to='/' className='header_navlink'>
				<Navbar.Brand className='header_home'>
					<HomeRounded />
				</Navbar.Brand>
			</Nav.Link>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav className='header_left'>
				<Nav.Link as={NavLink} to="/" className={pathName === "/portfolio" ? "header_link" : "header_link_active"}>
				Resume
				</Nav.Link>
				<Nav.Link as={NavLink} to="/portfolio" className={pathName === "/portfolio" ? "header_link_active" : "header_link"}>
				Portfolio
				</Nav.Link>
				</Nav>
				<div className='header_right'>
					{Object.keys(resumeData.socials).map((Key,id) =>(
							<a key={id} href={resumeData.socials[Key].link} target='_blank' rel="noreferrer">
								{resumeData.socials[Key].icon}
							</a>
						))}
					<CustButton text={'Hire Me'} link={"https://wa.me/919390181313"} icon={<WhatsApp />}/>
				</div>
			</Navbar.Collapse>

		</Navbar>
		);
};

export default Header;