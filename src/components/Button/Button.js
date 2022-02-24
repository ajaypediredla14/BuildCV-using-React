import React from 'react';
import {Button} from '@material-ui/core';

import './Button.css';

const CustButton =({text,icon,link})=>{
	return (
		<Button className='custom_btn' target="_blank" href={link} endIcon={
		icon ?<div className='btn_icon_container'>{icon}</div> : null}>
		<span className='btn_text'>{text}</span> 
		</Button>	
		);
};

export default CustButton;