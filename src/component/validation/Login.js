import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header2 from '../common/Header2';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [phone, setphone] = useState('');
  const [phoneError, setphoneError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const mobile = localStorage.getItem('phone');
  const handleChange = (e) => {
    setphone(e.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    const phoneFormat = /^\d{10}$/;

    setphoneError('');

    if (!phone) {
      setphoneError('Mobile number is required');
    } else if (!phone.match(phoneFormat)) {
      setphoneError('Please enter a valid mobile number');
    }
     else {
      setLoading(true);
      const userid = localStorage.getItem('_id');
      
      const data = {
        phone : phone,
        userId :userid
      };

      axios.post('https://admin.krazeal.com/krazeal/api/login', data)
        .then((res) => {
          if (res.data.result!="false",res.data.token!="error" ) {
            console.log("response",res.data.data.role);  
            const data=res.data.data;
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('_id', res.data.data._id);
           localStorage.setItem("fname",res.data.data.fname);
           localStorage.setItem("lname",res.data.data.lname);
            localStorage.setItem("phone",res.data.data.phone);
          localStorage.setItem("otp",res.data.data.otp);
          
            setLoading(false)
            toast.success(res.data.msg);
             setTimeout(() => {
                 navigate("/otp", { replace: true });
            }, 500)
         } else {
            setLoading(false)
            toast.error(res.data.msg);
        }

          // setLoading(false);
          // toast.success(res.data.msg);

          // navigate("/otp", { replace: true });
          // console.log("response checking  ff",res.data.msg)
        })
        .catch((err) => {
          setLoading(false);
          if (err.response && err.response.data && err.response.data.msg) {
            toast.error(err.response.data.msg); // Display the error message from the server
          } else {
            toast.error('Something went wrong');
          }
        });
    }
  };

  return (
    <>
      {/* <Header2/> */}

      <section className="log-in-section background-image-2 section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img src="../assets/images/inner-page/log-in.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To krazeal</h3>
                  <h4>Log In Your Account</h4>
                </div>
                <div className="input-box">
                  <form className="row g-4" onSubmit={handleClick}>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="form-register-phone"
                          onChange={handleChange}
                          value={phone}
                          placeholder="Mobile Number"
                          pattern="[0-9]{10}"
                          required
                        />
                        <label htmlFor="phone">Mobile Number</label>
                        <span className="form-validation" style={{ color: 'red' }}>
                          {phoneError}
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-animation w-100 justify-content-center" type="submit">
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
                <div className="other-log-in">
                  <h6>or</h6>
                </div>

                <div className="sign-up-box">
                  <h4>Don't have an account?</h4>
                  <Link to="/register">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer2/> */}
    </>
  );
};

export default Login;
