import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { PLACES } from '../shared/places';

class Test extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			places: PLACES
		};
	}

	
	render(){
		return (
			<div className='App'>
                <p>Hello There, this is test</p>
                <Link to="/projects">
                    <button variant="outlined">
                        Projects
                    </button>
                </Link>
			</div>
		);
	}
}

export default Test;