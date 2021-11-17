import React from 'react';
import './App.css';
import { PLACES } from './shared/places';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/Home'
import Projects from './pages/Projects';
import ResumePage from './pages/ResumePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container} from '@material-ui/core';
import Nav from './components/Nav';
import Box from '@material-ui/core/Box';
//mport Container from '@material-ui/core/Container';



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
        flexDirection: 'column',
        minHeight: '100vh',
        height: "100%"
      },
      footer: {
        padding: "2%",
        marginTop: 'auto',
        marginLeft: 'auto',
      }
    });
    return (
      <div className="App">
        <CssBaseline />
        <Container className={classes.root}>

          <Router>
          <Box my={5}>
            <Nav />
          </Box>
            <Routes>
              <Route path='/*' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='resume' element={<ResumePage/>}/>
            </Routes>
          </Router>
        </Container>

      </div>
    );
	}
}

export default App;