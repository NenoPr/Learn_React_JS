import { useState } from "react"

export default function Tests() {

    const [unreadMsgs, setUnreadMsgs] = useState(["afdafd"])

    function messages() {
        if (unreadMsgs.length == 0) return "You're all caught up!"
        else if (unreadMsgs.length == 1)  {
            return "You have one unread message."
        } else return `you have ${unreadMsgs.length} unread messages.`
    }

    return (
        <main>
            <span>{messages()}</span>
        </main>
    )
}