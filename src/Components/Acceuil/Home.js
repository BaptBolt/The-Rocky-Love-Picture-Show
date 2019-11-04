import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

class Home extends React.Component{
  constructor(){
    super()
  }

  playSong = () =>{
    const song = new Audio('./asset/musique.mp3')
    song.play()
  }


  render(){
    return(
      <div>
        <button type='input' onClick={this.playSong}>Song</button>
        <h1 className = 'Title'>The Rocky<br/>Love<br/>Picture Show</h1>
        <img src ={`${process.env.PUBLIC_URL}/asset/text.gif`}/><br/>
        <img className="Arrow" src ={`${process.env.PUBLIC_URL}/asset/fleche.png`}/><br/>
        <Link to='/form'><button className='Subscribe'><img src ={`${process.env.PUBLIC_URL}/asset/bouche.png`}/></button></Link>
        
      </div>  
    )
  }
}

export default Home;