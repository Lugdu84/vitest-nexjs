

import { render, screen } from '@testing-library/react';
import { describe, it, expect} from "vitest"
import Home from '../app/page';

describe('Home page', () => {
  it('should render the heading', () => {
    render(<Home />);
    const heading = screen.getByText('Docs');
    expect(heading).toBeDefined();
  });
});
