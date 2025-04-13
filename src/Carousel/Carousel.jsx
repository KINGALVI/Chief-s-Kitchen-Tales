import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Professional_Chief from "../../public/Project Doc , Info and pic/professional chief.png"

function Carousel() {
  return (
    <center>
      <Card className="bg-dark text-white shadow-lg m-5" style={{ borderRadius: '10px' }}>

        <div className='d-flex justify-content-center align-items-center'>
          <Card.Img className='w-100 h-100' src={Professional_Chief} alt="Card image" style={{ filter: 'brightness(50%)', opacity: 0.8 }} />
        </div>

        <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
          <div>
            <div className='text-center pb-3'>
              <Card.Title><h1><b>Discover an exceptional cooking <br /> class tailored for you!</b></h1></Card.Title>
              <br />
              <Card.Text>
                Step into the world of culinary excellence! Whether you're a seasoned chef or a passionate food enthusiast,
                embark on a journey filled <br /> with mouthwatering recipes, expert techniques, and the secrets to creating unforgettable dishes. Let your kitchen tales unfold here!
              </Card.Text>
            </div>
            <br />
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

export default Carousel;