function App() {
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
      <h1 style={{ color: 'green' }}>SAFE TO WORK</h1>
      <p style={{ marginTop: '20px', fontSize: '16px' }}>
        To sync manually, open Warp and type: <strong>fixsync</strong>
      </p>
    </div>
  );
}

export default App;
