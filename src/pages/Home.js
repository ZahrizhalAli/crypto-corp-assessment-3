import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <>
      <Navbar title={'Crypto Corp.'} />

      <div className="row home">
        <div className="home-left-container col-lg-7">
          <h1>
            Trusted Coin <br />
            Market.
          </h1>
          <h2>Easy-and-secured investment.</h2>
          <h3>1 Million Users</h3>
          <h3>24/7 Transactions</h3>
          <h3>50+ Supported Payment</h3>
        </div>
        <div className="col-lg-5">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Sign Up</h2>
            </div>
            <div className="card-body">
              <div className="col-md-8 pr-md-1">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value="zahrizhalali29"
                  />
                </div>
              </div>
              <div className="col-md-8 pr-md-1">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value="zahrizhalali29"
                  />
                </div>
              </div>
              <div className="col-md-8 pr-md-1">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value="zahrizhalali29"
                  />
                </div>
              </div>
              <div className="col-md-8 pr-md-1">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value="zahrizhalali29"
                  />
                </div>
              </div>
              <div className="col-md-8 pr-md-1">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Username"
                    value="zahrizhalali29"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
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
                  Sign Up
                </label>
                <label className="btn btn-sm btn-primary btn-simple " id="1">
                  <input type="radio" name="options" autocomplete="off" /> Sign
                  In
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
