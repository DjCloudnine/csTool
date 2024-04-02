 import React, { useState } from 'react';
import './app.css';

function App() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  // Function to dynamically import components based on selected brand
  const importComponent = (brand) => {
    switch (brand) {
      case 'Dell':
        return import('./dell');
      case 'HP':
        return import('./hp');
      case 'Lenovo':
        return import('./lenovo');
      default:
        return null;
    }
  };

  // Load the selected brand's component
  const SelectedComponent = selectedBrand ? React.lazy(() => importComponent(selectedBrand)) : null;

  return (
    <div className="App">
      <header className="App-header">
        <h1>PC Part Number</h1>
        <div className="brand-buttons">
          <button onClick={() => handleBrandClick('Dell')}>Dell</button>
          <button onClick={() => handleBrandClick('HP')}>HP</button>
          <button onClick={() => handleBrandClick('Lenovo')}>Lenovo</button>
        </div>
        <div className="content">
          {/* Render the selected brand's component */}
          {SelectedComponent && (
            <React.Suspense fallback={<div>Loading...</div>}>
              <SelectedComponent />
            </React.Suspense>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
