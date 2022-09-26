import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getCoinHistories } from '../functions/requests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faClock,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import MarketOverviewCard from '../components/MarketOverviewCard';
import img from './news.jpg';

function Home() {
  const [data, setData] = useState([]);
  const [loginmode, setLoginMode] = useState(false);

  useEffect(() => {
    getCoinHistories()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <>
      <Navbar title={'Crypto Corp.'} />

      <div className="row home">
        <div className="home-left-container col-lg-7">
          <h1 className="home-title">
            Trusted Coin <br />
            Market.
          </h1>
          <h2>Easy-and-secured investment.</h2>
          <h3>
            <FontAwesomeIcon icon={faUsers} style={{ marginRight: '10px' }} />1
            Million Users
          </h3>
          <h3>
            <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} />
            24/7 Transactions
          </h3>
          <h3>
            <FontAwesomeIcon
              icon={faCreditCard}
              style={{ marginRight: '10px' }}
            />
            50+ Supported Payment
          </h3>
        </div>
        <div className="col-lg-4">
          <div className="card card-home-right">
            <div className="card-header">
              {loginmode ? (
                <h2 className="card-title text-center">Sign In</h2>
              ) : (
                <h2 className="card-title text-center">Sign Up</h2>
              )}
            </div>
            <div className="card-body">
              {loginmode ? (
                <>
                  <div className="col">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Username"
                        value="h1r3me@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <label
                      className="btn btn-sm btn-primary btn-simple active"
                      id="0"
                    >
                      Submit
                    </label>
                  </div>
                </>
              ) : (
                <>
                  <div className="col">
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
                  <div className="col">
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
                  <div className="col">
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
                  <div className="col">
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
                  <div className="col">
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
                  <div className="col">
                    <label
                      className="btn btn-sm btn-primary btn-simple active"
                      id="0"
                    >
                      Submit
                    </label>
                  </div>
                </>
              )}
              <div className="col text-center">
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label
                    className="btn btn-sm btn-primary btn-simple active"
                    id="0"
                    onClick={() => {
                      setLoginMode(false);
                    }}
                  >
                    <input
                      type="radio"
                      name="options"
                      autocomplete="off"
                      checked
                    />{' '}
                    Sign Up
                  </label>
                  <label
                    onClick={() => {
                      setLoginMode(true);
                    }}
                    className="btn btn-sm btn-primary btn-simple "
                    id="1"
                  >
                    <input type="radio" name="options" autocomplete="off" />{' '}
                    Sign In
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-auto pt-5">
        <div className="col-lg-6">
          <MarketOverviewCard />
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Market News</h4>
            </div>
            <div className="card-body">
              <div className="col-lg-10 m-auto">
                <img src={img} />
                <h4 style={{ fontWeight: 'bold' }}>
                  First Mover Asia: Bitcoin Sticks Near $19K; the Most
                  ‘Profitable’ Mining GPU Makes You Back Your Money in 3 Years{' '}
                </h4>
                <p className="text-primary">Read More..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
