import React, { lazy } from 'react';
import MarketSmallCard from '../components/MarketSmallCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="main-panel">
        <Navbar title={'Dashboard'} />
        <div className="content">
          <div className="row">
            <div className="col-12">
              <div className="card card-chart">
                <div className="card-header ">
                  <div className="row">
                    <div className="col-sm-6 text-left">
                      <h2 className="card-title">Market Overview</h2>
                      <div className="market-overview-headline">
                        <div className="market-ov-buy">
                          <p className="text-buy">BUY</p>
                          <p>$5,673</p>
                        </div>
                        <div className="market-ov-sell">
                          <p className="text-sell">SELL</p>
                          <p>$574</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div
                        className="btn-group btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <label
                          className="btn btn-sm btn-primary btn-simple active"
                          id="0"
                        >
                          <input
                            type="radio"
                            name="options"
                            autocomplete="off"
                            checked
                          />{' '}
                          Accounts
                        </label>
                        <label
                          className="btn btn-sm btn-primary btn-simple "
                          id="1"
                        >
                          <input
                            type="radio"
                            name="options"
                            autocomplete="off"
                          />{' '}
                          Purchases
                        </label>
                        <label
                          className="btn btn-sm btn-primary btn-simple "
                          id="2"
                        >
                          <input
                            type="radio"
                            name="options"
                            autocomplete="off"
                          />{' '}
                          Sessions
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart-area">
                    <canvas id="chartBig1"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <MarketSmallCard
                coinName="Bitcoin"
                currentPrice="24,150"
                priceStatus="1.56"
                chartName="chartLinePurple"
                isUp={true}
              />
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Market Overview</h4>
                </div>
                <div className="card-body ">
                  <div className="table-responsive market-table">
                    <table className="table tablesorter " id="">
                      <thead style={{ color: 'white' }}>
                        <th className="text-center">Coin</th>
                        <th className="text-center">Last Price</th>

                        <th className="text-center">Change</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">Bitcoin</td>
                          <td className="text-center">$1,234</td>
                          <td className="text-center">$36,738</td>
                        </tr>
                        <tr>
                          <td className="text-center">Bitcoin</td>
                          <td className="text-center">$1,234</td>
                          <td className="text-center">$36,738</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <MarketSmallCard
                coinName="Ethereum"
                currentPrice="4,150"
                priceStatus="0.36"
                chartName="chartLineGreen"
                isUp={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
