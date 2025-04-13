import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

const CookList = ({ Cook }) => {
    return (

        <Card className="bg-white text-dark shadow-lg m-5 w-100 h-100">
            <br />
            <center>
                <h2>Want to cook:{Cook.length}</h2>
            </center>

            {Cook.map(({ recipe_name, preparing_time, calories }, index) => (
                <b key={index}>
                    <hr />
                    <center>
                        Name : {recipe_name}
                        <br />
                        Preparing Time : {preparing_time} Minutes
                        <br />
                        Total Calories : {calories}
                        <br /> <br />
                        <Button variant="success text-dark"><b>Preparing</b></Button>
                    </center>
                    <hr />
                </b>
            ))}

        </Card>

    );
};

CookList.propTypes = {
    Cook: PropTypes.arrayOf(
        PropTypes.shape({
            preparing_time: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default CookList;