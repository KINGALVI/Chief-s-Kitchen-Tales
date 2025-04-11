import { useEffect, useState } from 'react';
import RecipeCard from '../Card/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

const Cards = () => {

    const [API, setAPI] = useState([])

    useEffect(() => {
        fetch("/Chief's-Kitchen-Tales.json")
            .then(response => response.json())
            .then(Data => setAPI(Data))
    }, [])

    return (
        <>
            <center>
                <h1><b>Our Recipes</b></h1>
                <p><b>
                    Discover a world of culinary wonders, where every recipe tells a story. From heartwarming classics to bold, modern creations, our collection is <br /> designed to inspire your inner chef. Explore the flavors, savor the details, and bring magic to your kitchen with every dish!
                </b></p>
            </center>

            <Row xs={1} md={2} className="g-0">
                {API.map((card, idx) => (
                    <Col key={idx}>
                        <RecipeCard card={card}></RecipeCard>
                    </Col>
                ))}
            </Row>

        </>
    );
};

Cards.propTypes = {
    API: PropTypes.arrayOf(
        PropTypes.shape({
            recipe_image: PropTypes.string.isRequired,
            recipe_name: PropTypes.string.isRequired,
            short_description: PropTypes.string.isRequired,
            ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
            preparing_time: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ), // API is an array of objects with specific properties
};

export default Cards;