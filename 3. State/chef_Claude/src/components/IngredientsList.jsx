export default function IngredientsList(props, handleShow) {
  const elements = props.ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });
  return (
    <>
      {props.ingredients.length > 0 ? (
        <div className="ingredients-container">
          <h2 className="ingredients-h2">Ingredients on hand</h2>
          <ul>{elements}</ul>
          {props.ingredients.length > 3 ? (
            <div className="recipe-get-container">
              <div className="content-recipe">
                <h2>Ready for a recipe?</h2>
                <p className="para-recipe">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button
                className="get-recipe-button"
                onClick={props.handleShown}
              >
                Get a recipe
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
