import React, { Component } from 'react';
import './detilfilm.css';
import ReactPlayer from 'react-player';
import DataSeries from '../Data/dataseries.json';

class DetilSeries extends Component {
    tombolcarousel(){
        let x=1;
    }

    constructor(){
        super()
        this.state = {x:0}
    }

    handleClick(){
        this.setState({
            x : this.state.x + 1
        })
    }

    render(){
        let x = this.state.x
        let ids=DataSeries [x];

            return (
                <div className="video-detil">
                    <div>
                        <ReactPlayer url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" 
                        playing={false} 
                        controls={true} 
                        width='100%'
                        className="video-preview"/>           
                    </div>
                    <div className="detail-warper">
                        <img className="gambar-preview" src={ids.image}/>
                        
                        <div>
                            <p className="judul-preview">{ids.name}</p>
                            <p className="tahun-preview">{ids.year}</p>
                            <p className="genre-preview">{ids.genre}</p>
                            <p className="sinposis-preview">The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.</p>
                            
                        <ReactPlayer url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" 
                        playing={false} 
                        controls={true} 
                        width='400px'
                        height='300px'
                        className="next-episode"/>
                        <button className="new-episode" onClick={this.handleClick.bind(this)}>Next episode {x}</button>           
                        </div>
                    </div>
            </div>
        );
    }
};

export default DetilSeries;