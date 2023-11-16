import '@testing-library/jest-dom/vitest'
import { describe, it, expect } from 'vitest'
import Home from '../app/page'
import { setup } from '../test/setup'

describe('Home page', () => {
  it('should render the heading', () => {
    const { getByRole } = setup(<Home />)
    const button = getByRole('link', { name: 'Home Page' })
    expect(button).toBeInTheDocument()
  })
})
