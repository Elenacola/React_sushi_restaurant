

import React,{Component} from 'react';
import './App.css';
import Navbar from './componenti/Navbar';
import Card from './componenti/card';
import california from './images/california.png';
import dragon from './images/dragon.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';
import philadelphia from './images/philadelphia.png';
import dynamite from './images/dynamite.png'



class App extends Component {
  state = {
    cards:[
      {id:0, nome:"California", prezzo:1.99,immagine: california,quantità :0},
      {id:1, nome:"Dragon", prezzo:2.99,immagine: dragon, quantità :0},
      {id:2, nome:"Rainbow", prezzo:1.09,immagine: rainbow,quantità :0},
      {id:3, nome:"Shrimp", prezzo:3.99,immagine: shrimp,quantità :0},
      {id:4, nome:"Philadelphia", prezzo:3.00,immagine: philadelphia,quantità :0},
      {id:5, nome:"Dynamite", prezzo:1.00,immagine: dynamite,quantità :0},
    ]
  }

  //CANCELLAZIONE CARD SUSHI//

  handleDelete = cardId =>{
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards});
  }

  //aggiunta pezzi sushi//senza id/

  handleIncrement= card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id]={...card};
    cards[id].quantità++;
    this.setState({cards});
  }

  render() {
  return (
    <>
     <Navbar />
     <div className='container'> 
      <h1>What do you want?</h1>
       <hr></hr>
       <div className='row'>
        {this.state.cards.map(card=> (
           <Card
           Key ={card.id}
           onDelete={this.handleDelete}
           onIncrement={this.handleIncrement}
           card={card} />
         ))}
       </div>
     </div>

</>
  );
  }
}

export default App;
