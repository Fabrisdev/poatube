import './App.css'
import Background from './Components/Background.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Background color="#638475">
        <input type="file" accept=".mp4,.mov"/>
        <button>Subir</button>
      </Background>
      <Background color="#90E39A"></Background>
      <Background color="#DDF093"></Background>
    </>
  )
}

export default App
