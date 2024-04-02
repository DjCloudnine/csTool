 import React, { useState } from 'react';

const MonitorForm = () => {
  const [formData, setFormData] = useState({
    keywords: '',
    minQuantity: '',
    brand: '',
    aspectRatio: '',
    screenSize: '',
    screenResolution: ''
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
      aspectRatio: '',
      screenSize: '',
      screenResolution: ''
    });
  };

  const handleSubmit = () => {
    const { keywords, minQuantity, brand, aspectRatio, screenSize, screenResolution } = formData;
    const url = `https://nws.cwa.sellercloud.com/Inventory/ManageInventory.aspx?ProductTypeId=Monitors&keywords=${keywords}&inventoryFrom=${minQuantity}&CC_BRAND2=${brand}&CC_SCREENASPECTRATIO=${aspectRatio}&CC_SCREENSIZE=${screenSize}&CC_SCREENRESOLUTION=${screenResolution}`;
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
      
      <label htmlFor="aspectRatio">Aspect Ratio:</label>
      <select id="aspectRatio" name="aspectRatio" value={formData.aspectRatio} onChange={handleInputChange}>
        <option value="">Select Aspect Ratio</option>
        <option value="5:4">5:4</option>
        <option value="4:3">4:3</option>
        <option value="3:2">3:2</option>
        <option value="16:9">16:9</option>
        <option value="16:10">16:10</option>
      </select><br />
      
      <label htmlFor="screenSize">Screen Size:</label>
      <select id="screenSize" name="screenSize" value={formData.screenSize} onChange={handleInputChange}>
        <option value="">Select Screen Size</option>
        <option value='19"'>19"</option>
        <option value='19.5"'>19.5"</option>
        <option value='20"'>20"</option>
        <option value='21"'>21"</option>
        <option value='21.5"'>21.5"</option>
        <option value='22"'>22"</option>
        <option value='22.5"'>22.5"</option>
        <option value='23"'>23"</option>
        <option value='23.6"'>23.6"</option>
        <option value='23.8"'>23.8"</option>
        <option value='24"'>24"</option>
        <option value='25"'>25"</option>
        <option value='25.5"'>25.5"</option>
        <option value='26"'>26"</option>
        <option value='27"'>27"</option>
        <option value='28"'>28"</option>
        <option value='29"'>29"</option>
        <option value='30"'>30"</option>
        <option value='31"'>31"</option>
        <option value='32"'>32"</option>
      </select><br />
      
      <label htmlFor="screenResolution">Screen Resolution:</label>
      <select id="screenResolution" name="screenResolution" value={formData.screenResolution} onChange={handleInputChange}>
        <option value="">Select Screen Resolution</option>
        <option value="1024x576">1024x576</option>
        <option value="1024x600">1024x600</option>
        <option value="1152x864">1152x864</option>
        <option value="1280x1024">1280x1024</option>
        <option value="1280x720">1280x720</option>
        <option value="1280x768">1280x768</option>
        <option value="1280x800">1280x800</option>
        <option value="1280x854">1280x854</option>
        <option value="1280x960">1280x960</option>
        <option value="1366x768">1366x768</option>
        <option value="1440x1080">1440x1080</option>
        <option value="1440x900">1440x900</option>
        <option value="1440x960">1440x960</option>
        <option value="1600x1200">1600x1200</option>
        <option value="1600x900">1600x900</option>
        <option value="1680x1050">1680x1050</option>
        <option value="1920x1080">1920x1080</option>
        <option value="2040x1536">2040x1536</option>
        <option value="2048x1536">2048x1536</option>
        <option value="2304x1440">2304x1440</option>
        <option value="2560x1440">2560x1440</option>
        <option value="2560x1600">2560x1600</option>
        <option value="2736x1824">2736x1824</option>
        <option value="2880x1620">2880x1620</option>
        <option value="2880x1800">2880x1800</option>
        <option value="3000x2000">3000x2000</option>
        <option value="3200x1800">3200x1800</option>
        <option value="3840x2160">3840x2160</option>
        <option value="3840x2560">3840x2560</option>
        <option value="4096x2160">4096x2160</option>
        <option value="480x720">480x720</option>
        <option value="5120x2880">5120x2880</option>
        <option value="7680x4320">7680x4320</option>
        <option value="800x600">800x600</option>
      </select><br />
      
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default MonitorForm;
