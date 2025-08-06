import React from 'react';
import ChallengeForm from './components/ChallengeForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Challenge Dashboard</h1>
      </header>
      <main>
        <ChallengeForm />
      </main>
    </div>
  );
}

export default App;
