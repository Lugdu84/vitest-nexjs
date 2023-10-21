'use client'

import { Button } from './ui/button'
import { useCounter } from '@/hooks/counter'

type TypeCounterProps = {
    initialCount?: number
}

export default function Counter( { initialCount } : TypeCounterProps) {
    const { count, increment, decrement } = useCounter(initialCount)


    return (
        <div className='w-full lg:w-1/2 h-screen flex flex-col justify-center items-center'>
            <h2 className='text-2xl'>Count : {count}</h2>
            <div className='flex gap-4'>
                <Button variant={"ghost"} onClick={increment}>Increment</Button>
                <Button variant={"ghost"} onClick={decrement}>Decrement</Button>
            </div>
        </div>
    )
}