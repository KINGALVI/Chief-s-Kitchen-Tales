// Import RecipeCard component to display individual recipe cards.
import RecipeCard from '../Card/Card';

// Import Bootstrap components for responsive layout.
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Import PropTypes for prop validation.
import PropTypes from 'prop-types';



const Cards = ({ handelSetCook, API, Cook }) => {
    return (
        // Section wrapping the recipe cards in a grid layout.
        <section className='d-grid'>

            {/* Bootstrap Row for organizing cards into responsive columns. */}
            <Row xs={1} md={2} className="g-0">
                {
                    // Map through the API data to render each recipe card.
                    API.map((card, idx) => (
                        <Col key={idx}> {/* Bootstrap Column for individual cards. */}
                            <RecipeCard
                                key={idx} // Unique key for React's rendering optimization.
                                handelSetCook={handelSetCook} // Function to handle adding recipes to Cook list.
                                card={card} // Pass recipe details as props.
                                Cook={Cook} // Current "Want to Cook" list as props.
                            ></RecipeCard>
                        </Col>
                    ))
                }
            </Row>

        </section>
    );
};



// Define PropTypes to validate incoming props.
Cards.propTypes = {

    handelSetCook: PropTypes.func.isRequired, // Function to handle adding recipes.

    API: PropTypes.arrayOf( // Array of recipes fetched from the API.
        PropTypes.shape({
            recipe_image: PropTypes.string.isRequired, // Recipe image URL.
            recipe_name: PropTypes.string.isRequired, // Recipe name.
            short_description: PropTypes.string.isRequired, // Short description of the recipe.
            ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, // List of ingredients.
            preparing_time: PropTypes.string.isRequired, // Preparation time for the recipe.
            calories: PropTypes.number.isRequired, // Calorie count for the recipe.
        })
    ).isRequired,

    Cook: PropTypes.arrayOf( // Array of recipes in the "Want to Cook" list.
        PropTypes.shape({
            recipe_image: PropTypes.string, // Recipe image URL.
            recipe_name: PropTypes.string, // Recipe name.
            short_description: PropTypes.string, // Short description of the recipe.
            ingredients: PropTypes.arrayOf(PropTypes.string), // List of ingredients.
            preparing_time: PropTypes.string, // Preparation time for the recipe.
            calories: PropTypes.number, // Calorie count for the recipe.
        })
    ).isRequired,

};

export default Cards;
