import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './app';

const defaultData = {
  id: '123',
  type: 'general',
  setup: 'third question',
  punchline: 'third punchline',
}

const initialData = {
  id: '123',
  type: 'general',
  setup: 'first question',
  punchline: 'first punchline',
}

const nextData = {
  id: '123',
  type: 'general',
  setup: 'second question',
  punchline: 'second punchline',
}

// Note: This mock considers that useEffect is called twice
// due to strict mode in React.
jest.mock('../api/jokes', () => {
  return jest.fn()
    .mockResolvedValue(defaultData) // Third call
    .mockResolvedValueOnce(initialData)
    .mockResolvedValueOnce(nextData);
});

describe('App', () => {

  it('should have a greeting as the title', async() => {
    act(() => {
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.getByText(/Test app using API/)).toBeTruthy();
    });
  });

  it('should render a joke on load', async() => {
    act(() => {
      render(<App />);
    });

    await waitFor(() => {
      expect(
        screen.getByTestId('joke-setup').textContent
      ).toEqual('second question');

      expect(
        screen.getByTestId('joke-punchline').textContent
      ).toEqual('second punchline');
    });
  });

  it('clicking next joke should render a new joke', async() => {
    act(() => {
      render(<App />);
    });
    
    fireEvent.click(screen.getByText('Next Joke'));

    await waitFor(() => {
      expect(
        screen.getByTestId('joke-setup').textContent
      ).toEqual('third question');

      expect(
        screen.getByTestId('joke-punchline').textContent
      ).toEqual('third punchline');
    });
  });

});
