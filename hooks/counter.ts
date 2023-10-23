import { useState } from "react"

type UseCounterProps = {
    initialCount?: number
    initialStep?: number
}

export const useCounter = ({ initialCount = 0, initialStep = 1}: UseCounterProps = {}) => {
    const [count, setCount] = useState(initialCount)
    const [step, setStep] = useState(initialStep)

    const increment = () => {
        setCount(count + step)
    }

    const decrement = () => {
        setCount((count - step) > 0 ? count - step : 0)
    }

    const updateStep = (newStep: string | number) => {
        setStep(+newStep)
    }

    return { count, increment, decrement, step, updateStep }
}