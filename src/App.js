import React, {Component} from 'react';
import './App.scss';

const sampleCard = {
  title: "Delectus eaque",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius magnam animi pariatur libero tempora esse neque saepe explicabo at incidunt. Quaerat !",
  image: "https://i.imgur.com/wmigLDH.png",
  favorite: false,
}

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isFavorite: sampleCard.favorite
    };
  }

  isFavorite = () => {
    const notFavorite = !this.state.isFavorite;
    this.setState({isFavorite: notFavorite})
  }

  render(){
    return(
      <div className="cardContainer">
        <img className="cardImg"
        src={sampleCard.image}
        alt={sampleCard.title}
          />
        <h2 className="cardTitle">
          {sampleCard.title}
        </h2>
        <p className="cardDescription">{sampleCard.description}</p>
        <div className="cardIcons">
          <div className="cardIcon">
          <div 
            onClick={this.isFavorite}
            className={this.state.isFavorite ? "fav" : "notFav"}>&#9733;
            </div>
            <p>FAVORITE</p>
          </div>
          <div className="cardIcon">
            <div className="share">&#10150;</div> 
            <p>SHARE</p>
          </div>
        </div>
      </div>
      );
  }
}



export default App;
