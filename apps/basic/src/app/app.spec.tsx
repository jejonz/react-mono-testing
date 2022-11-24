import { fireEvent, render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText, getByTestId } = render(<App />);

    expect(getByText(/Welcome Basic/)).toBeTruthy();
    expect(getByTestId('title').textContent).toEqual('Welcome Basic!');
  });

  it('should have a static label with text', () => {
    const { getByText, getByTestId } = render(<App />);

    expect(getByText(/Data Input:/)).toBeTruthy();
    expect(getByTestId('label').textContent).toEqual('Data Input:');
  });

  it('should have an input without text initially', () => {
    const { getByTestId } = render(<App />);

    const inputField = getByTestId('input') as HTMLInputElement;
    expect(inputField.value).toEqual('');
  });

  it('should be possible to enter text', () => {
    const { getByTestId } = render(<App />);

    let inputField = getByTestId('input') as HTMLInputElement;
    fireEvent.change(inputField, {
      target: {
        value: 'text 1',
      },
    });

    // alternative way:
    inputField = getByTestId('input') as HTMLInputElement;
    inputField.value += ', text 2';
    inputField.dispatchEvent(new Event('input'));

    inputField = getByTestId('input') as HTMLInputElement;
    expect(inputField.value).toEqual('text 1, text 2');
  });
});
