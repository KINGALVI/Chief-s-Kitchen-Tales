// Import PropTypes for validating the props passed to the component.
import PropTypes from 'prop-types';



const CookingList = ({ Cooking }) => {
    return (
        // Section wrapping the list of recipes currently being cooked.
        <section>

            {/* Header displaying the total count of recipes currently cooking. */}
            <center>
                <h3>
                    <b>
                        Currently cooking <br /> {Cooking.length} Recipes
                    </b>
                </h3>
            </center>

            {/* Map through the Cooking list to render the details of each recipe. */}
            {
                Cooking.map(({ recipe_name, preparing_time, calories }, index) => (

                    <center key={index}> {/* Key for React's rendering optimization. */}
                        <hr />
                        {/* Display recipe name. */}
                        <p><b>Name : {recipe_name}</b></p>

                        {/* Display preparation time. */}
                        <p><b>Preparing Time : {preparing_time} Minutes</b></p>

                        {/* Display total calorie count. */}
                        <p><b>Total Calories : {calories} Calories</b></p>
                        <hr />
                    </center>

                ))
            }

        </section>
    );
};



// Define PropTypes to validate the props passed to the CookingList component.
CookingList.propTypes = {

    Cooking: PropTypes.arrayOf( // Array of recipes currently being prepared.
        PropTypes.shape({
            recipe_name: PropTypes.string.isRequired, // Name of the recipe.
            preparing_time: PropTypes.number.isRequired, // Preparation time of the recipe.
            calories: PropTypes.number.isRequired, // Calorie count of the recipe.
        })
    ).isRequired, // Cooking list is required.

};

export default CookingList; // Export the CookingList component for use in other parts of the app.