import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'

// setup function
export const setup = (
  jsx: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => ({
  user: userEvent.setup(),
  ...render(jsx, options),
})
