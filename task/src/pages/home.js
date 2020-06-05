import React, {Component} from 'react';
import '../App.css';
import Header from '../component/header';
import Headlog from '../component/headlog';
import Seri from '../component/seri';
import Mov from '../component/mov';


class Home extends Component {
  render(){
    return (
      <div className="homes">
        <Header />
        
          <div className="jumbo" >
            <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/101701370_3056727111033322_8855875788692520960_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_eui2=AeHxTYZZG0eZeG4uKpPet90KR6zylArG8vdHrPKUCsby9w2jdE8sYuI63Z9zK_UO8mFqfDTfC2BvlgsArRmg5MUh&_nc_ohc=5z1HmtZedf0AX8rDd2h&_nc_ht=scontent-sin6-2.xx&oh=4db110d5f59deb98c0c3bc05cd363e24&oe=5EFE084B"/>
          </div>

          <div className="judul">
            <img src="http://pngimg.com/uploads/witcher/witcher_PNG14.png"/>
          </div>

          <textarea className="summary">
            Geralt of Rivia, a solitary monster hunter, struggles to find his place in
            a world where people often prove more wicked than beast
          </textarea>

          <div className="kategori">
            <p>2019</p>
            <p className="kate">TV Series</p>
          </div>

            <button className="watch">WATCH NOW !</button>
        
        <Seri/>
        <Mov/>
      </div>
    )
  }
}

export default Home;
