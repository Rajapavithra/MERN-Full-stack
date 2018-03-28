import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {TextField,RaisedButton} from 'material-ui';
import superagent from 'superagent';
import {Link} from 'react-router-dom';

import DisplayMovie from './DisplayMovie.jsx';


export  default class SearchBar extends Component{
	constructor(props){
		super(props)
		this.state={
			searchTerm:'',
			movies:[]

			
		}
	}
	searchTerm (e){
		this.setState({searchTerm:e.target.value});
	}
	getMovies(){
        var movies=[{"title":"ram"},{"title":"ram1"},{"title":"ram2"},{"title":"ram3"}]
		superagent
		.post("http://www.omdbapi.com/?s="+this.state.searchTerm+"&apikey=432d8db1")
		.end((err,res)=>{
		if(!err){
			this.setState({movies:res.body.Search});		
			}
		})
	}
	
	render(){

		return(		
				<div className="container-box">
					<span className="paddRight">
					<TextField  hintText="Enter Movie Name" onChange={this.searchTerm.bind(this)}/></span>
					<span className="paddRight">
					<RaisedButton primary={true} label="SUBMIT" onClick={this.getMovies.bind(this)} />
					</span>
					<span>
					<Link to="/fav"><RaisedButton secondary={true} label="View Favourites" /></Link>
					</span>
					<DisplayMovie movies={this.state.movies} />
				</div>
		)
	}
}