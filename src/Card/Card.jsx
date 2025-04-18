import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Clock, Fire } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const RecipeCard = ({ card, handelSetCook, Cook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = card;



    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {

        // Check if the card is already in the "Want to Cook" list
        const isAlreadyCooked = Cook.some(cook => cook.recipe_name === card.recipe_name);

        if (isAlreadyCooked === false) {
            handelSetCook(card);
        }
        else {
            setShowModal(true);
        }

    };

    // Modal's close button function .
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Card className="bg-white text-dark shadow-lg m-5" style={{ width: '25rem', borderRadius: '10px' }}>

            <Card.Img variant="top" src={recipe_image} />

            <Card.Body>
                <Card.Title>{recipe_name}</Card.Title>
                <Card.Text>{short_description}</Card.Text>
                <hr />
                {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
                <hr />
                <div className="d-flex pb-2">
                    <span className="d-flex align-items-center pe-2">
                        <Clock className="pe-1" size={20} color="gray" /> {preparing_time} Minutes
                    </span>
                    <span className="d-flex align-items-center pe-2">
                        <Fire className="pe-1" size={20} color="gray" /> {calories} Calories
                    </span>
                </div>
                <Button onClick={handleButtonClick} variant="success"><b>Want to Cook</b></Button>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header className='d-flex justify-content-center'>
                        <Modal.Title><b>This Recipe is Already in Your List !!</b></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            <b>
                                This card has already been added to your " Want to Cook " list. You cannot add it again because the recipe details are already saved. Feel free to explore other recipes or check your list !
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

RecipeCard.propTypes = {
    card: PropTypes.shape({
        recipe_image: PropTypes.string.isRequired,
        recipe_name: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
    }).isRequired,
    Cook: PropTypes.array.isRequired,
};

export default RecipeCard;