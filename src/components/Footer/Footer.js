import React from 'react';
import './Footer.css';
import { Typography } from '@material-ui/core';
import {Row,Col} from 'react-bootstrap';
import resumeData from '../../utils/resumeData';


const Footer = () => {
	return (
		<Row className='footer ml-0' sm={8}>
			<Col className='footer_left'>
				<Typography className='footer_name'>{resumeData.name}</Typography>
			</Col>
			<Col className='footer_right' sm={4}>
				<Typography className='footer_copyright'>
				Designed and Developed by <a href='/' target='_blank'>Ajay Pediredla</a>
				</Typography>
			</Col>
		</Row>
		);
};

export default Footer;