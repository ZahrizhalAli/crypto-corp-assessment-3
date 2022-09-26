import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getCoinHistories } from '../functions/requests';

function MarketOverviewCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCoinHistories(10)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
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
                {data &&
                  data.map((coin, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center">
                          <div className="photo">
                            <img src={coin.image} />
                          </div>
                        </td>
                        <td className="text-center">
                          ${parseFloat(coin.current_price)}
                        </td>
                        <td className="text-center">
                          <p
                            className={`text-center ${
                              coin.price_change_24h > 0
                                ? 'text-price-green'
                                : 'text-price-red'
                            }`}
                          >
                            ${coin.price_change_24h.toFixed(4)}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
              <div className="text-center">
                <span style={{ color: 'white' }}>.....</span>
              </div>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketOverviewCard;
