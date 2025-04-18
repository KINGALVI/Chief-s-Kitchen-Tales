import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import Cards from './Cards/Cards';
import CookList from './CookList/CookList';
import { useState, useEffect } from 'react';

function App() {

  const [API, setAPI] = useState([])

  useEffect(() => {
    fetch("/Chief's-Kitchen-Tales.json")
      .then(response => response.json())
      .then(Data => setAPI(Data))
  }, [])

  const [Cook, setCook] = useState([])

  const handelSetCook = card => {
    setCook([...Cook, card]);
  }

  return (
    <>

      <Header></Header>
      <Carousel></Carousel>

      <center>
        <h1><b>Our Recipes</b></h1>
        <p><b>

          Discover a world of culinary wonders, where every recipe tells a story. From heartwarming classics to bold, modern creations, our collection is <br /> designed to inspire your inner chef. Explore the flavors, savor the details, and bring magic to your kitchen with every dish!
        </b></p>
      </center>

      <section className='d-grid d-md-flex'>
        <Cards Cook={Cook} API={API} handelSetCook={handelSetCook} ></Cards>
        <CookList setCook={setCook} Cook={Cook}></CookList>
      </section>

    </>
  )

}

export default App