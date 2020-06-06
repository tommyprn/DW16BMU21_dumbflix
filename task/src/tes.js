import React, {Component} from 'react';
import './pages/movie.css';
import MovieData from './Data/datamovie.json';
import Movie from './pages/movie';
import {Row,Col} from 'react-bootstrap'

class test extends Component {
    render(){
        return(
            <div className="thumbnail-movies-page">
                <div class="row justify-content-between">
                    {MovieData.map((movieDetail, i)=>{
                    return(   
                        <div class="row-2">
                            <img className="timbul" src={movieDetail.image}/>
                            <p></p>                           
                            <p>{movieDetail.name}</p>
                            <p className="movie-year">{movieDetail.year}</p>          
                        </div>
                    )
                    })}    
                </div> 
            </div>         
        )
    }
  }

  export default test;