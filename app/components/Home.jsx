// @flow
import React, { Component } from 'react';
import './Home.global.css';
import SiteMenuBar from './SiteMenuBar';
import SiteNavbar from './SiteNavbar';

export default class Home extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <SiteNavbar />
        <SiteMenuBar />
        <div className="site-gridmenu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="../apps/mailbox/mailbox.html">
                    <i className="icon wb-envelope"></i>
                    <span>Mailbox</span>
                  </a>
                </li>
                <li>
                  <a href="../apps/calendar/calendar.html">
                    <i className="icon wb-calendar"></i>
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="../apps/contacts/contacts.html">
                    <i className="icon wb-user"></i>
                    <span>Contacts</span>
                  </a>
                </li>
                <li>
                  <a href="../apps/media/overview.html">
                    <i className="icon wb-camera"></i>
                    <span>Media</span>
                  </a>
                </li>
                <li>
                  <a href="../apps/documents/categories.html">
                    <i className="icon wb-order"></i>
                    <span>Documents</span>
                  </a>
                </li>
                <li>
                  <a href="../apps/projects/projects.html">
                    <i className="icon wb-image"></i>
                    <span>Project</span>
                  </a>
                </li>
                <li>
                  <a href="../apps/forum/forum.html">
                    <i className="icon wb-chat-group"></i>
                    <span>Forum</span>
                  </a>
                </li>
                <li>
                  <a href="../index.html">
                    <i className="icon wb-dashboard"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page">
          <div className="page-content">
            <div className="row">
              <div className="col-md-12">
                <div className="example-wrap">
                  <div className="example example-grid">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="panel panel-dark">
                          <div className="panel-heading">
                            <h3 className="panel-title">Collection stats</h3>
                          </div>
                          <div className="panel-body">
                            <table className="table">
                              <thead />
                              <tbody>
                                <tr>
                                  <td>Action Items</td>
                                  <td>0</td>
                                </tr>
                                <tr>
                                  <td>Series</td>
                                  <td>0</td>
                                </tr>
                                <tr>
                                  <td>Files</td>
                                  <td>0</td>
                                </tr>
                                <tr>
                                  <td>Collection Size</td>
                                  <td>0</td>
                                </tr>
                                <tr>
                                  <td>Hours Watched</td>
                                  <td>0</td>
                                </tr>
                                <tr>
                                  <td>Episodes Watched</td>
                                  <td>0</td>
                                </tr>
                                <tr>
                                  <td>Series Completed</td>
                                  <td>0</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="panel panel-dark">
                          <div className="panel-heading">
                            <h3 className="panel-title">Latest files</h3>
                          </div>
                          <div className="panel-body">
                            <table className="table">
                              <thead />
                              <tbody>
                                <tr>
                                  <td>File 1</td>
                                  <td>123 MB</td>
                                  <td>
                                    <span className="badge badge-danger">admin</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>File 2</td>
                                  <td>234 MB</td>
                                  <td>
                                    <span className="badge badge-info">admin</span>
                                  </td>
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
          </div>
        </div>
      </div>
    );
  }
}
