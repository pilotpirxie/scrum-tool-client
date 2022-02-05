import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from '../../utils/hooks';
import { ActionType } from '../../actions/second';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: ActionType.Increment,
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
