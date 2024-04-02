import React, { useState, lazy, Suspense } from 'react';
import './app.css'; // You can style your components in App.css file

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Item Look Up');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const components = {
    'Item Look Up': lazy(() => import('./ItemLookup')),
    'RMA Look Up': lazy(() => import('./RMALookup')),
    'Amazon Refund': lazy(() => import('./AmazonRefund')),
    'Links': lazy(() => import('./Links'))
  };

  const Component = components[selectedMenuItem];

  return (
    <div>
      <header>
        <h1>Customer Service</h1>
      </header>
      <nav>
        <ul className="link-container">
          <li onClick={() => handleMenuItemClick('Item Look Up')}>Item Look Up</li>
          <li onClick={() => handleMenuItemClick('RMA Look Up')}>RMA Look Up</li>
          <li onClick={() => handleMenuItemClick('Amazon Refund')}>Amazon Refund</li>
          <li onClick={() => handleMenuItemClick('Links')}>Links</li>
        </ul>
      </nav>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {Component && <Component />}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
