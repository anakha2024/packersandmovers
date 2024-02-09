import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import signimg from "../../Images/packsign.jpg";
import Navs from "../Nav/Navs";
import { moversRegSchema } from "../Schemas/Schemas";
import axios from "axios";
import { toast } from "react-toastify";
import axiosInstance from "../../BaseUrl";

function MoversReg() {
  // const [item, setItems] = useState([]);
  // const [coverage, setCoverage] = useState(false);
  const navigate=useNavigate();

  const onSubmit = () => {
    
      axiosInstance.post('/registerMover',values)
      .then((res)=>{
        console.log(res);
        if(res.data.status==200){
          toast.success('Movers signup completed')
          localStorage.setItem('moversId',res.data.data._id)
          navigate('/movers-login')
        }else{
          toast.error('Registration failed')
        }
      })
      .catch((err)=>{
        console.log(err);
        toast.error('Registration failed')
      })
  
    // values.area = item;
    console.log(values);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name:'',
        regno:'',
        aadhar:'',
        city:'',
        district:'',
        contact:'',
        email:'',
        password:'',
        pincode:'',
      },
      validationSchema: moversRegSchema,
      onSubmit,
    });

  return (
    <div>
      <Navs/>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5">
            <h6 className="text-primary text-uppercase">Movers</h6>
            <h1 className="display-5 text-uppercase mb-0">Sign Up</h1>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={signimg}
                  style={{
                    objectFit: "contain",
                    height: "400px",
                    width: "100px",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7" style={{ paddingTop: "2rem" }}>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Company Name"
                      style={{ height: "55px" }}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="name"
                    />
                    {errors.name && touched.name && (
                      <p className="error">{errors.name}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Reg No"
                      style={{ height: "55px" }}
                      value={values.regno}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="regno"
                    />
                    {errors.regno && touched.regno && (
                      <p className="error">{errors.regno}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Email"
                      style={{ height: "55px" }}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="email"
                    />
                    {errors.email && touched.email && (
                      <p className="error">{errors.email}</p>
                    )}
                  </div>
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Aadhar number of owner"
                      style={{ height: "55px" }}
                      value={values.aadhar}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="aadhar"
                    />
                    {errors.aadhar && touched.aadhar && (
                      <p className="error">{errors.aadhar}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Contact"
                      style={{ height: "55px" }}
                      value={values.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="contact"
                    />
                    {errors.contact && touched.contact && (
                      <p className="error">{errors.contact}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="City"
                      style={{ height: "55px" }}
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="city"
                    />
                    {errors.city && touched.city && (
                      <p className="error">{errors.city}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="District"
                      style={{ height: "55px" }}
                      value={values.district}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="district"
                    />
                    {errors.district && touched.district && (
                      <p className="error">{errors.district}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Pincode"
                      style={{ height: "55px" }}
                      value={values.pincode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="pincode"
                    />
                    {errors.pincode && touched.pincode && (
                      <p className="error">{errors.pincode}</p>
                    )}
                  </div>
                  {/* <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <select
                      className="form-control bg-light border-0 px-4"
                      style={{ height: "55px" }}
                      name="godown"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Godown facility</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {errors.godown && touched.godown && (
                      <p className="error">{errors.godown}</p>
                    )}
                  </div> */}
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="password"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Password"
                      style={{ height: "55px" }}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="password"
                    />
                    {errors.password && touched.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>
                  {/* <div className="col-11" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Coverage area"
                      style={{ height: "55px" }}
                      value={values.area}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="area"
                    />
                  </div>
                  <div className="col-1">
                    <button
                      type="button"
                      className="add_btn"
                      onClick={(e) => {
                        setCoverage(false);
                        const newIteam = [...item, values.area];
                        setItems(newIteam);
                        console.log(item);
                        setCoverage(true);
                      }}
                    >
                      <span>
                        <i className="ri-add-circle-line span_btn"></i>
                      </span>
                    </button>
                  </div>
                  {errors.area && touched.area && (
                    <p className="error">{errors.area}</p>
                  )}
                  <div>
                    <div className="container text-center">
                      <div className="row">
                        {coverage &&
                      item.map((data, index) => { return (
                        <div className="col "><p class='area_des'>{data}</p ></div>
                      )})}
                      </div>
                    </div>
                    
                  </div> */}
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Sign Up
                    </button>
                    <p className="mt-4 text-center">
                      Already have an account?{" "}
                      <Link to="/movers-login" className="text_dec">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoversReg;
