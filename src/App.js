import React from "react";

import Container from "./components/Container";

import Topdiv from "./components/Topdiv";

import ImageCard from "./components/ImageCard";

import images from "./images.json";



class App extends React.Component {
  
  state = {

    images: images,
    score: 0,
    topScore: 0,
    maxScore: 8,
    isCorrect: true,
    message:""
  }




  clickImage = id => {

    console.log(id)

    const character = this.state.images;

    const clickedImage = character.filter(image => image.id === id);

    if (!clickedImage[0].clicked) {

      clickedImage[0].clicked = true;

      console.log(clickedImage)

      this.correctClick();

      this.shuffleImages(images);

      this.setState({images})

    }else{

      this.incorrectClick()

    }

    


  }


  shuffleImages = images => {

    images.sort((a, b) => {

      return 0.5 - Math.random();

    });

  }


  correctClick = () => {
    
    this.setState({isCorrect: true})

    if (this.state.score + 1 > this.state.topScore) {

      this.setState({ topScore: this.state.topScore + 1 });

    }

    if (this.state.score + 1 >= this.state.maxScore) {
      
      this.setState({

        score: this.state.score + 1,

        message: "CONGRATS! YOU WIN!!!",

        topScore: 0

      });

      this.reset()

    } else {

      this.setState({

        score: this.state.score + 1,

        message: "YOU CLICKED CORRECTLY!"
      });
    }
  }


  incorrectClick = () => {

    this.setState({

      isCorrect: false,

      message: "WRONG! WRONG!! WRONG!!!"
    
    })

    this.reset();

  }


  reset = () => {

    const images = this.state.images;

    for (let i = 0; i < images.length; i++) {

      images[i].clicked = false;

    }

    this.setState({ score: 0 });

  }



  render () {

    return (
      <Container>
        <Topdiv 
          message={this.state.message}
          topScore={this.state.topScore}
          score={this.state.score}
        />
        {this.state.images.map(image => (
        
          <ImageCard
            clickImage={this.clickImage}          
            key={image.id}
            id={image.id}
            name={image.name}      
            image={image.image}              
          />
        ))}
       
      </Container>
    )
  }

}



export default App;
