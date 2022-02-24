import {Grid,Typography} from '@material-ui/core';
import React,{Component} from 'react';
import {Icon,Box,TextField,Button} from '@material-ui/core';
import './Resume.css';
import resumeData from "../../utils/resumeData";
import CustTimeline, {CustomTimelineSeparator} from "../../components/Timeline/Timeline";
import WorkIcon from '@material-ui/icons/Work';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineContent from '@material-ui/lab/TimelineContent';
import SchoolIcon from '@material-ui/icons/School';
import axios from 'axios';

class Form extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: '',
			email: '',
			message: ''
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSubmitChange = this.handleEmailChange.bind(this);	
	}
	handleNameChange = event => {
		this.setState({
			name: event.target.value
		})
	}
	handleEmailChange = event => {
		this.setState({
			email: event.target.value
		})
	}
	handleMessageChange = event => {
		this.setState({
			message: event.target.value
		}) 
	}
	handleSubmitChange = event=> {
		// alert(`${this.state.name} ${this.state.email} ${this.state.message}`);
		event.preventDefault();
		const data = JSON.stringify({
			StrangerName: this.state.name,
            StrangerEmail: this.state.email,
            StrangerMessage: this.state.message
		});
		axios
			.post('http://127.0.0.1:8000/resume/'
				,data,
				{
					headers: {"content-Type": "application/json"},
				})
			.then((response )=>{
				console.log(response);
			},(error) => {
				console.log(error);
			});
		this.setState({
			name: '',
			email: '',
			message: ''
		});
	};

render() {
	return (
	<React.Fragment>	
		<Grid container className="section pb_45 pt_45">
			<Grid item className='section_title mb_30'>
				<span></span>
				<Typography className='section_title_text'>About Me</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
			</Grid>
		</Grid>

		<Grid container className="section pb_45">
			<Grid item className='section_title mb_30'>
				<span></span>
				<h6 className='section_title_text'>Resume</h6>
			</Grid>
		<Grid item xs={12}>
			<Grid container className='resume_Timeline'>
				<Grid item sm={12} md={6} >
					<CustTimeline icon={<WorkIcon />} title='Work Experience'>
						{resumeData.experiences.map((experience)=>(
							<TimelineItem>
								<CustomTimelineSeparator />
								<TimelineContent className='timeline_content'>
									<Typography className='timeline_title'>
										{experience.title}
									</Typography>
									<Typography variant='caption' className='timeline_date'>
										{experience.date}
									</Typography>
									<Typography variant='body2' className='timeline_description'>
										{experience.description}
									</Typography>
								</TimelineContent>
							</TimelineItem>
							))}
					</CustTimeline>
				</Grid>


				<Grid item sm={12} md={6}>
				<CustTimeline icon={<SchoolIcon />} title='Education'>
						{resumeData.education.map((education)=>(
							<TimelineItem>
								<CustomTimelineSeparator />
								<TimelineContent className='timeline_content'>
									<Typography className='timeline_title'>
										{education.title}
									</Typography>
									<Typography variant='caption' className='timeline_date'>
										{education.date}
									</Typography>
									<Typography variant='body2' className='timeline_description'>
										{education.description}
									</Typography>
								</TimelineContent>
							</TimelineItem>
							))}
					</CustTimeline>
				</Grid>
			</Grid>
		</Grid>
		</Grid>

		<Grid container className="section pb_45">
			<Grid item className='section_title mb_30'>
				<span></span>
				<h6 className='section_title_text'>My Services</h6>
			</Grid>

			<Grid item xs={12}>
				<Grid container spacing={3} justify='space-around'>
					{resumeData.services.map((service) =>(
					<Grid item xs={12} sm={6} md={3}>
						<div className='service'>
						<Icon className='service_icon'>{service.icon}</Icon>
						<Typography className='service_title'>
										{service.title}
						</Typography>
						<Typography variant='body2' className='service_description'>
										{service.description}
						</Typography>
						</div>
					</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>

		<Grid container className='section graybg pb_45 p_50'>
			<Grid item className='section_title mb_30'>
				<span></span>
				<h6 className='section_title_text'>My Skills</h6>
			</Grid>
			<Grid item xs={12}>
				<Grid container justify='space-between' spacing={3}>
			{resumeData.skills.map((skill) => (
				<Grid item xs={12} sm={6} md={3}>
					<Box boxShadow={1} className='skill'>
					 <Typography variant='h6' className='skill_title'>
					 	{skill.title}
					 </Typography>
					 	{skill.description.map((element)=>(
					 			<Typography variant='body2' className='skill_description'>
					 				<TimelineDot variant={'outlined'} className='timeline_dot' />
					 				{element}
					 			</Typography>
					 		))}
					</Box>
				</Grid>
				))}
			</Grid>
			</Grid>
		</Grid>

		<Grid container className='section pt_45 pb_50' spacing={5}>
		   <Grid item xs={12} lg={7}>
			<Grid item className='section_title mb_30'>
				<span></span>
				<h6 className='section_title_text'>Contact Form</h6>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={3} >
					<Grid item xs={12} sm={6}>
						<TextField type="text" value={this.state.name} onChange={this.handleNameChange} fullWidth name='name' label='Name' />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField type="email" value={this.state.email} onChange={this.handleEmailChange} fullWidth name='email' label='Email' />
					</Grid>
					<Grid item xs={12}>
						<TextField type="text" value={this.state.message} onChange={this.handleMessageChange} fullWidth name='message' label='Message' multiline rows={4}/>
					</Grid>
					<Grid item xs={12}>
						<Button className='custom_btn' type="submit" onClick={this.handleSubmit}>
							<span className='btn_text'>Submit</span> 
						</Button>	
					</Grid>
				</Grid>
			</Grid>
			</Grid>
			<Grid item xs={12} lg={5}>
			<Grid item className='section_title mb_30'>
				<span></span>
				<h6 className='section_title_text'>Contact Information</h6>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Typography className='contactInfo_item'>
								<span>Address: </span> {resumeData.address}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography className='contactInfo_item'>
								<span>Phone: </span> {resumeData.phone}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography className='contactInfo_item'>
								<span>Email: </span> {resumeData.email}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Grid container className='contactInfo_socialsContainer'>
					{Object.keys(resumeData.socials).map((key)=>( 
						<Grid item className='contactInfo_social'>
							<a href={resumeData.socials[key].link}>
								{resumeData.socials[key].icon}
							</a>
						</Grid>
						))}
				</Grid>
			</Grid>
			</Grid>
		</Grid>
	</React.Fragment>
		);
};
}

export default Form;