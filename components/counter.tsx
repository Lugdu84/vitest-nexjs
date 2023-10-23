'use client'

import { Button } from './ui/button'
import { useCounter } from '@/hooks/counter'

type TypeCounterProps = {
    initialCount?: number
}

export default function Counter( { initialCount } : TypeCounterProps) {
    const { count, step, updateStep, increment, decrement } = useCounter({ initialCount })
    return (
        <div className=' w-80 flex flex-col justify-center items-center border-2 rounded-lg shadow-lg p-2'>
            <h2 className='text-2xl'>Count : {count}</h2>
            <div className='flex gap-2'>
                <label htmlFor="step">Step</label>
                <input type="number" name="step" value={step} onChange={e => updateStep(Number(e.target.value))} />
            </div>
            
            <div className='flex gap-4'>
                <Button variant={"ghost"} onClick={increment}>Increment</Button>
                <Button variant={"ghost"} onClick={decrement}>Decrement</Button>
            </div>
        </div>
    )
}
