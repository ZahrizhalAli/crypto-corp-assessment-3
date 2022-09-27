import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
function Navbar({ title }) {
  const [user, setUser] = useState('');
  let history = useHistory();

  useEffect(() => {
    if (window.localStorage.getItem('userEmail')) {
      setUser(window.localStorage.getItem('userEmail'));
    }
  }, []);

  function handleLogout(event) {
    event.preventDefault();
    window.localStorage.removeItem('userEmail');
    history.push('/');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent   ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle d-inline">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a className="navbar-brand" href="/">
              {title}
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <strong>Home</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <strong>Trade</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <strong>Data</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <strong>Docs</strong>
                </a>
              </li>
              <div className="search-bar input-group">
                <button
                  className="btn btn-link"
                  id="search-button"
                  data-toggle="modal"
                  data-target="#searchModal"
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ fontSize: '25px' }}
                  />
                </button>
              </div>
              {user && (
                <>
                  <li className="dropdown nav-item">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                    >
                      <div className="photo">
                        <img src="../assets/img/anime3.png" />
                      </div>
                      <b className="caret d-none d-lg-block d-xl-block"></b>
                      <p className="d-lg-none">Log out</p>
                    </a>
                    <ul className="dropdown-menu dropdown-navbar">
                      <li className="nav-link">
                        <a href="/dashboard" className="nav-item dropdown-item">
                          Dashboard
                        </a>
                      </li>
                      <li className="nav-link">
                        <a href="#" className="nav-item dropdown-item">
                          Settings
                        </a>
                      </li>
                      <div className="dropdown-divider"></div>
                      <li className="nav-link">
                        <a
                          href="#"
                          className="nav-item dropdown-item"
                          onClick={handleLogout}
                        >
                          Log out
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="separator d-lg-none"></li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="searchModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="searchModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="SEARCH"
              />
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="tim-icons icon-simple-remove"></i>
              </button>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
