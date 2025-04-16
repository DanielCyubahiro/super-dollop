import { render, screen } from '@testing-library/react';
import Spotlight from '@/components/Spotlight/Spotlight';

describe('Spotlight Component', () => {
  it('renders the spotlight background with correct artist name', () => {
    const testProps = {
      backgroundImage: '/test-image.jpg',
      artistName: 'Test Artist'
    };

    render(<Spotlight {...testProps} />);

    const spotlightElement = screen.getByTestId('spotlight-bg');
    expect(spotlightElement).toBeInTheDocument();
    expect(spotlightElement).toHaveStyle(`background-image: url(${testProps.backgroundImage})`);
    expect(spotlightElement).toHaveAttribute('data-before-text', 'Artist: Test Artist');
  });
});