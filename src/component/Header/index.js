import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <Fragment>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Paginate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contentSearching">
                  Searching
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContentRedux">
                  Content Redux
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="!#">Action</a>
                            <a className="dropdown-item" href="!#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="!#">Something else here</a>
                            </div>
                        </li> */}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
