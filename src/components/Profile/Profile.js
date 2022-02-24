import { Typography,Button } from '@material-ui/core';
import React from 'react';
import CustTimeline, {CustomTimelineSeparator} from "../Timeline/Timeline";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import jay from '../../assets/images/jay.jpg';
import resumeData from "../../utils/resumeData";
// import CustButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import './Profile.css';
import resume from '../../assets/pdf/resume.pdf';


const CustTimelineItem = ({ title, text, link}) => (
	<TimelineItem>
		<CustomTimelineSeparator />
		<TimelineContent className='timeline_content'>
		{link ? (
			<Typography className='timelineItem_text'>
				<span>{title}:</span>{" "}
				<a href={link} target="_blank" rel="noreferrer">
				{text}
				</a>
			</Typography>
			):(
			 <Typography className='timelineItem_text'>
			 <span>{title}:</span> {text}
			 </Typography>
			)}
		</TimelineContent>
	</TimelineItem>
);

const Profile = () => {
	return ( 
		<div className='profile container_shadow'>
			<div className="profile_name">
				<Typography className="name">{resumeData.name}</Typography>
				<Typography className="title">{resumeData.title}</Typography>
			</div>

			<figure className='profile_image'>
				<img src={jay} alt="Ajay Pediredla"/>
			</figure>

			<div className='profile_information'>
				<CustTimeline icon={<HomeOutlinedIcon />}>
					<CustTimelineItem title='Name' text={resumeData.name} />
					<CustTimelineItem title='Title' text={resumeData.title} />
					<CustTimelineItem title='Email' text={resumeData.email} />
					{Object.keys(resumeData.socials).map((key,id) => (
						<CustTimelineItem key={id} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
						))}
				</CustTimeline>
				<br/>
				<div className='button_container' style={{display: 'flex'}}>
				{/*<CustButton text={'Download Cv'} icon={<GetAppIcon />}/>*/}
				<Button 
				className='custom_btn' 
				download="Ajay"
				href={resume}
				endIcon={<div className='btn_icon_container'><GetAppIcon/></div>}>
		  		{<span className='btn_text'>DOWNLOAD CV</span> }
				
				</Button>
				</div>
			</div>
		</div>
		);
};

export default Profile;