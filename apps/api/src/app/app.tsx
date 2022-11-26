// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import getJoke from '../api/jokes';
import React, { useEffect, useState } from 'react';

interface Joke {
  id: string;
  type: string;
  setup: string;
  punchline: string;
}

export function App() {
  const [update, setUpdate] = useState(false);
  const [joke, setJoke] = useState({
    id: '',
    type: '',
    setup: '',
    punchline: '',
  } as Joke);

  useEffect(() => {
    const controller = new AbortController();

    try {
      getJoke(controller).then((joke) => {
        setJoke(joke);
      });
    // eslint-disable-next-line no-empty
    } catch (error) {}

    return () => {
      controller.abort();
    }
  }, [update]);

  const onClick = ((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setUpdate(!update);
  });

  return (
    <div>
      <h1 className={styles.h1}>Test app using API</h1>
      <p data-testid="joke-setup">{joke?.setup}</p>
      <p data-testid="joke-punchline">{joke?.punchline}</p>
      <button onClick={onClick}>Next Joke</button>
    </div>
  );
}

export default App;
