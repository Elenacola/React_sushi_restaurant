
import React,{Component} from 'react';
import './App.css';
import Navbar from './componenti/Navbar';
import Card from './componenti/card';
import california from './images/california.png';
import dragon from './images/dragon.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';



class App extends Component {
  state = {
    cards:[
      {id:0, nome:"California", prezzo:1.99,immagine: california},
      {id:1, nome:"Dragon", prezzo:2.99,immagine: dragon},
      {id:2, nome:"Rainbow", prezzo:1.09,immagine: rainbow},
      {id:3, nome:"Shrimp", prezzo:3.99,immagine: shrimp},
    ]
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
            nome={card.nome}
            prezzo={card.prezzo}
            immagine={card.immagine} />
          ))}
       </div>
     </div>

</>
  );
  }
}

export default App;
