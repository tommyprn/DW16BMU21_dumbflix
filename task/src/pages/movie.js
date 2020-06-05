import React, {Component} from 'react';
import './movie.css';
import Header from '../component/header';
import Headlog from '../component/headlog';
import Mov from '../component/mov';

class Movie extends Component {
    render(){
      return (
        <div className="page">
          <Header />
          
            <div className="jumbo" >
              <img src="https://images3.alphacoders.com/104/thumb-1920-1041825.jpg"/>
            </div>
  
            <div className="judul">
              <img src="https://hyperpix.net/wp-content/uploads/2019/09/joker-logo-font-download-1200x900.jpg"/>
            </div>
  
            <textarea className="summary">
            In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. 
            He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker
            </textarea>
  
            <div className="kategori">
              <p>2019</p>
              <p className="kate">Movies</p>
            </div>
  
              <button className="watch">WATCH NOW !</button>
          
          <Mov/>

          <div className="latest">
                <div className="thumbnail-movies-2">
                    <div class="row justify-content-between">
                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/102421753_3058925867480113_7147209348756799488_n.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=IuHRpb4fv4oAX-hyYRc&_nc_ht=scontent-sin6-2.xx&oh=282be2dd549dae288a3053d6f850e0ef&oe=5EFCC1A2" className="timbul"/>
                                <p></p>
                                <p>Serigala Terakhir</p>
                                <p>2009</p>
                            </div>
                        </div>     

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/100773536_3058925860813447_3837789450637672448_n.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=-4jkMOAqAeYAX8c5Iy1&_nc_ht=scontent-sin6-1.xx&oh=e34d1e33a6d380da95004d3422a32db0&oe=5EFCD671" className="timbul"/>
                                <p></p>
                                <p>Grave of the Fireflies</p>
                                <p>1988</p>
                            </div>
                        </div>    

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/102406154_3058925804146786_2400920897813741568_n.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=qfFXcnTEgyYAX8JDI4h&_nc_ht=scontent-sin6-1.xx&oh=eb7f49c09ba7ffc1ec78191ffa3d99da&oe=5EFD3E99" className="timbul"/>
                                <p></p>
                                <p>Suicide Squad</p>
                                <p>2016</p>
                            </div>
                        </div>

                        <div class="col justify-content-between">    
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/82859128_3058925794146787_7563103362879586304_n.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=tJ9ibbMyJqkAX_UMaBO&_nc_ht=scontent-sin6-1.xx&oh=18b01214c8285010e6114eb23bf0173e&oe=5EFFDCAD" className="timbul"/>
                                <p></p>
                                <p>My Neighbor Totoro</p>
                                <p>1988</p>                       
                            </div>
                        </div>

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/101087503_3058925797480120_1501081870132051968_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=hWENElqj_sUAX_f5hLs&_nc_ht=scontent-sin6-1.xx&oh=a8c3c6cc81f334a844355dec875111f8&oe=5EFDEEC5" className="timbul"/>
                                <p></p>
                                <p>Frozen II</p>
                                <p>2019</p>
                            </div>
                        </div>

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/101961086_3058925784146788_3182123917938524160_n.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=1SE3NOXrQVwAX9OYgl1&_nc_ht=scontent-sin6-1.xx&oh=7ef295481dd410fc3f9191e7ca580af0&oe=5EFDB453" className="timbul"/>
                                <p></p>
                                <p>A Quiet Place</p>
                                <p>2020</p>
                            </div>
                        </div>    
                    </div>
                </div> 
            </div>    
        </div>
      )
    }
  }
  
  export default Movie;