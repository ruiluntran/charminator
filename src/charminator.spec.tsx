import { render, screen } from '@testing-library/react';
import {Charminator} from './charminator';
import '@testing-library/jest-dom'

describe('Charminator Component', () => {

  it('displays an error message when more than one character is passed', () => {
    render(<Charminator value="ab" />);
    expect(screen.getByText("This isn’t a word party! It’s a solo gig!")).toBeInTheDocument();
    expect(screen.getByText(/Please reduce your character count to exactly 1/i)).toBeInTheDocument();
  });

  describe('Manipulation', () => {
    it('renders the character in uppercase when toUpperCase is true', () => {
      render(<Charminator value="a" toUpperCase={true} />);
      const spanElement = screen.getByText('A');
      expect(spanElement).toBeInTheDocument();
    });

    it('renders the character in lowercase when toLowerCase is true', () => {
      render(<Charminator value="A" toLowerCase={true} />);
      const spanElement = screen.getByText('a');
      expect(spanElement).toBeInTheDocument();
    });

    it('renders the character without any transformations when both toUpperCase and toLowerCase are false', () => {
      render(<Charminator value="a" toUpperCase={false} toLowerCase={false} />);
      const spanElement = screen.getByText('a');
      expect(spanElement).toBeInTheDocument();
    });
  });

  describe('Styling', () => {

    describe('Color', () => {
      it('renders the character with the correct color', () => {
        render(<Charminator value="a" color="#FF0000" />);
        const spanElement = screen.getByText('a');
        expect(spanElement).toHaveStyle({ color: '#FF0000' });
      });

      it('throws an error for an invalid color format', () => {
        expect(() => {
          render(<Charminator value="a" color="invalid-color" />);
        }).toThrow('Invalid color format.');
      });

      it('applies no color if color prop is not provided', () => {
        render(<Charminator value="a" />);
        const spanElement = screen.getByText('a');
        expect(spanElement).toHaveStyle({ color: 'inherit' });
      });
    });

    describe('Size', () => {

      it('applies the correct font size styles', () => {
        render(<Charminator value="a" size="24px" />);
        const spanElement = screen.getByText('a');
        expect(spanElement).toHaveStyle('fontSize: 24px');
      });

      it('uses default styles when color and size are not provided', () => {
        render(<Charminator value="a" />);
        const spanElement = screen.getByText('a');
        expect(spanElement).toHaveStyle('color: inherit');
        expect(spanElement).toHaveStyle('fontSize: inherit');
      });
    });

  });
});
