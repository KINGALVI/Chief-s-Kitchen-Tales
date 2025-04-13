import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Clock, Fire } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

const RecipeCard = ({ card, handelSetCook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = card;
    return (
        <Card className="bg-white text-dark shadow-lg m-5" style={{ width: '25rem', borderRadius: '10px' }}>
            <Card.Img variant="top" src={recipe_image} />
            <Card.Body>
                <Card.Title>{recipe_name}</Card.Title>
                <Card.Text>{short_description}</Card.Text>
                <hr />
                {
                    ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                }
                <hr />
                <div className='d-flex pb-2'>
                    <span className='d-flex align-items-center pe-2'><Clock className='pe-1' size={20} color="gray" /> {preparing_time}</span>
                    <span className='d-flex align-items-center pe-2'><Fire className='pe-1' size={20} color="gray" /> {calories}</span>
                </div>
                <Button onClick={() => handelSetCook(card)} variant="success"><b>Want to Cook</b></Button>
            </Card.Body>
        </Card>
    );
}

RecipeCard.propTypes = {
    card: PropTypes.shape({
        recipe_image: PropTypes.string.isRequired,
        recipe_name: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
    }).isRequired,
};


export default RecipeCard;