import React, { useState } from 'react';
import DesktopSearch from './DesktopSearch';
import LaptopSearch from './LaptopSearch'; 
import MonitorSearch from './MonitorSearch';
import OtherSearch from './OtherSearch'; 

const App = () => {
  const [selectedOption, setSelectedOption] = useState('Desktops');

  const renderContent = () => {
    switch (selectedOption) {
      case 'Desktops':
        return <DesktopSearch />;
      case 'Laptops':
        return <LaptopSearch />;
      case 'Monitors':
        return <MonitorSearch />;
      case 'Other':
        return <OtherSearch />;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => setSelectedOption('Desktops')}>Desktops</li>
          <li onClick={() => setSelectedOption('Laptops')}>Laptops</li>
          <li onClick={() => setSelectedOption('Monitors')}>Monitors</li>
          <li onClick={() => setSelectedOption('Other')}>Other</li>
        </ul>
      </nav>
      {renderContent()}
    </div>
  );
};

export default App;
