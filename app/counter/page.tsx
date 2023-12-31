import React from 'react'
import Counter from '@/components/counter'

export default function CounterPage() {
  return (
    <div className=" h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl md:text-2xl font-semibold text-center">
        Counter with custom hook and test
      </h2>
      <Counter />
    </div>
  )
}
