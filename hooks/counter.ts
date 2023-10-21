import { useState } from "react"


export const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0)
            setCount(count - 1)
    }

    return { count, increment, decrement }
}