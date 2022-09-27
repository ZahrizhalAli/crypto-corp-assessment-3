import React, { useEffect, useState } from 'react';
import MarketSmallCard from '../components/MarketSmallCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { getCoinHistories } from '../functions/requests';
import MarketOverviewCard from '../components/MarketOverviewCard';
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
                      <h2 className="card-title">Market Overview </h2>
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
              <MarketOverviewCard />
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
