import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  const url = `https://api.thecatapi.com/v1/images/search?limit=1`;
  const api_key = "live_ixLDfoy8gcJ7X0mfsttZJ0WA9OEx68fxuGc0GKP5LrAgMYDzC8ccQJelEFIAWAdn"
  const fetchFunction = async () =>{
  const res = await fetch(url,{headers: {
      'x-api-key': api_key
  }})
  const data = await res.json();
  console.log(data);
  setCount(data);
  document.getElementById("kotard").style.display = "none";
}
  return (
    <>
      {count.map((image) => (
        <img src={image.url} width="500px"/>
      ))}
      <img src={"src/assets/kot_art.png"} id='kotard'/>
      <div class="br"></div>
      <button onClick={fetchFunction} className="butt">
        ₍^. .^₎⟆
      </button>
      <p id='podpis'>Zrobione Przez Wiktora Winieckiego</p>
    </>
  )
}

export default App
