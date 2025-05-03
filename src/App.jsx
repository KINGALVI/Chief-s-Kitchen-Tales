// Importing global styles and Bootstrap CSS for consistent styling across the app.
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing child components used in the application.
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import Cards from './Cards/Cards';
import CookList from './CookList/CookList';

// Importing React hooks for state and lifecycle management.
import { useState, useEffect } from 'react';



function App() {

  // State to store recipes fetched from the JSON file/API.
  const [API, setAPI] = useState([]);

  // useEffect to fetch data from the JSON file when the component mounts.
  useEffect(() => {
    fetch("/Chief's-Kitchen-Tales.json") // Fetch data from the JSON file.
      .then(response => response.json()) // Convert the response into JSON format.
      .then(Data => setAPI(Data)) // Update the API state with the fetched data.
  }, []); // Empty dependency array means this runs only once on initial render.



  // State to manage recipes added to the "Want to Cook" list.
  const [Cook, setCook] = useState([]);

  // Function to add a selected recipe (card) to the "Want to Cook" list.
  const handelSetCook = card => {
    setCook([...Cook, card]); // Append the new card to the existing Cook list.
  };

  return (
    <>

      {/* Header component displayed at the top of the app. */}
      <Header></Header>

      {/* Carousel component for showcasing a prominent feature or image. */}
      <Carousel></Carousel>

      {/* Section to introduce the recipes and their description. */}
      <center>
        <h1><b>Our Recipes</b></h1>
        <p><b>
          Discover a world of culinary wonders, where every recipe tells a story.
          From heartwarming classics to bold, modern creations, our collection is
          designed to inspire your inner chef. Explore the flavors, savor the details,
          and bring magic to your kitchen with every dish!
        </b></p>
      </center>

      {/* Cards and CookList components side by side. */}
      <section className='d-grid d-md-flex'>
        {/* Cards component to display individual recipe cards and allow adding to Cook. */}
        <Cards Cook={Cook} API={API} handelSetCook={handelSetCook}></Cards>

        {/* CookList component to display the user's "Want to Cook" list. */}
        <CookList setCook={setCook} Cook={Cook}></CookList>
      </section>

    </>
  );
}

export default App;
