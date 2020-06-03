import React, {Component} from 'react';
import '../App.css';
import jumbo from '../jumbo.png';
import witcher from '../witch.png';
import Header from '../component/header';
import Content from '../component/content';


class Home extends Component {
  render(){
    return (
      <div className="homes">
        <Header />
        <div className="preview">
                <img src={jumbo} alt="jumbo"/>

                    <div className="judul">
                        <img src={witcher} alt="witch"/>
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
            </div>
        <Content />
      </div>
    )
  }
}

export default Home;
