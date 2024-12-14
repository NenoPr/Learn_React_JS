import globe from "../assets/globe1.svg"
import "../stylesheets/header.css"

export default function Header() {
    return (
        <>
            <header>
                <img src={globe} alt="globe" />
                <span>my travel journal.</span>
            </header>
        </>
    )
}