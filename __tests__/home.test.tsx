

import { render, screen } from '@testing-library/react';
import  "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest"
import Home from '../app/page';

describe('Home page', () => {
  it('should render the heading', () => {
    render(<Home />);
    const button = screen.getByRole("link", { name: "Home Page" });
    expect(button).toBeInTheDocument();
  });
});
