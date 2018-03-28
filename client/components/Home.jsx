import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {TextField,RaisedButton} from 'material-ui';
import superagent from 'superagent';
import SearchBar from './SearchBar.jsx';



export  default class Home extends Component{
	constructor(props){
        super(props)
        
    }
   
	
	render(){
		return(		
      		<div className="container-box">
				    <SearchBar />
			</div>
			
			
		)
	
	}
}
