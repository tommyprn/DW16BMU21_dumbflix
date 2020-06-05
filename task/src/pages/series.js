import React, {Component} from 'react';
import './series.css';
import Header from '../component/header';
import Headlog from '../component/headlog';
import Seri from '../component/seri';

class Series extends Component {
    render(){
        return (
            <div className="page">
            <Header />
          
            <div className="jumbo" >
              <img src="https://images.alphacoders.com/107/thumb-1920-1072652.jpg"/>
            </div>
  
            <div className="judul">
              <img src="https://lingopie.com/public/learn-spanish-with-casa-de-papel/images/lacasa.png"/>
            </div>
  
            <textarea className="summary">
                Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.
            </textarea>
  
            <div className="kategori">
              <p>2017</p>
              <p className="kate">TV Series</p>
            </div>
  
            <button className="watch">WATCH NOW !</button>
        
        <Seri/>

        <div className="latest">
                <div className="thumbnail-movies-2">
                    <div class="row justify-content-between">
                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/101032610_3059301854109181_8321189765210701824_n.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=VW8UCCTHRGkAX9T4Pj5&_nc_ht=scontent-sin6-1.xx&oh=a826f28bbb4d070ef654d1993c075dbd&oe=5F001016" className="timbul"/>
                                <p></p>
                                <p>You</p>
                                <p>2018</p>
                            </div>
                        </div>     

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/82372561_3059301740775859_7654935488859471872_n.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=03eJ-aVXkm4AX-H6gG-&_nc_ht=scontent-sin6-1.xx&oh=28a9fab4baa335dda77f34c87b7edbfa&oe=5EFD1E98" className="timbul"/>
                                <p></p>
                                <p>Castlevania</p>
                                <p>2017</p>
                            </div>
                        </div>    

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/101404869_3059301717442528_6955875973128519680_n.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=iGJeTHvui8YAX_mVEuk&_nc_ht=scontent-sin6-1.xx&oh=0922aeb179d21079ec7726db446e80f9&oe=5EFEF941" className="timbul"/>
                                <p></p>
                                <p>Locke & Key</p>
                                <p>2020</p>
                            </div>
                        </div>

                        <div class="col justify-content-between">    
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/103047143_3059301700775863_4322908003880665088_n.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=MMP-YomTvb8AX9VARc5&_nc_ht=scontent-sin6-1.xx&oh=d98da4487f117eba2c894b1863695244&oe=5F006419" className="timbul"/>
                                <p></p>
                                <p>The OA</p>
                                <p>2016</p>                       
                            </div>
                        </div>

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/100063323_3059301694109197_5755543286613803008_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=lcFY8OA0neUAX_UGwcX&_nc_ht=scontent-sin6-1.xx&oh=3ab555e729144c64ba9facce51096eb1&oe=5EFF54E2" className="timbul"/>
                                <p></p>
                                <p>Panji Millenium Man</p>
                                <p>1999</p>
                            </div>
                        </div>

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/101550832_3059301660775867_5724406367150669824_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=0VZlyA0rU-0AX_OK5Fc&_nc_ht=scontent-sin6-1.xx&oh=06af19ec2ae3ef453dc21fcc1c802733&oe=5F001AD3" className="timbul"/>
                                <p></p>
                                <p>Reply 1988</p>
                                <p>2015</p>
                            </div>
                        </div>    
                    </div>
                </div> 
            </div>    
        
        </div>
        )
    }
}
      
export default Series;   