import {useState, useEffect} from "react"

export default function Test() {
    const [sWData, setSWData] = useState(null)

    useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setSWData(data))
    })


    return (
        <main>
            <div>{JSON.stringify(sWData, null, 2)}</div>
        </main>
    )
}