import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Portfolio() {
  return (
    <>
      <Sidebar />
      <div className="main-panel">
        <Navbar title={'Dashboard'} />
        <div className="content">
          <div className="row">
            <div className="col-md-4">
              <div className="card  card-user">
                <div className="card-body ">
                  <p className="card-text">
                    <div className="author">
                      {/* <div className="block block-one"></div>
                      <div className="block block-two"></div>
                      <div className="block block-three"></div>
                      <div className="block block-four"></div> */}
                      <img
                        className="avatar"
                        src="../assets/img/anime6.png"
                        alt="..."
                      />
                      <h3 className="title">Zahrizhal Ali</h3>
                      <p className="description">Student</p>
                    </div>
                  </p>
                  <p className="card-description text-center">
                    Future billionaire. But for now, I'm just writing code
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Coin Holding</h4>
                </div>
                <div className="card-body ">
                  <div className="table-responsive market-table">
                    <table className="table tablesorter " id="">
                      <thead style={{ color: 'white' }}>
                        <th className="text-center">Coin</th>
                        <th className="text-center">Last Price</th>
                        <th className="text-center">%</th>

                        <th className="text-center">Report</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">Bitcoin</td>
                          <td className="text-center">$1,234</td>
                          <td className="text-center">
                            <p className="text-buy">1.54</p>
                          </td>
                          <td className="text-center">
                            <a href="/">
                              <i className="tim-icons icon-chart-pie-36"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">Bitcoin</td>
                          <td className="text-center">$1,234</td>
                          <td className="text-center">$36,738</td>
                          <td className="text-center">
                            <a href="/">
                              <i className="tim-icons icon-chart-pie-36"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-fill btn-primary">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h5 className="title">Edit Profile</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-4 pr-md-1">
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
                      <div className="col-md-4 pr-md-1">
                        <div className="form-group">
                          <label>Email Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="h1r3me@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 pl-md-1">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Job Title</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Iinvestor"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-md-1">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-md-1">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Home Address"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>About Me</label>
                          <textarea
                            rows="4"
                            cols="80"
                            className="form-control"
                            placeholder="Here can be your description"
                          >
                            Kaizoku o ni ore wa naru.
                          </textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-fill btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
