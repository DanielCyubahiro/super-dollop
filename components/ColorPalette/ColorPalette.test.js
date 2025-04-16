import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorPalette from '@/components/ColorPalette/ColorPalette';

describe('ColorPalette', () => {
  const testColors = ['#ff0000', '#00ff00', '#0000ff'];

  // eslint-disable-next-line jest/expect-expect
  it('renders without crashing', () => {
    render(<ColorPalette colors={testColors} />);
  });

  it('renders the correct number of color swatches', () => {
    render(<ColorPalette colors={testColors} />);
    const swatches = screen.getAllByTestId(/color-swatch-/);
    expect(swatches).toHaveLength(testColors.length);
  });

  it('passes the correct color values to each swatch', () => {
    render(<ColorPalette colors={testColors} />);

    testColors.forEach(color => {
      const swatch = screen.getByTestId(`color-swatch-${color}`);
      expect(swatch).toHaveStyle(`background-color: ${color}`);
    });
  });

  it('renders nothing when colors array is empty', () => {
    const { container } = render(<ColorPalette colors={[]} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('handles duplicate colors by using them as keys', () => {
    const duplicateColors = ['#ff0000', '#ff0000', '#00ff00'];
    render(<ColorPalette colors={duplicateColors} />);

    // This will throw if duplicate keys cause rendering issues
    const swatches = screen.getAllByTestId(/color-swatch-/);
    expect(swatches).toHaveLength(duplicateColors.length);
  });
});