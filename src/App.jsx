import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Methane oyage Backend Railway URL eka thiyenna ona
    const BACKEND_URL = "https://wmt-lab-test-ex1-production.up.railway.app";

    try {
      const response = await fetch(`${BACKEND_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert(`✅ Success: ${data.message}`);
      } else {
        alert("❌ Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Could not connect to backend!");
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>WMT Lab Test - User Registration</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label><br />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label><br />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Phone Number: </label><br />
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>


        <button type="submit" style={{ background: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
          Register
        </button>
      </form>
    </div>


  );
}

export default App;
