import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { PLACES } from './shared/places';
import Greet from './components/greet';
import {projects} from './services/data'
import ProjectCard from './components/ProjectCard'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			places: PLACES
		};
	}

	
	render(){
    const classes = makeStyles({
      root: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexGrow: 1,
      }
    });
		return (
      
			<div className='App'>
        <Grid container spacing={1} className={classes.root}>
          {projects.map(project => 
          <Grid item sm={4} key={projects.indexOf(project)}>
            <ProjectCard project={project} />
          </Grid>)}
        </Grid>
			</div>
		);
	}
}

export default App;