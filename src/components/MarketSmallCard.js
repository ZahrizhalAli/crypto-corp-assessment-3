import React from 'react';

function MarketSmallCard({
  coinName,
  currentPrice,
  priceStatus,
  chartName,
  isUp,
}) {
  return (
    <>
      <div className="card card-chart">
        <div className="card-header ">
          <h2 className="card-category">{coinName}</h2>
          <div className="market-overview-headline">
            <h4 className="card-title">
              <i className="tim-icons icon-bell-55 text-primary "></i> $
              {currentPrice}
            </h4>
            <h4 className={`${isUp ? 'text-buy' : 'text-sell'} ml-auto`}>
              {priceStatus}
            </h4>
          </div>
        </div>
        <div className="card-body ">
          <div className="chart-area">
            <canvas id={chartName}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketSmallCard;
