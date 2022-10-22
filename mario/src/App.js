import './App.css';
import Pipe from './img/pipe.png'
import Mario from './img/mario.gif'
import Lost from './img/game-over.png'
import Cloud from './img/clouds.png'

function App() {
  const mario = document.querySelector('.mario')
  
  function jump () {
    
    mario.classList.add('jump')

    setTimeout(() => {
      mario.classList.remove('jump')
    }, 500)
  }

  const loop = setInterval(()=> {
    
    const pipe = document.querySelector('.pipe')
    const pipePosition = pipe.offsetLeft
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '')
    


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 85 ){
      pipe.style.animation = 'none'
      pipe.style.left = `${pipePosition}px`

      mario.style.animation = 'none'
      mario.style.left = `${marioPosition}px`

      mario.src={Lost}
      mario.style.width='75px'
      mario.style.marginLeft = '50px'

      clearInterval(loop)
    }

  }, 10)

  document.addEventListener('keydown', jump)


  return (
    <div className="App">
      <h1>Mario Jump</h1>

      <div className='game-board'>
        <img src={Cloud} className='cloud' alt='cloud'/>
        <img src={Pipe} className='pipe' alt='pipe'/>
        <img src={Mario} className='mario' alt='mario'/>
      </div>

    </div>
  );
}



export default App;
