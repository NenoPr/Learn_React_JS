import "/src/stylesheets/Main.css"
import { useState } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState([])

    const elements = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })


    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
        event.currentTarget.reset()
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. oregano" aria-label="Add Ingredient" name="ingredient" />
                <button>Add ingredient</button>
            </form>
            <ul>
                {elements}
            </ul>
        </main>
    )
}