import React, { useState } from 'react';
import './app.css'; // You can style your components in App.css file

function App() {
  // State to keep track of the selected PC brand and its color
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Function to handle brand button clicks
  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div className="App">
      <footer className="App-header">
        <h1>PC Part Number</h1>
        {/* Navigation buttons */}
        <div className="brand-buttons">
          <button onClick={() => handleBrandClick('Dell')}>Dell</button>
          <button onClick={() => handleBrandClick('HP')}>HP</button>
          <button onClick={() => handleBrandClick('Lenovo')}>Lenovo</button>
        </div>
        {/* Display content based on selected brand */}
        <div className="content">
          {selectedBrand && (
            <>
              <div className="selected-brand" style={{ backgroundColor: selectedBrand === 'Dell' ? 'red' : selectedBrand === 'HP' ? 'blue' : 'yellow' }}>
                <p>Select what model</p>
              </div>
            </>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
