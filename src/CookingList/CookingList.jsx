import PropTypes from 'prop-types';

const CookingList = ({ Cooking }) => {
    return (
        <section>
            <center><h3><b>Currently cooking <br /> {Cooking.length} Recipes</b></h3></center>

            {
                Cooking.map(({ recipe_name, preparing_time, calories }, index) => (
                    <center key={index}>
                        <hr />
                        <p><b>Name : {recipe_name}</b></p>
                        <p><b>Preparing Time : {preparing_time} Minutes</b></p>
                        <p><b>Total Calories : {calories} Calories</b></p>
                        <hr />
                    </center>
                ))
            }
        </section>
    );
};

CookingList.propTypes = {
    Cooking: PropTypes.arrayOf(
        PropTypes.shape({
            recipe_name: PropTypes.string.isRequired,
            preparing_time: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default CookingList;