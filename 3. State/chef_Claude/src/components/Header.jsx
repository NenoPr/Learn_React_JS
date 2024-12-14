import "/src/stylesheets/Header.css"
import chefClaude from "/chef.svg"

export default function Header() {
    return (
        <header>
            <img src={chefClaude} alt="chef claude logo" />
            <span>Chef Claude</span>
        </header>
    )
}