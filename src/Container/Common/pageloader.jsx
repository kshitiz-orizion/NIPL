import React, {Component } from 'react';
import '../../Styles/header.css';

class PageLoader extends Component{
	render(){
		return(
			<div >
				<img className="PageLoader" src={process.env.PUBLIC_URL + '/Loader.svg'} alt="search"/>
			</div>
		)
	}
}

export default PageLoader