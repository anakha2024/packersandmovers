import React from "react";
import { Link } from "react-router-dom";

function Corousel() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-uppercase  mb-lg-4" style={{color:'white',fontWeight:'bold'}}>
              Welcome to<br/> Let's Go
              </h1>
              <h1 className="text-uppercase text-white mb-lg-4">
              Your Reliable Moving Solutions!
              </h1>
              <p className="fs-4 text-white mb-lg-4">
              Experience seamless and stress-free moving services with Packers and Movers. Our dedicated team ensures efficient packing, secure transportation, and timely delivery, making your relocation a breeze. Trust us to handle your move with utmost care and professionalism.              </p>
              {/* <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <Link
                  to="/about"
                  className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5"
                >
                  Read More
                </Link>
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corousel;
