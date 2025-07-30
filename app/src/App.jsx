import { useState } from 'react';

function App() {
  const [status, setStatus] = useState('SAFE TO WORK');

  const handleResync = async () => {
    try {
      const response = await window.electronAPI.runSync();
      setStatus(response.includes('SAFE TO WORK') ? 'SAFE TO WORK' : 'SYNC FAILED');
    } catch (err) {
      setStatus('SYNC FAILED');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif'
      }}
    >
      <h1 style={{ color: status === 'SAFE TO WORK' ? 'green' : 'red' }}>{status}</h1>
      <button
        onClick={handleResync}
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Re‑Sync
      </button>
    </div>
  );
}

export default App;
