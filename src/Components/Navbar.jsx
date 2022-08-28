import { AiFillHome } from 'react-icons/ai'
import './Navbar.css'

function Navbar(){
  return(
    <div className="container">
      <h1>Poatube</h1>
      <input type="text" placeholder="Videos de gatitos tiernos..." className="search-bar"/>
      <div className="icons">
        <AiFillHome className="button-home"></AiFillHome>
        <AiFillHome className="button-home"></AiFillHome>
        <AiFillHome className="button-home"></AiFillHome>
      </div>
    </div>
  )
}

export default Navbar