import React, {Component} from 'react';
import './movie.css';
import MovieData from '../Data/datamovie.json';

class Movie extends Component {
    render(){
      return (
        <div className="page">
          
            <div className="jumbo-movie" >
              <img src="https://images3.alphacoders.com/104/thumb-1920-1041825.jpg"/>
            </div>

            <div style={{backgroundColor: "black"}} className="rectangle-movie"></div>
  
            <div className="judul-movie">
              <img src="https://hyperpix.net/wp-content/uploads/2019/09/joker-logo-font-download-1200x900.jpg"/>
            </div>
  
            <textarea className="summary-movie">
                In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. 
                He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker
            </textarea>
  
            <div className="kategori-movie">
              <p>2019</p>
              <p className="kate-movie">Movies</p>
            </div>
  
              <button className="watch-movie">WATCH NOW !</button>
          
              <p className="navmovies">Movies</p>

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
        </div>
      )
    }
  }
  
  export default Movie;