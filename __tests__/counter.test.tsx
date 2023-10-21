import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import Counter from '@/components/counter'

describe('Counter with no value in props', () => {
  render(<Counter />)
  user.setup()
  const incrementButton = screen.getByRole('button', { name: 'Increment' })
  const decrementButton = screen.getByRole('button', { name: 'Decrement' })
  test('should render the heading Count : 0', () => {
    const count = screen.getByText('Count : 0')
    expect(count).toBeInTheDocument()
  })
  test('should render Count : 1 the button Increment', async () => {
    await user.click(incrementButton)
    const count = screen.getByText('Count : 1')
    expect(count).toBeInTheDocument()
  })
  test('should render Count : 2 the button Increment', async () => {
    await user.click(incrementButton)
    const count = screen.getByText('Count : 2')
    expect(count).toBeInTheDocument()
  })
  test('should render Count : 1 the button Decrement', async () => {
    await user.click(decrementButton)
    const count = screen.getByText('Count : 1')
    expect(count).toBeInTheDocument()
  })
  test('should render Count : 0 the button Decrement', async () => {
    await user.click(decrementButton)
    const count = screen.getByText('Count : 0')
    expect(count).toBeInTheDocument()
  })
  test('should render Count : 0 the button Decrement', async () => {
    await user.click(decrementButton)
    const count = screen.getByText('Count : 0')
    expect(count).toBeInTheDocument()
  })
})

describe('Counter with value in props', () => {
  render(<Counter initialCount={5} />)
  user.setup()
  test('should render the heading Count : 5', () => {
    const count = screen.getByText('Count : 5')
    expect(count).toBeInTheDocument()
  })
})
