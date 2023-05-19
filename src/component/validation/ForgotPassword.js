
import {  useState } from 'react';
import { useNavigate } from "react-router-dom";
  import axios from 'axios';
import Header2 from '../common/Header2'
// import Footer2 from '../common/Footer2'

const ForgotPassword = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const handelClick =  (event) => {
    event.preventDefault();
//alert('hello')
    // password rx
    // email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmailError("")
  
  
        if (!input.email) {
            setEmailError("Email is required")
        } else if (!input.email.match(mailformat)) {
            setEmailError("Please enter your valid email")
        }else 
          {
       
                const options = {
                    headers: {
                        "content-type": "application/json; charset=utf-8",
                        'Access-Control-Allow-Origin': '*'
                    }
                }
                const data = {
                    email: input.email,
                  
                }

                 axios.patch('https://admin.krazeal.com/krazeal/api/login', data,options).then(res => {
                     
                    
                   if (res.data.result != "false") {
                         setTimeout(() => {
                             navigate("/login", { replace: true });
                         }, 500)
                         return true
                     } else {
                     return true
                    }
                   
                }).catch(err => {
                    var errorRes = JSON.parse(err.response.request.response)
                    if (input.phone && input.email) {
                        
            
                    }
          

                })
            }
}
  return (
    <>

      <section className="log-in-section section-b-space forgot-section">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img src="../assets/images/inner-page/forgot.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3>Welcome To krazeal</h3>
                    <h4>Forgot your password</h4>
                  </div>
                  <div className="input-box">
                    <form className="row g-4" onSubmit={handelClick}>
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form">
                        <input type="email" className="form-control" id="form-register-email"  onChange={handelChange} data-constraints="@email @Required" name="email" value={input.email} placeholder="Email Address" />
                          <br/><span className="form-validation" style={{ color: "red" }}>{emailError}</span>
                          <label htmlFor="email">Email Address</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-animation w-100" type="submit">Forgot
                          Password</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer2/> */}
    </>
  )
}

export default ForgotPassword
