import "/src/stylesheets/Main.css"
import { useState } from "react";
import IngredientsList from "./IngredientsList";

export default function Main(props) {
    const [ingredients, setIngredients] = useState(["salmon fillet","maple syrup","soy sauce","red pepper flakes "]);
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
        event.currentTarget.reset()
    }

    return (
        <main className="main">
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. oregano" aria-label="Add Ingredient" name="ingredient" />
                <button>Add ingredient</button>
            </form>
            <IngredientsList ingredients={ingredients} handleShown={props.handleShown} />
        </main>
    )
}