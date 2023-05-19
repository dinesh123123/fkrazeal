import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Otp() {
  const [output, setOutput] = useState('');
  const [ottp, setOttp] = useState('');
  const [lists, setLists] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching OTP and User ID from localStorage
    const otp = localStorage.getItem('otp');
    const userId = localStorage.getItem('_id');

    if (!otp || !userId) {
      // Redirect user to appropriate page if OTP or User ID is missing
      navigate('/');
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!ottp) {
      setOutput('*Otp is required');
      return;
    }

    if (ottp.length !== 4) {
      setOutput('*Enter a 4-digit OTP');
      return;
    }

    const otp = localStorage.getItem('otp');
    const userId = localStorage.getItem('_id');

    if (ottp !== otp) {
      setOutput('Otp does not match');
      return;
    }

    if (ottp === otp) {

      navigate('/user');
      return;
    }

    const userDetails = {
      userId: userId,
      otp: ottp,
    };

    axios
      .post('https://admin.krazeal.com/krazeal/api/otp_varification', userDetails)
      .then((res) => {
        setLists(res.data.data);
        setOutput(res.data.result);
        console.log('responses of code', res.data.data);
        console.log('data of data', userDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
     <section className="breadscrumb-section pt-0">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="breadscrumb-contain">
              <h2>Log In</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="index-2.html">
                      <i className="fa-solid fa-house" />
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Log In</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="log-in-section otp-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
            <div className="image-contain">
              <img src="../assets/images/inner-page/otp.png" className="img-fluid" alt="" />
            </div>
          </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3>Welcome To krazeal</h3>
                    <p>Please enter your mobile number to Login/Sign Up on krazeal</p>
                  </div>
                  <div className="col-12">
                    <font style={{ color: 'red' }}>{output}</font>
                    <form onSubmit={handleSubmit}>
                      {/* Rest of your code */}
                      <font style={{ color: 'blue' }}>{lists.res}</font>
                      <div id="otp" className="inputs d-flex flex-row justify-content-center">
                        <input
                          type="text"
                          value={ottp}
                          onChange={(e) => setOttp(e.target.value)}
                          className="text-center form-control rounded"
                          maxLength={4}
                          placeholder={0}
                        />
                      </div>
                      {/* Rest of your code */}
                      <div className="send-box pt-4"></div>
                      <button type="submit" className="btn btn-animation w-100 mt-3">
                        Validate
                      </button>
                    </form>
                  </div>
                  {/* Rest of your code */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rest of your code */}
    </div>
  );
}

export default Otp;
