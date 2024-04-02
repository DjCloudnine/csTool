import React from 'react';

function Links() {
  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <h2 className="headerSecond">Links</h2>
      <ul className="links-container">
        <li>
          <button onClick={() => handleLinkClick('https://nws.cwa.sellercloud.com/')}>
            SellerCloud
          </button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('https://seller.walmart.com/items-and-inventory/manage-items')}>
            Walmart
          </button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('https://sellercentral.amazon.com/home?mons_sel_dir_mcid=amzn1.merchant.d.AAY7NAGSIWRGHLV4AAOX4LIRHI2Q&mons_sel_mkid=ATVPDKIKX0DER&mons_sel_dir_paid=amzn1.pa.d.AAK6GNIBVCKPR2FS3XUMM5EKLDBQ')}>
            Amazon
          </button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('https://sellerportal.newegg.com/business-report/summary')}>
            NewEgg
          </button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('https://login.bigcommerce.com/login')}>
            BigCommerce
          </button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('https://dashboard-3.edesk.com/crm/new')}>
            EDesk
          </button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('https://reviveit.awsapps.com/connect/real-time-metrics?tableType=skill')}>
            Amazon Connect
          </button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('https://www.tidio.com/panel/inbox/conversations?stream=myOpen')}>
            Tidio
          </button>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default Links;
