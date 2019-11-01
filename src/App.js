import React from "react";

import Container from "./components/Container"

import Header from "./components/Header"

import Nav from "./components/Nav"

import ImageCard from "./components/ImageCard"

import images from "./images.json"



class App extends React.Component {
  
  state = {

    images: images,
    score: 0,
    topScore: 0,
    maxScore: 12,
    isCorrect: true,
    
  }




  clickImage = id => {

    const images = this.state.images;

    const imageClicked = images.filter(image => images.id === id);

    if(!imageClicked.clicked) {

      imageClicked.clicked = true;

      this.shuffleImages();

      this.correctClick();

      this.setState({images});

    } else {

      this.incorrectClick();

    }

  }


  shuffleImages = toShuffle => {

    toShuffle.sort((a, b) => {

      return 0.5 - Math.random();

    });

  }


  correctClick = () => {

    this.setState({isCorrect: true});

    if (this.state.score + 1 > this.state.topScore) {

      this.setState({ topScore: this.state.topScore + 1 });

    }

    if (this.state.score + 1 >= this.state.maxScore) {

      this.setState({

        score: this.state.score + 1,

        // message: "CONGRATS! YOU WIN!",

        // messageClass: "correct"

      });

    }else{

      this.setState({

        score: this.state.score + 1,

       // message: "YOU GUESSED CORRECTLY!",

       // messageClass: "correct"

      });

    }

  }



  incorrectClick = () => {

    this.setState({

      isCorrect: false,

      // message: "INCORRECT. PLAY AGAIN?"

    })

    this.reset();

  }


  reset = id => {

    const images = this.state.images;

    for (let i = 0; i < images.length; i++) {

      images[i].clicked = false;

    }

    this.setState({score: 0})

  }



  render () {

    return (
      <Container>
        <Header>CLICKY GAME</Header>
        <Nav>
          Score: {this.state.score}
        </Nav>
        <ImageCard></ImageCard>
      </Container>
    )
  }

}

export default App;
