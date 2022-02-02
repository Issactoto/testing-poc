import { render, screen } from '@testing-library/react';
import App from './App';


test('renders the correct page', () => {
  render(<App />);
  const header = screen.getByText("Testing POC");
  const subheader = screen.getByText("This site uses Circle CI, Jest and Cypress");
  expect(header).toBeInTheDocument();
  expect(subheader).toBeInTheDocument();
});




