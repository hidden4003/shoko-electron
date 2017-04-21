// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Events from '../events';
import logoImage from '../images/logo.png';
import closeWindowIcon from '../icons/16-Window-Close.png';

class SiteNavbar extends Component {
  static propTypes = {
    closeWindow: PropTypes.func.isRequired,
  };

  render() {
    const { closeWindow } = this.props;

    return (
      <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggler hamburger hamburger-close navbar-toggler-left hided" data-toggle="menubar">
            <span className="sr-only">Toggle navigation</span>
            <span className="hamburger-bar" />
          </button>
          <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-collapse" data-toggle="collapse">
            <i className="icon wb-more-horizontal" aria-hidden="true" />
          </button>
          <div className="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
            <img className="navbar-brand-logo" src={logoImage} alt="" />
            <span className="navbar-brand-text hidden-xs-down"> Shoko Desktop</span>
          </div>
          <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-search" data-toggle="collapse">
            <span className="sr-only">Toggle Search</span>
            <i className="icon wb-search" aria-hidden="true" />
          </button>
        </div>
        <div className="navbar-container container-fluid">
          <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
            <ul className="nav navbar-toolbar">
              <li className="nav-item hidden-float" id="toggleMenubar">
                <a className="nav-link" data-toggle="menubar" href="" role="button">
                  <i className="icon hamburger hamburger-arrow-left">
                    <span className="sr-only">Toggle menubar</span>
                    <span className="hamburger-bar" />
                  </i>
                </a>
              </li>
              <li className="nav-item hidden-sm-down" id="toggleFullscreen">
                <a className="nav-link icon icon-fullscreen" data-toggle="fullscreen" href="" role="button">
                  <span className="sr-only">Toggle fullscreen</span>
                </a>
              </li>
              <li className="nav-item hidden-float">
                <a className="nav-link icon wb-search" data-toggle="collapse" href="" data-target="#site-navbar-search" role="button">
                  <span className="sr-only">Toggle Search</span>
                </a>
              </li>
              <li className="nav-item dropdown dropdown-fw dropdown-mega">
                <a className="nav-link" data-toggle="dropdown" href="" aria-expanded="false" data-animation="fade" role="button">Mega <i className="icon wb-chevron-down-mini" aria-hidden="true" /></a>
                <div className="dropdown-menu" role="menu">
                  <div className="mega-content">
                    <div className="row">
                      <div className="col-md-4">
                        <h5>UI Kit</h5>
                        <ul className="blocks-2">
                          <li className="mega-menu m-0">
                            <ul className="list-icons">
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../advanced/animation.html">Animation</a>
                              </li>
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../uikit/buttons.html">Buttons</a>
                              </li>
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../uikit/colors.html">Colors</a>
                              </li>
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../uikit/dropdowns.html">Dropdowns</a>
                              </li>
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../uikit/icons.html">Icons</a>
                              </li>
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../advanced/lightbox.html">Lightbox</a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu m-0">
                            <ul className="list-icons">
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../uikit/modals.html">Modals</a>
                              </li>
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../uikit/panel-structure.html">Panels</a>
                              </li>
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../structure/overlay.html">Overlay</a>
                              </li>
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../uikit/tooltip-popover.html ">Tooltips</a>
                              </li>
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../advanced/scrollable.html">Scrollable</a>
                              </li>
                              <li><i className="wb-chevron-right-mini" aria-hidden="true" />
                                <a href="../uikit/typography.html">Typography</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h5>Media
                          <span className="badge badge-pill badge-success">4</span>
                        </h5>
                        <ul className="blocks-3">
                          <li>
                            <a className="thumbnail m-0" href="">
                              <img className="w-full" src="../../../global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                          <li>
                            <a className="thumbnail m-0" href="">
                              <img className="w-full" src="../../../global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                          <li>
                            <a className="thumbnail m-0" href="">
                              <img className="w-full" src="../../../global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                          <li>
                            <a className="thumbnail m-0" href="">
                              <img className="w-full" src="../../../global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                          <li>
                            <a className="thumbnail m-0" href="">
                              <img className="w-full" src="../../../global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                          <li>
                            <a className="thumbnail m-0" href="">
                              <img className="w-full" src="../../../global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h5 className="mb-0">Accordion</h5>
                        <div className="panel-group panel-group-simple" id="siteMegaAccordion" aria-multiselectable="true" role="tablist">
                          <div className="panel">
                            <div className="panel-heading" id="siteMegaAccordionHeadingOne" role="tab">
                              <a className="panel-title" data-toggle="collapse" href="#siteMegaCollapseOne" data-parent="#siteMegaAccordion" aria-expanded="false" aria-controls="siteMegaCollapseOne">
                                Collapsible Group Item #1
                              </a>
                            </div>
                            <div className="panel-collapse collapse" id="siteMegaCollapseOne" aria-labelledby="siteMegaAccordionHeadingOne" role="tabpanel">
                              <div className="panel-body">
                                De moveat laudatur vestra parum doloribus labitur sentire partes,
                                congressus ostendit alienae, voluptati ornateque accusamus
                                clamat reperietur convicia albucius.
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading" id="siteMegaAccordionHeadingTwo" role="tab">
                              <a className="panel-title collapsed" data-toggle="collapse" href="#siteMegaCollapseTwo" data-parent="#siteMegaAccordion" aria-expanded="false" aria-controls="siteMegaCollapseTwo">
                                Collapsible Group Item #2
                              </a>
                            </div>
                            <div className="panel-collapse collapse" id="siteMegaCollapseTwo" aria-labelledby="siteMegaAccordionHeadingTwo" role="tabpanel">
                              <div className="panel-body">
                                Praestabiliorem. Pellat excruciant legantur ullum leniter vacare
                                loco ignavi, credo videretur multoque choro fatemur
                                mortis animus adoptionem, bello statuat expediunt naturales.
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading" id="siteMegaAccordionHeadingThree" role="tab">
                              <a className="panel-title collapsed" data-toggle="collapse" href="#siteMegaCollapseThree" data-parent="#siteMegaAccordion" aria-expanded="false" aria-controls="siteMegaCollapseThree">
                                Collapsible Group Item #3
                              </a>
                            </div>
                            <div className="panel-collapse collapse" id="siteMegaCollapseThree" aria-labelledby="siteMegaAccordionHeadingThree" role="tabpanel">
                              <div className="panel-body">
                                Horum, antiquitate perciperet d conspectum locus obruamus animumque
                                suscipere. Desiderat magnum, contenta poena desiderant
                                concederetur menandri damna disputandum corporum.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="" title="Notifications" aria-expanded="false" data-animation="scale-up" role="button">
                  <i className="icon wb-bell" aria-hidden="true" />
                  <span className="badge badge-pill badge-danger up">5</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                  <div className="dropdown-menu-header">
                    <h5>NOTIFICATIONS</h5>
                    <span className="badge badge-round badge-danger">New 5</span>
                  </div>
                  <div className="list-group">
                    <div data-role="container">
                      <div data-role="content">
                        <a className="list-group-item dropdown-item" href="" role="menuitem">
                          <div className="media">
                            <div className="pr-10">
                              <i className="icon wb-order bg-red-600 white icon-circle" aria-hidden="true" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">A new order has been placed</h6>
                              <time className="media-meta" dateTime="2017-06-12T20:50:48+08:00">5 hours ago</time>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item dropdown-item" href="" role="menuitem">
                          <div className="media">
                            <div className="pr-10">
                              <i className="icon wb-user bg-green-600 white icon-circle" aria-hidden="true" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Completed the task</h6>
                              <time className="media-meta" dateTime="2017-06-11T18:29:20+08:00">2 days ago</time>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item dropdown-item" href="" role="menuitem">
                          <div className="media">
                            <div className="pr-10">
                              <i className="icon wb-settings bg-red-600 white icon-circle" aria-hidden="true" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Settings updated</h6>
                              <time className="media-meta" dateTime="2017-06-11T14:05:00+08:00">2 days ago</time>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item dropdown-item" href="" role="menuitem">
                          <div className="media">
                            <div className="pr-10">
                              <i className="icon wb-calendar bg-blue-600 white icon-circle" aria-hidden="true" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Event started</h6>
                              <time className="media-meta" dateTime="2017-06-10T13:50:18+08:00">3 days ago</time>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item dropdown-item" href="" role="menuitem">
                          <div className="media">
                            <div className="pr-10">
                              <i className="icon wb-chat bg-orange-600 white icon-circle" aria-hidden="true" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Message received</h6>
                              <time className="media-meta" dateTime="2017-06-10T12:34:48+08:00">3 days ago</time>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-menu-footer">
                    <a className="dropdown-menu-footer-btn" href="" role="button">
                      <i className="icon md-settings" aria-hidden="true" />
                    </a>
                    <a className="dropdown-item" href="" role="menuitem">
                      All notifications
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="" title="Messages" aria-expanded="false" data-animation="scale-up" role="button">
                  <i className="icon wb-envelope" aria-hidden="true" />
                  <span className="badge badge-pill badge-info up">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                  <div className="dropdown-menu-header" role="presentation">
                    <h5>MESSAGES</h5>
                    <span className="badge badge-round badge-info">New 3</span>
                  </div>
                  <div className="list-group" role="presentation">
                    <div data-role="container">
                      <div data-role="content">
                        <a className="list-group-item" href="" role="menuitem">
                          <div className="media">
                            <div className="pr-10">
                              <span className="avatar avatar-sm avatar-online">
                                <img src="../../../global/portraits/2.jpg" alt="..." />
                                <i />
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Mary Adams</h6>
                              <div className="media-meta">
                                <time dateTime="2017-06-17T20:22:05+08:00">30 minutes ago</time>
                              </div>
                              <div className="media-detail">Anyways, i would like just do it</div>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item" href="" role="menuitem">
                          <div className="media">
                            <div className="pr-10">
                              <span className="avatar avatar-sm avatar-off">
                                <img src="../../../global/portraits/3.jpg" alt="..." />
                                <i />
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Caleb Richards</h6>
                              <div className="media-meta">
                                <time dateTime="2017-06-17T12:30:30+08:00">12 hours ago</time>
                              </div>
                              <div className="media-detail">I checheck the document. But there seems</div>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item" href="" role="menuitem">
                          <div className="media">
                            <div className="pr-10">
                              <span className="avatar avatar-sm avatar-busy">
                                <img src="../../../global/portraits/4.jpg" alt="..." />
                                <i />
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">June Lane</h6>
                              <div className="media-meta">
                                <time dateTime="2017-06-16T18:38:40+08:00">2 days ago</time>
                              </div>
                              <div className="media-detail">Lorem ipsum Id consectetur et minim</div>
                            </div>
                          </div>
                        </a>
                        <a className="list-group-item" href="" role="menuitem">
                          <div className="media">
                            <div className="pr-10">
                              <span className="avatar avatar-sm avatar-away">
                                <img src="../../../global/portraits/5.jpg" alt="..." />
                                <i />
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">Edward Fletcher</h6>
                              <div className="media-meta">
                                <time dateTime="2017-06-15T20:34:48+08:00">3 days ago</time>
                              </div>
                              <div className="media-detail">Dolor et irure cupidatat commodo nostrud nostrud.</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-menu-footer" role="presentation">
                    <a className="dropdown-menu-footer-btn" href="" role="button">
                      <i className="icon wb-settings" aria-hidden="true" />
                    </a>
                    <a className="dropdown-item" href="" role="menuitem">
                      See all messages
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" role="button" onClick={closeWindow} href="">
                  <img src={closeWindowIcon} alt="Close" />
                </a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-search-overlap" id="site-navbar-search">
            <form role="search">
              <div className="form-group">
                <div className="input-search">
                  <i className="input-search-icon wb-search" aria-hidden="true" />
                  <input className="form-control" name="site-search" placeholder="Search..." type="text" />
                  <button type="button" className="input-search-close icon wb-close" data-target="#site-navbar-search" data-toggle="collapse" aria-label="Close" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeWindow: () => { dispatch({ type: Events.EXIT }); },
  };
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteNavbar);
