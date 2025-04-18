import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import CookingList from '../CookingList/CookingList';
import { useState } from 'react';

const CookList = ({ Cook }) => {

    const [Cooking, setCooking] = useState([]);

    const handelSetCooking = (CookingList) => {

        // Check if the recipe is already being prepared
        const isAlreadyCooking = Cooking.some(CookList => CookList.recipe_name === CookingList.recipe_name);

        if (isAlreadyCooking === false) {
            setCooking([...Cooking, CookingList]); // Add only new recipes
        }

    };


    const [Time, setTime] = useState(0);

    const handelSetTime = ({ preparing_time }) => {
        setTime(Time + preparing_time);
    }


    const [Calories, setCalories] = useState(0);

    const handelSetCalories = ({ calories }) => {
        setCalories(Calories + calories)
    }

    return (
        <Card className="bg-white text-dark shadow-lg m-5 w-100 h-100">
            <br />
            <center>
                <h2><b>Want to cook <br /> {Cook.length} Recipes</b></h2>
            </center>

            {
                Cook.map(({ recipe_name, preparing_time, calories }, index) => (
                    <center key={index}>
                        <hr />
                        <p><b>Name : {recipe_name}</b></p>
                        <p><b>Preparing Time : {preparing_time} Minutes</b></p>
                        <p><b>Total Calories : {calories} Calories</b></p>

                        <Button
                            variant="success text-dark"
                            onClick={() => {
                                handelSetCooking({ recipe_name, preparing_time, calories })
                                handelSetTime({ preparing_time })
                                handelSetCalories({ calories })
                            }}
                        ><b>Preparing</b></Button>
                        <hr />
                    </center>

                ))

            }
            <hr />
            <CookingList Cooking={Cooking}></CookingList>
            <hr />
            <center>
                <h6><b>Total Time = {Time} Minutes</b></h6>
                <h6><b>Total Calories = {Calories} Calories</b></h6>
            </center>

        </Card>
    );
};

CookList.propTypes = {
    Cook: PropTypes.arrayOf(
        PropTypes.shape({
            recipe_name: PropTypes.string.isRequired,
            preparing_time: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default CookList;