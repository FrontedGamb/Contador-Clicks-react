import './App.css';
import  freeCodeCampLogo from './img/logo.png'
import { Buttonaction } from './components/boton';
import { Contador } from './components/contador';
import { useState } from 'react';
function App() {

const[numClics,setNumClics] = useState(0);

const tryClick  = ()=>{
 setNumClics(numClics + 1);

}
const reiniciar = () =>{
  setNumClics(0)
}


  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
          <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
          />
      </div>

      <div className='main-container'>
        <Contador
        numClics={numClics}
        />
        <Buttonaction
        text='Click'
        clickButton={true}
        tryClick={tryClick}
          />

          <Buttonaction
          text='Reiniciar'
          clickButton={false}
          tryClick={reiniciar}
          />
      </div>
    </div>
  );
}

export default App;
