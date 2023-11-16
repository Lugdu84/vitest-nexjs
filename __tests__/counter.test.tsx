import { test, expect, describe, beforeEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { setup } from '@/test/setup'
import '@testing-library/jest-dom/vitest'
import Counter from '@/components/counter'

describe('Counter with no value in props', () => {
  beforeEach(() => {
    cleanup()
  })
  test('should render the heading Count : 0', async () => {
    const { getByRole } = setup(<Counter />)
    const count = getByRole('heading', { level: 2 })
    expect(count).toHaveTextContent('Count : 0')
  })
  test('should render Count : 1 the button Increment', async () => {
    const { user, getByRole } = setup(<Counter />)
    const incrementButton = getByRole('button', { name: 'Increment' })
    const count = getByRole('heading', { level: 2 })
    await user.click(incrementButton)
    expect(count).toHaveTextContent('Count : 1')
  })
  test('should render Count : 0 the button Decrement', async () => {
    const { user, getByRole } = setup(<Counter />)
    const decrementButton = getByRole('button', { name: 'Decrement' })
    const count = getByRole('heading', { level: 2 })
    await user.click(decrementButton)
    expect(count).toHaveTextContent('Count : 0')
  })
})
