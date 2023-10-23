import { test, expect, describe, afterAll, beforeAll } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import Counter from '@/components/counter'

let incrementButton: HTMLElement
let decrementButton: HTMLElement
let count: HTMLElement

describe('Counter with no value in props', () => {
  beforeAll(() => {
    render(<Counter />)
    user.setup()
    incrementButton = screen.getByRole('button', { name: 'Increment' })
    decrementButton = screen.getByRole('button', { name: 'Decrement' })
    count = screen.getByRole('heading', { level: 2 })
  })

  afterAll(() => {
    cleanup()
  })

  test('should render the heading Count : 0', () => {
    expect(count).toHaveTextContent('Count : 0')
  })
  test('should render Count : 1 the button Increment', async () => {
    await user.click(incrementButton)
    expect(count).toHaveTextContent("Count : 1")
  })
  test('should render Count : 2 the button Increment', async () => {
    await user.click(incrementButton)
    expect(count).toHaveTextContent("Count : 2")
  })
  test('should render Count : 1 the button Decrement', async () => {
    await user.click(decrementButton)
    expect(count).toHaveTextContent("Count : 1")
  })
  test('should render Count : 0 the button Decrement', async () => {
    await user.click(decrementButton)
    expect(count).toHaveTextContent("Count : 0")
  })
  test('should render Count : 0 the button Decrement', async () => {
    await user.click(decrementButton)
    expect(count).toHaveTextContent("Count : 0")
  })
})