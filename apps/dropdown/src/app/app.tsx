// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

const options = [
  { value: 'o0', label: 'Select Item' },
  { value: 'o1', label: 'One Input' },
  { value: 'o2', label: 'One Disabled Input' },
];

export function App() {
  const [inputHidden, setInputHidden] = React.useState(true);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
  
    setInputHidden(true);
    if (value === 'o1') {
      setInputHidden(false);
    }
  };

  return (
    <div>
      <h1>Dropdown tests</h1>

      <form>
          <select data-testid='dropdown' name="dropdown" id="dropdown" onChange={onChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>

          <input data-testid='input' type="text" name="input" id="input" hidden={inputHidden} />
      </form>
    </div>
  );
}

export default App;
