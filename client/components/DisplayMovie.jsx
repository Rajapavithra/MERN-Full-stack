import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Glyphicon, Modal} from 'react-bootstrap';
import {TextField,RaisedButton,Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
import superagent from 'superagent';


export  default class DisplayMvoie extends Component{
	constructor(props){
		super(props)
		this.state={
            movies:this.props.movies,
            from:this.props.from ||'',
            modalShow:false,
            modalMsg:''
        }
	}
	componentWillReceiveProps(nextProps){
        this.setState({movies:nextProps.movies})
    }
    addToFav(obj){
         superagent
        .post("/movie/addtoFav")
        .send(obj)
        .end((err,res)=>{
             if(err){
                this.setState({
                    modalMsg:"Exception occoured",
                    modalShow:true
                })
            }
                
            if(res.text=="Added to favourite"){
                var temp= this.state.movies;
                 var index=temp.indexOf(obj);
                 temp[index].favourite=true;
                this.setState({movies:temp});
            }
            this.setState({ modalMsg:res.text,modalShow:true});      
           
        })
    }
    fetchMovies(){
        superagent.get("/movie/fetchFav")
        .end((err,res)=>{
            console.log(err,res);
            if(err){
 
            }else{
                this.setState({movies:res.body});
            }
        })
    }
    removeFav(obj,from){
        superagent
        .post("/movie/removeFav")
        .send(obj)
        .end((err,res)=>{
            console.log(err,res)
            if(res.status==200){
                if(from=="fav"){
                         this.fetchMovies();
                         this.setState({ modalMsg:"removed from fav",modalShow:true});   
                 }
                else{
                     var temp= this.state.movies;
                     var index=temp.indexOf(obj);
                     temp[index].favourite=false;
                     this.setState({movies:temp});
                }
            }
            else{
                this.setState({
                    modalMsg:"Exception occoured",
                    modalShow:true
                })
            }
          
        })

    }
    closeModal(){
        this.setState({modalShow:false})
    }
	render(){
        return(		
				<div >
                     {this.state.movies.length==0 && this.state.from=="fav"?
                        <div>NO FAVOURITES YET</div>:
                        <div>
					        {this.state.movies.map(function(movie,index){
                                  movie.favourite=movie.favourite||false;
                                  return(
                                    <div className="movieCard">
                                        <Card >                           
                                            <CardHeader  title={movie.Title}>
                                                {movie.favourite?
                                                    <img className="favicon" src="../images/fav_selected.png" onClick={this.removeFav.bind(this,movie,this.state.from)}/>
                                                    :
                                                    <img className="favicon" src="../images/fav_empty.png" onClick={this.addToFav.bind(this,movie)}/>
                                                 }
                                             </CardHeader>
                                             <CardMedia overlay={<CardTitle title={movie.Title}> </CardTitle> }>  
                                                    <img className="cardMedia" src={movie.Poster} alt="poster" />
                                            </CardMedia>
                                        </Card>
                                    </div>
                                 );
                            }.bind(this))}
                        </div>
                    }
                    <Modal show={this.state.modalShow}>
                        <Modal.Body>
                          {this.state.modalMsg}
                          <RaisedButton className="rght" primary={true} label="ok" onClick={this.closeModal.bind(this)}/>
                        </Modal.Body>
                     </Modal>
				</div>
			
		)
	
	}
}