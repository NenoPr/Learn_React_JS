export default function ClaudeRecipe(props) {
    return (
        <>
        {props.isShow ? <section>
            <h3>Spiced Maple-Miso Glazed Salmon with Sesame-Ginger Rice</h3>
            <ul>
                <li>4 salmon fillets (about 6 oz each)</li>
                <li>3 tbsp maple syrup</li>
                <li>1 tbsp soy sauce</li>
                <li>¼ tsp red pepper flakes (optional for heat)</li>
            </ul>
            <h4>Instructions</h4>
            <h5>1. Prepare the Marinade:</h5>
            <p>In a small bowl, whisk together maple syrup, miso paste, soy sauce, rice vinegar, sesame oil, garlic, ground ginger, and red pepper flakes.</p>
            <h5>2. Marinate the Salmon:</h5>
            <p>Place the salmon fillets in a shallow dish or resealable bag. Pour the marinade over the fish, ensuring each fillet is coated. Marinate in the fridge for 20-30 minutes.</p>
            <h5>3. Cook the Rice:</h5>
            <p>Rinse the rice under cold water until the water runs clear. In a medium saucepan, combine rice and water. Bring to a boil, then reduce heat, cover, and simmer for 15 minutes or until the water is absorbed. Remove from heat and let it sit for 5 minutes.

            Heat sesame oil in a small pan over medium heat. Add grated ginger and sauté for 1-2 minutes until fragrant. Stir the ginger mixture, soy sauce, and sesame seeds into the cooked rice. Garnish with sliced scallions.</p>
            <h5>4. Cook the Salmon:</h5>
            <p>Preheat the oven to 400°F (200°C). Line a baking sheet with parchment paper or foil. Remove the salmon from the marinade and place it on the sheet. Bake for 12-15 minutes, or until the salmon flakes easily with a fork.

            For extra caramelization, broil the salmon for 2-3 minutes at the end of the cooking time.</p>
            <h5>5. Plate and Serve:</h5>
            <p>Serve the salmon over the sesame-ginger rice. Garnish with fresh cilantro and lime wedges for a burst of freshness.</p>
        </section> : null}
        </>
    )
}