import React, { useState } from 'react';
import MonitorSearch from './MonitorSearch';
import LaptopSearch from './LaptopSearch';
import DesktopSearch from './DesktopSearch';

export default function App() {
  const [monitorSearchOpen, setMonitorSearchOpen] = useState(false);
  const [laptopSearchOpen, setLaptopSearchOpen] = useState(false);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);

  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzztuTj80dASP7ek7lAe_B3gJZhotSWcihne10Cjfdwgw2Ms49DHNbrbZ3PyhcQ9DVbyA/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>Call Notes</h1>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <br />
          <input placeholder="Phone Number" name="Phone" type="text" />
          <br />
          <textarea placeholder="Call Notes" name="Notes" rows={4} />
          <br />
          <input name="Name" type="submit" />
        </form>
      </div>
      <div>
        <h2>Search Options</h2>
        <button onClick={() => setMonitorSearchOpen(!monitorSearchOpen)}>Monitor Search</button>
        {monitorSearchOpen && <MonitorSearch />}
        <button onClick={() => setLaptopSearchOpen(!laptopSearchOpen)}>Laptop Search</button>
        {laptopSearchOpen && <LaptopSearch />}
        <button onClick={() => setDesktopSearchOpen(!desktopSearchOpen)}>Desktop Search</button>
        {desktopSearchOpen && <DesktopSearch />}
      </div>
    </div>
  );
}
