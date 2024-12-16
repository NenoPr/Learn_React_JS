import { useState } from "react"
import Count from "./Count"

export default function Tests() {

    const [unreadMsgs, setUnreadMsgs] = useState(["afdafd"])
    const [number, setNumber] = useState(0)

    function messages() {
        if (unreadMsgs.length == 0) return "You're all caught up!"
        else if (unreadMsgs.length == 1)  {
            return "You have one unread message."
        } else return `you have ${unreadMsgs.length} unread messages.`
    }

    function handleNumber() {
        setNumber(prev => prev + 1)
    }
    function handleNumber1() {
        setNumber(prev => prev - 1)
    }
    const container = {
        display: "flex",
        gap: "1rem",
    }

    return (
        <main>
            {/* <span>{messages()}</span> */}
            <Count prop={number} />
            <div style={container}>
                <button onClick={handleNumber}>Add</button>    
                <button onClick={handleNumber1}>Subtract</button>
            </div>
        </main>
    )
}