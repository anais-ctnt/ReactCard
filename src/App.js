import React from 'react';
import './App.scss';

const sampleCard = {
  title: "Delectus eaque",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius magnam animi pariatur libero tempora esse neque saepe explicabo at incidunt. Quaerat !",
  image: "https://i.imgur.com/wmigLDH.png",
  favorite: false,
}

const App = () => {
 
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
          className="fav">&#9733;
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

export default App;
