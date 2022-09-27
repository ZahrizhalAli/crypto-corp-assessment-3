import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getCoinHistories, registerTelegram } from '../functions/requests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faClock,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import MarketOverviewCard from '../components/MarketOverviewCard';
import img from './news.jpg';
import { toast } from 'react-toastify';

function Home({ history }) {
  // LOGIN
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // REGISTER
  const [username, setUsername] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const [loginmode, setLoginMode] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(window.localStorage.getItem('userEmail'));
    getCoinHistories()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
      
  }, []);

  function handleLogin(event) {
    event.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin') {
      window.localStorage.setItem('userEmail', email);
      history.push('/dashboard');
      window.location.reload();
    } else {
      history.push('/');
      toast.error('User not found or Password Wrong.');
    }
  }

  function handleRegister(event) {
    event.preventDefault();
    if (!email && !password && !firstname && !lastname && !username) {
      toast.error('Complete Your Registration first.');
    } else {
      registerTelegram(`${firstname} just Signed up in our Crypto-Corp. App!`)
        .then((res) => {
          toast(
            'Great you are in!. Your account should be in our Telegram Bot'
          );
        })
        .catch((err) => {
          toast.error('Registration Failed');
        });
    }
  }
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
          {!user && (
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
                    <form onSubmit={handleLogin}>
                      <div className="col">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col">
                        <label
                          className="btn btn-sm btn-primary btn-simple active"
                          id="0"
                          onClick={handleLogin}
                        >
                          Submit
                        </label>
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <form onSubmit={handleRegister}>
                      <div className="col">
                        <div className="form-group">
                          <label>Username</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
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
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            required
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col">
                        <label
                          className="btn btn-sm btn-primary btn-simple active"
                          id="0"
                          onClick={handleRegister}
                        >
                          Submit
                        </label>
                      </div>
                    </form>
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
          )}
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
