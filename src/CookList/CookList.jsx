// Import PropTypes for validating the props passed to the component.
import PropTypes from 'prop-types';

// Import Bootstrap components for building a styled card and button.
import { Button, Card } from 'react-bootstrap';

// Import the CookingList component to display recipes currently being prepared.
import CookingList from '../CookingList/CookingList';

// Import useState hook for managing component-specific states.
import { useState } from 'react';



const CookList = ({ Cook, setCook }) => {

    // State to manage the list of recipes currently being prepared.
    const [Cooking, setCooking] = useState([]);

    // Function to add a recipe to the "Currently Cooking" list.
    const handelSetCooking = (CookingList) => {

        // Check if the recipe is already in the "Currently Cooking" list.
        const isAlreadyCooking = Cooking.some(CookList => CookList.recipe_name === CookingList.recipe_name);

        if (isAlreadyCooking === false) {
            setCooking([...Cooking, CookingList]); // Add the recipe if it's not already there.
        }

    };


    // State to track the total preparation time of all recipes.
    const [Time, setTime] = useState(0);

    // Function to update the total preparation time.
    const handelSetTime = ({ preparing_time }) => {
        setTime(Time + preparing_time);
    };


    // State to track the total calorie count of all recipes.
    const [Calories, setCalories] = useState(0);

    // Function to update the total calorie count.
    const handelSetCalories = ({ calories }) => {
        setCalories(Calories + calories);
    };


    // Function to remove a recipe from the "Want to Cook" list.
    const handleRemoveFromCookList = (recipe_id) => {
        // Create a new array excluding the recipe with the matching recipe_id.
        const updatedCookList = Cook.filter(item => item.recipe_id !== recipe_id);
        setCook(updatedCookList); // Update the Cook list with the new array.

        // Alternate shorthand version (optional).
        // setCook(Cook.filter(item => item.recipe_id !== recipe_id))
    };

    return (
        // Main card for displaying the "Want to Cook" list.
        <Card className="bg-white text-dark shadow-lg m-5 w-100 h-100">
            <br />
            <center>
                {/* Display the total number of recipes in the "Want to Cook" list. */}
                <h2><b>Want to cook <br /> {Cook.length} Recipes</b></h2>
            </center>

            {/* Map through the "Want to Cook" list to display each recipe. */}
            {
                Cook.map(({ recipe_name, preparing_time, calories, recipe_id }, index) => (
                    <center key={index}>
                        <hr />
                        {/* Display recipe details. */}
                        <p><b>Name : {recipe_name}</b></p>
                        <p><b>Preparing Time : {preparing_time} Minutes</b></p>
                        <p><b>Total Calories : {calories} Calories</b></p>

                        {/* Button to mark the recipe as "Currently Cooking". */}
                        <Button
                            variant="success text-dark"
                            onClick={() => {
                                handelSetCooking({ recipe_name, preparing_time, calories }); // Add to Currently Cooking.
                                handelSetTime({ preparing_time }); // Update total preparation time.
                                handelSetCalories({ calories }); // Update total calorie count.
                                handleRemoveFromCookList(recipe_id); // Remove from Want to Cook list.
                            }}
                        ><b>Preparing</b></Button>
                        <hr />
                    </center>
                ))
            }

            <hr />
            {/* Display the list of recipes currently being prepared. */}
            <CookingList Cooking={Cooking}></CookingList>
            <hr />

            <center>
                {/* Display the total preparation time and calorie count. */}
                <h6><b>Total Time = {Time} Minutes</b></h6>
                <h6><b>Total Calories = {Calories} Calories</b></h6>
            </center>

        </Card>
    );
};



// Define PropTypes to validate the props passed to the CookList component.
CookList.propTypes = {

    Cook: PropTypes.arrayOf( // Array of recipes in the "Want to Cook" list.
        PropTypes.shape({
            recipe_id: PropTypes.string.isRequired, // Unique identifier for each recipe.
            recipe_name: PropTypes.string.isRequired, // Name of the recipe.
            preparing_time: PropTypes.number.isRequired, // Preparation time of the recipe.
            calories: PropTypes.number.isRequired, // Calorie count of the recipe.
        })
    ).isRequired,

    setCook: PropTypes.func.isRequired, // Function to update the Cook list state.

};

export default CookList;
