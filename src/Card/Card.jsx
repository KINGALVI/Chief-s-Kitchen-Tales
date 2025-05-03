// Import Bootstrap components for building styled recipe cards.
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Import icons for visual indicators (clock and fire).
import { Clock, Fire } from 'react-bootstrap-icons';

// Import PropTypes for prop validation.
import PropTypes from 'prop-types';

// Import React's useState hook for managing component state.
import { useState } from 'react';

// Import Bootstrap Modal for showing additional information or warnings.
import Modal from 'react-bootstrap/Modal';



const RecipeCard = ({ card, handelSetCook, Cook }) => {

    // Destructure the recipe data passed as props.
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = card;



    // State to control whether the modal is visible or hidden.
    const [showModal, setShowModal] = useState(false);

    // Function to handle clicks on the "Want to Cook" button.
    const handleButtonClick = () => {

        // Check if the recipe is already in the "Want to Cook" list.
        const isAlreadyCooked = Cook.some(cookList => cookList.recipe_name === card.recipe_name);

        if (isAlreadyCooked === false) {
            // Add the recipe to the "Want to Cook" list if it's not already there.
            handelSetCook(card);
        } else {
            // Show the modal if the recipe is already in the list.
            setShowModal(true);
        }

    };

    // Function to close the modal when the "Close" button is clicked.
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        // Main card element styled with Bootstrap.
        <Card className="bg-white text-dark shadow-lg m-5" style={{ width: '25rem', borderRadius: '10px' }}>

            {/* Card image at the top. */}
            <Card.Img variant="top" src={recipe_image} />

            {/* Card body containing details about the recipe. */}
            <Card.Body>

                {/* Title of the recipe. */}
                <Card.Title>{recipe_name}</Card.Title>

                {/* Short description of the recipe. */}
                <Card.Text>{short_description}</Card.Text>

                <hr />

                {/* List of ingredients. */}
                {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}

                <hr />

                {/* Section displaying preparation time and calorie count. */}
                <div className="d-flex pb-2">

                    {/* Preparation time with clock icon. */}
                    <span className="d-flex align-items-center pe-2">
                        <Clock className="pe-1" size={20} color="gray" /> {preparing_time} Minutes
                    </span>

                    {/* Calorie count with fire icon. */}
                    <span className="d-flex align-items-center pe-2">
                        <Fire className="pe-1" size={20} color="gray" /> {calories} Calories
                    </span>

                </div>

                {/* Button to add the recipe to the "Want to Cook" list. */}
                <Button onClick={handleButtonClick} variant="success"><b>Want to Cook</b></Button>

                {/* Modal displayed if the recipe is already in the "Want to Cook" list. */}
                <Modal show={showModal} onHide={handleCloseModal}>

                    <Modal.Header className='d-flex justify-content-center'>
                        <Modal.Title><b>This Recipe is Already in Your List !!</b></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>
                            <b>
                                This card has already been added to your " Want to Cook " list. You cannot add it again
                                because the recipe details are already saved. Feel free to explore other recipes or check your list!
                            </b>
                        </p>
                    </Modal.Body>

                    <Modal.Footer className='d-flex justify-content-center'>
                        <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </Card.Body>

        </Card>
    );
};



// Define PropTypes to validate incoming props.
RecipeCard.propTypes = {
    card: PropTypes.shape({
        recipe_image: PropTypes.string.isRequired, // Image URL for the recipe.
        recipe_name: PropTypes.string.isRequired, // Name of the recipe.
        short_description: PropTypes.string.isRequired, // Brief description of the recipe.
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, // List of ingredients.
        preparing_time: PropTypes.string.isRequired, // Preparation time.
        calories: PropTypes.number.isRequired, // Calorie count.
    }).isRequired,

    Cook: PropTypes.arrayOf( // Array of recipes in the "Want to Cook" list.
        PropTypes.shape({
            recipe_image: PropTypes.string, // Image URL for the recipe.
            recipe_name: PropTypes.string, // Name of the recipe.
            short_description: PropTypes.string, // Brief description of the recipe.
            ingredients: PropTypes.arrayOf(PropTypes.string), // List of ingredients.
            preparing_time: PropTypes.string, // Preparation time;
            calories: PropTypes.number, // Calorie count.
        })
    ).isRequired,

    handelSetCook: PropTypes.func.isRequired, // Function to handle adding recipes.
};

export default RecipeCard;
