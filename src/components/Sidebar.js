import React from 'react';

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-wrapper" data="blue">
          <div className="logo">
            <a href="/" className="simple-text logo-normal text-center">
              Crypto Corp.
            </a>
          </div>
          <ul className="nav">
            <li>
              <a href="/dashboard/portfolio">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Portfolio</p>
              </a>
            </li>
            <li>
              <a href="/dashboard/transactions">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Transactions</p>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Trading</p>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Exchange</p>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Market Capital</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
