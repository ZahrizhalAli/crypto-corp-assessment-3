import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWallet,
  faDollarSign,
  faArrowRightArrowLeft,
  faChartColumn,
  faBarcode,
} from '@fortawesome/free-solid-svg-icons';

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
          <ul className="nav sidebar-items">
            <li>
              <a href="/dashboard/portfolio">
                <p>
                  <FontAwesomeIcon className="sidebar-icons" icon={faWallet} />
                  Portfolio
                </p>
              </a>
            </li>
            <li>
              <a href="/dashboard/transactions">
                <p>
                  {' '}
                  <FontAwesomeIcon className="sidebar-icons" icon={faBarcode} />
                  Transactions
                </p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>
                  {' '}
                  <FontAwesomeIcon
                    className="sidebar-icons"
                    icon={faDollarSign}
                  />{' '}
                  Trading
                </p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>
                  {' '}
                  <FontAwesomeIcon
                    className="sidebar-icons"
                    icon={faArrowRightArrowLeft}
                  />
                  Exchange
                </p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>
                  <FontAwesomeIcon
                    className="sidebar-icons"
                    icon={faChartColumn}
                  />
                  Market Capital
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
