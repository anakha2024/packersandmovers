import React from "react";
import { Link } from "react-router-dom";

function MoversNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <i className="bi bi-shop fs-1 text-primary me-3"></i>Let's Go
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pr">
            <Link to="/movers-home" className="nav-item nav-link ">
              Home
            </Link>
            <Link  className="nav-item nav-link ">
              Rates
            </Link>
            <div className="nav-item dropdown">
              <Link
                href=""
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Orders
              </Link>
              <div className="dropdown-menu m-0">
                <Link  className="dropdown-item">
                  New Orders
                </Link>
                <Link  className="dropdown-item">
                  View Orders
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Drivers
              </Link>
              <div className="dropdown-menu m-0">
                <Link className="dropdown-item">
                  Add Drivers
                </Link>
                <Link  className="dropdown-item">
                  View Drivers
                </Link>
              </div>
            </div>
            
            <Link  className="nav-item nav-link ">
              Complaints
            </Link>
            <Link to="/movers-profile" className="nav-item nav-link ">
              Profile
            </Link>

            {/* <div className="nav-item dropdown">
              <a
                href=""
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="price.html" className="dropdown-item">
                  Pricing Plan
                </a>
                <a href="team.html" className="dropdown-item">
                  The Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="blog.html" className="dropdown-item">
                  Blog Grid
                </a>
                <a href="detail.html" className="dropdown-item">
                  Blog Detail
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MoversNav;
