import { fireEvent, render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Dropdown tests/)).toBeTruthy();
  });

  it('the dropdown should have two items', () => {
    const { getByTestId } = render(<App />);

    const dropdown = getByTestId('dropdown') as HTMLSelectElement;
    expect(dropdown.length).toBe(3);

    const itemOne = dropdown[0];
    expect(itemOne.textContent).toBe('Select Item');

    const itemTwo = dropdown[1];
    expect(itemTwo.textContent).toBe('One Input');
 
    const itemThree = dropdown[2];
    expect(itemThree.textContent).toBe('One Disabled Input');
  });
  it('should show a label when choosing first option item', () => {
    render(<App />);

    const dropdown = screen.getByTestId('dropdown')

    let input = screen.getByTestId('input');
    expect(input).not.toBeVisible();

    fireEvent.change(dropdown, { target: { value: 'o1' } });

    input = screen.getByTestId('input');
    expect(input).toBeVisible();

    fireEvent.change(dropdown, { target: { value: 'o2' } });

    input = screen.getByTestId('input');
    expect(input).not.toBeVisible();
  });
});
