import React, {useState } from "react";
import './Portfolio.css';
import {Dialog,DialogTitle,DialogContent,DialogActions,Grid,Tab,Tabs,Card,CardActionArea,CardMedia,CardContent,Typography, Grow} from '@material-ui/core';
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
	const [tabValue,setTabValue]=useState("All");
	const [projectDialog,setProjectDialog] =useState(false);

	return (
		<Grid container spacing={1} className="section pb_45 pt_45">
			<Grid item className="section_title mb_20">
				<span></span>
				<h6 className="section_title_text active">Portfolio</h6>
			</Grid>

			<Grid item xs={12}>
			<Tabs 
				value={tabValue} 
				indicatorcolor='white' 
				className='customTabs' 
				onChange={(event,newValue)=>setTabValue(newValue)}>
				<Tab 
				label="All"
				value="All"
				className={
					tabValue==="All"?"customTabs_item active" : "customTabs_item"
				}/>
				{[...new Set(resumeData.projects.map(item=> item.tag))].map(
					(tag,id)=>(
						<Tab
						key={id}
						label={tag}
						value={tag}
						className={
							tabValue === tag ?"customTabs_item active":"customTabs_item"
						}
						/>
						)
					)
				}
			</Tabs>
			</Grid>

			<Grid item xs={12}>
				<Grid container spacing ={3}>
					{resumeData.projects.map((project,id) => (
					   <>
					   	{tabValue === project.tag || tabValue==="All" ? (
					   	<Grid item xs={12} sm={6} md={4} key={id}>
						  <Grow in timeout={1000}>
							<Card className='customCard' onClick={()=>setProjectDialog(project)}>
							  <CardActionArea>
							 	<CardMedia className="customCard_image" image={project.image} title={project.title}/>
							 	<CardContent>
							 		<Typography varient='body2' className='customCard_title'>{project.title}</Typography>
							 		<Typography varient='body2' className='customCard_description'>{project.description}</Typography>
							 	</CardContent>
							  </CardActionArea>
							</Card>
						   </Grow>
						</Grid>
					   		) :null}
				         </>  
						))}
				</Grid>
			</Grid>

			<Dialog open={projectDialog} onClose={()=>setProjectDialog(false)} className="projectDialog">
			<DialogTitle onClose={()=>setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
			<img src={projectDialog.image} alt="" className="projectDialog_image"/>
			<DialogContent>
				<Typography className="projectDialog_description">{projectDialog.description}</Typography>
			</DialogContent>
			<DialogActions className="projectDialog_actions">
				{projectDialog?.links?.map((link,id) => (
					<a key={id} href={link.link} target='_blank' rel="noreferrer" className="projectDialog_icon">{link.icon}</a>
					))}
			</DialogActions>
		</Dialog>

		</Grid>
		);
};

export default Portfolio;