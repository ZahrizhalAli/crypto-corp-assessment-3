import React from 'react';
import MarketOverviewCard from '../components/MarketOverviewCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Transactions() {
  return (
    <>
      <Sidebar />
      <div className="main-panel">
        <Navbar title={'Dashboard'} />
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header ">
                  <h1 className="card-title">
                    <strong>Recent Activity</strong>
                  </h1>
                </div>
                <div className="card-body ">
                  <div className="table-responsive market-table">
                    <table className="table tablesorter " id="">
                      <thead style={{ color: 'white' }}>
                        <th className="text-center">Activity</th>
                        <th className="text-center">Time</th>
                        <th className="text-center">Amount</th>

                        <th className="text-center">Status</th>
                        <th className="text-center">Transaction Id</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">
                            <div className="photo">
                              <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" />
                            </div>
                          </td>
                          <td className="text-center">$1,234</td>
                          <td className="text-center">
                            <p className="text-buy">1.54</p>
                          </td>
                          <td className="text-center ">
                            <p className="text-price-red">Canceled</p>
                          </td>

                          <td className="text-center">nlavkoi2efj</td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <div className="photo">
                              <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" />
                            </div>
                          </td>
                          <td className="text-center">$1,234</td>
                          <td className="text-center">$36,738</td>
                          <td className="text-center">
                            {' '}
                            <p className="text-price-green">Completed</p>
                          </td>
                          <td className="text-center">dlkajf18fh0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header row">
                  <div className="col-sm-6">
                    <h3 className="card-title">Quick Transactions</h3>
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
                        Withdraw
                      </label>
                      <label
                        className="btn btn-sm btn-primary btn-simple "
                        id="1"
                      >
                        <input type="radio" name="options" autocomplete="off" />{' '}
                        Topup
                      </label>
                      <label
                        className="btn btn-sm btn-primary btn-simple "
                        id="2"
                      >
                        <input type="radio" name="options" autocomplete="off" />{' '}
                        Transfer
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-body row">
                  <div className="col-md-4 pr-md-1">
                    <div className="form-group">
                      <label>Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value="zahrizhalali29"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 pr-md-1">
                    <div className="form-group">
                      <label>Coin</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value="zahrizhalali29"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-fill btn-primary">
                    Process
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <MarketOverviewCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
