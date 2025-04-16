import RecipeCard from '../Card/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

const Cards = ({ handelSetCook, API, Cook }) => {

    return (
        <section className='d-grid'>
            <Row xs={1} md={2} className="g-0">
                {
                    API.map((card, idx) => (
                        <Col key={idx}>
                            <RecipeCard key={idx} handelSetCook={handelSetCook} card={card} Cook={Cook}></RecipeCard>
                        </Col>
                    ))}
            </Row>

        </section>
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
    ),
};

export default Cards;