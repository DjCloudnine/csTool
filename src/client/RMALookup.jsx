 import React, { useState } from 'react';

const OrderSearchForm = () => {
  const [formData, setFormData] = useState({
    rmaNumber: '',
    orderNumber: '',
    zipCode: '',
    cxFirstName: '',
    cxLastName: '',
    channelOrder: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleReset = () => {
    setFormData({
      rmaNumber: '',
      orderNumber: '',
      zipCode: '',
      cxFirstName: '',
      cxLastName: '',
      channelOrder: ''
    });
  };

  const handleSubmit = () => {
    const { rmaNumber, orderNumber, zipCode, cxFirstName, cxLastName, channelOrder } = formData;

    if (rmaNumber) {
      window.open(`https://nws.cwa.sellercloud.com/orders/Orders_Return.aspx?RMAID=${rmaNumber}`, '_blank');
    } else if (orderNumber) {
      window.open(`https://nws.cwa.sellercloud.com/Orders/Orders_Details.aspx?ID=${orderNumber}`, '_blank');
    } else if (zipCode) {
      window.open(`https://nws.cwa.sellercloud.com/Orders/ManageOrders.aspx?DateRange=6&ShipDateRange=9&CompanyId=&advancedMode=false&CustomerZipCode=${zipCode}`, '_blank');
    } else if (cxFirstName || cxLastName) {
      window.open(`https://nws.cwa.sellercloud.com/Orders/ManageOrders.aspx?DateRange=6&ShipDateRange=9&CompanyId=&advancedMode=false&CustomerNameFirst=${cxFirstName}&CustomerNameLast=${cxLastName}&LocationNotesFilter=0`, '_blank');
    } else if (channelOrder) {
      window.open(`https://nws.cwa.sellercloud.com/Orders/ManageOrders.aspx?DateRange=9&ShipDateRange=9&CompanyId=0&OrderSourceOrderID=${channelOrder}&advancedMode=false&LocationNotesFilter=0`, '_blank');
    }
  };

  return (
    <div>
      <label htmlFor="rmaNumber">RMA #:</label>
      <input type="text" id="rmaNumber" name="rmaNumber" value={formData.rmaNumber} onChange={handleInputChange} /><br />

      <label htmlFor="orderNumber">Order #:</label>
      <input type="text" id="orderNumber" name="orderNumber" value={formData.orderNumber} onChange={handleInputChange} /><br />

      <label htmlFor="zipCode">Zip Code:</label>
      <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} /><br />

      <label htmlFor="cxFirstName">CX Name:</label>
      <input type="text" id="cxFirstName" name="cxFirstName" value={formData.cxFirstName} onChange={handleInputChange} placeholder="First Name" />
      <input type="text" id="cxLastName" name="cxLastName" value={formData.cxLastName} onChange={handleInputChange} placeholder="Last Name" /><br />

      <label htmlFor="channelOrder">Channel Order:</label>
      <input type="text" id="channelOrder" name="channelOrder" value={formData.channelOrder} onChange={handleInputChange} /><br />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default OrderSearchForm;
