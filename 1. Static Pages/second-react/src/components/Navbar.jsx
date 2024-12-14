import reactLogo from "../assets/react.svg"

export default function Navbar() {
    return ( 
        <header className="header">
            <nav className="nav-header">
                <img src={reactLogo} alt="react logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}