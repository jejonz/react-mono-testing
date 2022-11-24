// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';

export function App() {
  const [inputData, setInputData] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  return (
    <div>
      <h1 data-testid="title" className={styles.h1}>
        Welcome Basic!
      </h1>
      <div className={styles.inputContainer}>
        <label data-testid="label" className={styles.label}>
          Data Input:
        </label>
        <input
          data-testid="input"
          className={styles.input}
          value={inputData}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default App;
