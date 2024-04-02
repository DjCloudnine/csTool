import React, { useState } from 'react';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    keywords: '',
    minQuantity: '',
    brand: '',
    hardDrive: '',
    ram: '',
    procFamily: '',
    procSeries: ''
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
      keywords: '',
      minQuantity: '',
      brand: '',
      hardDrive: '',
      ram: '',
      procFamily: '',
      procSeries: ''
    });
  };

  const handleSubmit = () => {
    const { keywords, minQuantity, brand, hardDrive, ram, procSeries } = formData;
    const url = `https://nws.cwa.sellercloud.com/Inventory/ManageInventory.aspx?ProductTypeId=Desktops&keywords=${keywords}&CC_HARDDRIVECAPACITY=${hardDrive}&CC_RAM=${ram}&CC_PROCESSORSERIES=${procSeries}&inventoryFrom=${minQuantity}&CC_BRAND2=${brand}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <label htmlFor="keywords">Keywords:</label>
      <input type="text" id="keywords" name="keywords" value={formData.keywords} onChange={handleInputChange} /><br />
      
      <label htmlFor="minQuantity">Minimum Quantity:</label>
      <input type="text" id="minQuantity" name="minQuantity" value={formData.minQuantity} onChange={handleInputChange} /><br />
      
      <label htmlFor="brand">Brand:</label>
      <select id="brand" name="brand" value={formData.brand} onChange={handleInputChange}>
        <option value="">Select Brand</option>
        <option value="Dell">Dell</option>
        <option value="HP">HP</option>
        <option value="Lenovo">Lenovo</option>
      </select><br />
      
      <label htmlFor="hardDrive">Hard Drive:</label>
      <select id="hardDrive" name="hardDrive" value={formData.hardDrive} onChange={handleInputChange}>
        <option value="">Select Hard Drive</option>
        <option value="128GB SSD">128GB SSD</option>
        <option value="256GB SSD">256GB SSD</option>
        <option value="512GB SSD">512GB SSD</option>
        <option value="1TB SSD">1TB SSD</option>
        <option value="500GB">500GB</option>
        <option value="1TB">1TB</option>
      </select><br />
      
      <label htmlFor="ram">RAM:</label>
      <select id="ram" name="ram" value={formData.ram} onChange={handleInputChange}>
        <option value="">Select RAM</option>
        <option value="4GB">4GB</option>
        <option value="8GB">8GB</option>
        <option value="12GB">12GB</option>
        <option value="16GB">16GB</option>
        <option value="24GB">24GB</option>
        <option value="32GB">32GB</option>
        <option value="64GB">64GB</option>
      </select><br />
      
      <label htmlFor="procFamily">Proc. Family:</label>
      <select id="procFamily" name="procFamily" value={formData.procFamily} onChange={handleInputChange}>
        <option value="">Select Processor Family</option>
        <option value="i9">i9</option>
        <option value="i7">i7</option>
        <option value="i5">i5</option>
        <option value="i3">i3</option>
      </select><br />
      
      <label htmlFor="procSeries">Proc. Series:</label>
      <select id="procSeries" name="procSeries" value={formData.procSeries} onChange={handleInputChange}>
        <option value="">Select Processor Series</option>
        <option value="Intel Core i3 6th Gen.">Intel Core i3 6th Gen.</option>
        <option value="Intel Core i3 7th Gen.">Intel Core i3 7th Gen.</option>
        <option value="Intel Core i3 8th Gen.">Intel Core i3 8th Gen.</option>
        <option value="Intel Core i3 9th Gen.">Intel Core i3 9th Gen.</option>
        <option value="Intel Core i3 10th Gen.">Intel Core i3 10th Gen.</option>
        <option value="Intel Core i5 6th Gen.">Intel Core i5 6th Gen.</option>
        <option value="Intel Core i5 7th Gen.">Intel Core i5 7th Gen.</option>
        <option value="Intel Core i5 8th Gen.">Intel Core i5 8th Gen.</option>
        <option value="Intel Core i5 9th Gen.">Intel Core i5 9th Gen.</option>
        <option value="Intel Core i5 10th Gen.">Intel Core i5 10th Gen.</option>
        <option value="Intel Core i5 11th Gen.">Intel Core i5 11th Gen.</option>
        <option value="Intel Core i7 6th Gen.">Intel Core i7 6th Gen.</option>
        <option value="Intel Core i7 7th Gen.">Intel Core i7 7th Gen.</option>
        <option value="Intel Core i7 8th Gen.">Intel Core i7 8th Gen.</option>
        <option value="Intel Core i7 9th Gen.">Intel Core i7 9th Gen.</option>
        <option value="Intel Core i7 10th Gen.">Intel Core i7 10th Gen.</option>
        <option value="Intel Core i7 11th Gen.">Intel Core i7 11th Gen.</option>
        <option value="Intel Core i9 6th Gen.">Intel Core i9 6th Gen.</option>
        <option value="Intel Core i9 7th Gen.">Intel Core i9 7th Gen.</option>
        <option value="Intel Core i9 8th Gen.">Intel Core i9 8th Gen.</option>
        <option value="Intel Core i9 9th Gen.">Intel Core i9 9th Gen.</option>
        <option value="Intel Core i9 10th Gen.">Intel Core i9 10th Gen.</option>
        <option value="Intel Core i9 11th Gen.">Intel Core i9 11th Gen.</option>
      </select><br />
      
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default SearchForm;
