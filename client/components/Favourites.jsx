import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {TextField,RaisedButton} from 'material-ui';
import superagent from 'superagent';
import {Link} from 'react-router-dom';
import DisplayMovie from './DisplayMovie.jsx';


export  default class Favourites extends Component{
	constructor(props){
		super(props)
		this.state={
            movies:[]			
		}
	}
	componentWillMount(){
        this.getMovies();
    }
	getMovies(){
       superagent.get("/movie/fetchFav")
       .end((err,res)=>{
           console.log(err,res);
           if(err){

           }else{
               this.setState({movies:res.body});
           }
       })
           
	}
	render(){
		return(		
	    	<div >
                <div className="favBack">
                    <Link to='/'><RaisedButton primary={true} label="Back To Search" /></Link>
                </div>
                <div>
                    {this.state.movies.length==0?
                        <div>NO FAVOURITES YET</div>:
                        <DisplayMovie movies={this.state.movies} from="fav"/>
                    }
                </div>
            </div>
		)
	
	}
}