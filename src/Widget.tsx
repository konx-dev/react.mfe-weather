const Widget = () => {
  return (
    <div style={{ 
      padding: '20px', 
      borderRadius: '8px', 
      backgroundColor: '#f0f4f8', 
      color: '#333',
      border: '2px solid #007bff'
    }}>
      <h4>☀️ Weather Module</h4>
      <p>Location: London, UK</p>
      <p>Temp: 18°C</p>
      <small>Status: Live from Port 3001</small>
    </div>
  );
};

export default Widget;