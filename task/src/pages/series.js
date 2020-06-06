import React, {Component} from 'react';
import './series.css';
import SeriesData from '../Data/dataseries.json';

class Series extends Component {
    render(){
        return (
            <div className="page">
          
            <div className="jumbo-series" >
              <img src="https://images.alphacoders.com/107/thumb-1920-1072652.jpg"/>
            </div>

            <div style={{backgroundColor: "black"}} className="rectangle-series"></div>
  
            <div className="judul-series">
              <img src="https://lingopie.com/public/learn-spanish-with-casa-de-papel/images/lacasa.png"/>
            </div>
  
            <textarea className="summary-series">
                Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.
            </textarea>
  
            <div className="kategori-series">
              <p>2017</p>
              <p className="kate-series">TV Series</p>
            </div>
  
            <button className="watch-series">WATCH NOW !</button>
        
            <p className="navseries">TV Series</p>
                
            <div className="thumbnail-series-page">
                <div class="row justify-content-between">
                    {SeriesData.map((seriesDetail, i)=>{
                    return(   
                        <div class="row-2">
                            <img className="timbul" src={seriesDetail.image}/>
                            <p></p>                           
                            <p>{seriesDetail.name}</p>
                            <p className="series-year">{seriesDetail.year}</p>          
                        </div>
                    )
                    })}    
                </div> 
            </div>            
               
        
        </div>
        )
    }
}
      
export default Series;   