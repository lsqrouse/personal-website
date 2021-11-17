import React from 'react';
import './App.css';
import { PLACES } from './shared/places';
import { makeStyles } from '@material-ui/core/styles';
import Main from './components/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
      <div className="App">
        <Router>
          <Routes>
            <Route path='/*' element={<Main/>}/>
          </Routes>
        </Router>
      </div>
    );
	}
}

export default App;