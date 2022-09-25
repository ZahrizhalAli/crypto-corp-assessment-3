import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function Home() {
  return (
    <>
      <div className="wrapper ">
        <Sidebar />
        <div className="main-panel">
          <Navbar />
          {/* <!-- End Navbar --> */}
          <div className="content">
            <div className="row">
              <div className="col-12">
                <div className="card card-chart">
                  <div className="card-header ">
                    <div className="row">
                      <div className="col-sm-6 text-left">
                        <h5 className="card-category">Total Shipments</h5>
                        <h2 className="card-title">Performance</h2>
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
                <div className="card card-chart">
                  <div className="card-header ">
                    <h5 className="card-category">Total Shipments</h5>
                    <h3 className="card-title">
                      <i className="tim-icons icon-bell-55 text-primary "></i>{' '}
                      763,215
                    </h3>
                  </div>
                  <div className="card-body ">
                    <div className="chart-area">
                      <canvas id="chartLinePurple"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-chart">
                  <div className="card-header ">
                    <h5 className="card-category">Daily Sales</h5>
                    <h3 className="card-title">
                      <i className="tim-icons icon-delivery-fast text-info "></i>{' '}
                      3,500€
                    </h3>
                  </div>
                  <div className="card-body ">
                    <div className="chart-area">
                      <canvas id="CountryChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-chart">
                  <div className="card-header ">
                    <h5 className="card-category">Completed Tasks</h5>
                    <h3 className="card-title">
                      <i className="tim-icons icon-send text-success "></i>{' '}
                      12,100K
                    </h3>
                  </div>
                  <div className="card-body ">
                    <div className="chart-area">
                      <canvas id="chartLineGreen"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card card-tasks">
                  <div className="card-header ">
                    <h6 className="title d-inline">Tasks(5)</h6>
                    <p className="card-category d-inline">today</p>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-link dropdown-toggle btn-icon"
                        data-toggle="dropdown"
                      >
                        <i className="tim-icons icon-settings-gear-63"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#pablo">
                          Action
                        </a>
                        <a className="dropdown-item" href="#pablo">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#pablo">
                          Something else
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body ">
                    <div className="table-full-width table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">Update the Documentation</p>
                              <p className="text-muted">
                                Dwuamish Head, Seattle, WA 8:47 AM
                              </p>
                            </td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title=""
                                className="btn btn-link"
                                data-original-title="Edit Task"
                              >
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    checked=""
                                  />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">GDPR Compliance</p>
                              <p className="text-muted">
                                The GDPR is a regulation that requires
                                businesses to protect the personal data and
                                privacy of Europe citizens for transactions that
                                occur within EU member states.
                              </p>
                            </td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title=""
                                className="btn btn-link"
                                data-original-title="Edit Task"
                              >
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">Solve the issues</p>
                              <p className="text-muted">
                                Fifty percent of all respondents said they would
                                be more likely to shop at a company{' '}
                              </p>
                            </td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title=""
                                className="btn btn-link"
                                data-original-title="Edit Task"
                              >
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">Release v2.0.0</p>
                              <p className="text-muted">
                                Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM
                              </p>
                            </td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title=""
                                className="btn btn-link"
                                data-original-title="Edit Task"
                              >
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">
                                Export the processed files
                              </p>
                              <p className="text-muted">
                                The report also shows that consumers will not
                                easily forgive a company once a breach exposing
                                their personal data occurs.{' '}
                              </p>
                            </td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title=""
                                className="btn btn-link"
                                data-original-title="Edit Task"
                              >
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">Arival at export process</p>
                              <p className="text-muted">
                                Capitol Hill, Seattle, WA 12:34 AM
                              </p>
                            </td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title=""
                                className="btn btn-link"
                                data-original-title="Edit Task"
                              >
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card ">
                  <div className="card-header">
                    <h4 className="card-title"> Simple Table</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table tablesorter " id="">
                        <thead className=" text-primary">
                          <th>Name</th>
                          <th>Country</th>
                          <th>City</th>
                          <th className="text-center">Salary</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Dakota Rice</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                            <td className="text-center">$36,738</td>
                          </tr>
                          <tr>
                            <td>Minerva Hooper</td>
                            <td>Curaçao</td>
                            <td>Sinaai-Waas</td>
                            <td className="text-center">$23,789</td>
                          </tr>
                          <tr>
                            <td>Sage Rodriguez</td>
                            <td>Netherlands</td>
                            <td>Baileux</td>
                            <td className="text-center">$56,142</td>
                          </tr>
                          <tr>
                            <td>Philip Chaney</td>
                            <td>Korea, South</td>
                            <td>Overland Park</td>
                            <td className="text-center">$38,735</td>
                          </tr>
                          <tr>
                            <td>Doris Greene</td>
                            <td>Malawi</td>
                            <td>Feldkirchen in Kärnten</td>
                            <td className="text-center">$63,542</td>
                          </tr>
                          <tr>
                            <td>Mason Porter</td>
                            <td>Chile</td>
                            <td>Gloucester</td>
                            <td className="text-center">$78,615</td>
                          </tr>
                          <tr>
                            <td>Jon Porter</td>
                            <td>Portugal</td>
                            <td>Gloucester</td>
                            <td className="text-center">$98,615</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-plugin">
        <div className="dropdown show-dropdown">
          <a href="#" data-toggle="dropdown">
            <i className="fa fa-cog fa-2x"> </i>
          </a>
          <ul className="dropdown-menu">
            <li className="header-title"> Sidebar Background</li>
            <li className="adjustments-line">
              <a
                href="javascript:void(0)"
                className="switch-trigger background-color"
              >
                <div className="badge-colors text-center">
                  <span
                    className="badge filter badge-primary active"
                    data-color="primary"
                  ></span>
                  <span
                    className="badge filter badge-blue"
                    data-color="blue"
                  ></span>
                  <span
                    className="badge filter badge-green"
                    data-color="green"
                  ></span>
                </div>
                <div className="clearfix"></div>
              </a>
            </li>
            <li className="adjustments-line text-center color-change">
              <span className="color-label">LIGHT MODE</span>
              <span className="badge light-badge mr-2"></span>
              <span className="badge dark-badge ml-2"></span>
              <span className="color-label">DARK MODE</span>
            </li>
            <li className="button-container">
              <a
                href="https://www.creative-tim.com/product/black-dashboard"
                target="_blank"
                className="btn btn-primary btn-block btn-round"
              >
                Download Now
              </a>
              <a
                href="https://demos.creative-tim.com/black-dashboard/docs/1.0/getting-started/introduction.html"
                target="_blank"
                className="btn btn-default btn-block btn-round"
              >
                Documentation
              </a>
            </li>
            <li className="header-title">Thank you for 95 shares!</li>
            <li className="button-container text-center">
              <button id="twitter" className="btn btn-round btn-info">
                <i className="fab fa-twitter"></i> &middot; 45
              </button>
              <button id="facebook" className="btn btn-round btn-info">
                <i className="fab fa-facebook-f"></i> &middot; 50
              </button>
              <br />
              <br />
              <a
                className="github-button"
                href="https://github.com/creativetimofficial/black-dashboard"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star ntkme/github-buttons on GitHub"
              >
                Star
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Home;
