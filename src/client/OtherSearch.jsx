import React, { useState } from 'react';

const InventoryForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    minQuantity: '',
    productType: ''
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
      productName: '',
      minQuantity: '',
      productType: ''
    });
  };

  const handleSubmit = () => {
    const { productName, minQuantity, productType } = formData;
    const url = `https://nws.cwa.sellercloud.com/Inventory/ManageInventory.aspx?CompanyIDList=&sku=&keywords=${productName}&active=1&inventoryFrom=${minQuantity}&ProductTypeId=${productType}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleInputChange} /><br />
      
      <label htmlFor="minQuantity">Minimum Quantity:</label>
      <input type="text" id="minQuantity" name="minQuantity" value={formData.minQuantity} onChange={handleInputChange} /><br />
      
      <label htmlFor="productType">Product Type:</label>
      <select id="productType" name="productType" value={formData.productType} onChange={handleInputChange}>
        <option value="">Select Product Type</option>
        <option value="Cables">Cables</option>
        <option value="Monitors">Monitors</option>
        <option value="Desktops">Desktops</option>
        <option value="Laptops">Laptops</option>
        <option value="Docking Stations">Docking Stations</option>
      </select><br />
      
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default InventoryForm;
