// Import React for creating the component.
import React from 'react';

// Import Bootstrap components for building a styled and responsive card.
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Importing the image used in the Carousel card.
import Professional_Chief from "../../public/Project-All-image/professional-chief.png";



function Carousel() {
  return (
    // Center the Carousel content using a <center> tag.
    <center>

      {/* Main card component styled with Bootstrap. */}
      <Card className="bg-dark text-white shadow-lg m-5" style={{ borderRadius: '10px' }}>

        {/* Section for the background image with styling. */}
        <div className='d-flex justify-content-center align-items-center'>
          <Card.Img
            className='w-100 h-100'
            src={Professional_Chief} // Image source imported at the top.
            alt="Card image" // Alternative text for accessibility.
            style={{ filter: 'brightness(50%)', opacity: 0.8 }} // Styling for image dimming.
          />
        </div>

        {/* Overlay section for text and buttons on top of the image. */}
        <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
          <div>

            {/* Title and text section for the Carousel. */}
            <div className='text-center pb-3'>
              <Card.Title>
                <h1><b>Discover an exceptional cooking <br /> class tailored for you!</b></h1>
              </Card.Title>
              <br />
              <Card.Text>
                {/* Description text providing context about the cooking class. */}
                Step into the world of culinary excellence! Whether you're a seasoned chef or a passionate food enthusiast,
                embark on a journey filled <br /> with mouthwatering recipes, expert techniques, and the secrets to creating unforgettable dishes.
                Let your kitchen tales unfold here!
              </Card.Text>
            </div>

            <br />

            {/* Buttons for user interaction. */}
            <div className='d-flex justify-content-center'>
              <Button variant="success text-dark m-1"><b>Explore Now</b></Button>
              <Button variant="outline-light m-1">Our Feedback</Button>
            </div>

          </div>
        </Card.ImgOverlay>

      </Card>

    </center>
  );
}

export default Carousel; // Exporting the Carousel component to be used elsewhere in the application.