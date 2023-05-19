import React , {useState} from 'react'
import Header2 from '../common/Header2'
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
  import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify';
const Register = () => {

  const [input, setInput] = useState({
    fname: "",
    lname: "",
    phone: "",
    // otp : ""
      
});


const [numberError, setNumberError] = useState("");
const [fnameError, setFnameError] = useState("");

const [lnameError, setLnameError] = useState("");
const [loading, setLoading] = useState(false);
const [aboutError, setAboutError] = useState("");
const [useMobile, setUseMobile]=useState("")
const [useNumber, setUseNumber] = useState("");
 const [otpSent, setOptSent] = useState(false);
 const [otpError, setOtpError] = useState("");
const navigate = useNavigate();

const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
}
const handelClick =  (event) => {
    event.preventDefault();
//alert('hello')
    // password rx
    var passwordFormat = "^(.{0,7}|[^0-9]*|[^a-z]*|[a-z0-9]*)$"
    // email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    


    setNumberError("")
    setFnameError("")
    setLnameError("")
    var phoneno = /^\d{10}$/;
    if (!input.phone) {
        setNumberError("Number is required")
    } else if (input.phone.match(phoneno)) {
        setNumberError("")
    } else {
        setNumberError("Please enter valid number")
        return true
    }
    if (!input.fname) {
        setFnameError(" first Name is required")
    }
    else
        if (!input.lname) {
          setLnameError(" Last Name is required")
        }

         else {
                setLoading(true)
                const options = {
                    headers: {
                        "content-type": "application/json; charset=utf-8",
                        'Access-Control-Allow-Origin': '*'
                    }
                }
                const data = JSON.stringify({
                    
                    phone: input.phone,
                    fname: input.fname,
                    lname: input.lname,
                    // otp: input.otp
                 
                });
                console.log("res.data",data)

                 axios.post('https://admin.krazeal.com/krazeal/api/signup', data,options).then(res => {
                      console.log(res.data.data)
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
                   
                }).catch(err => {
                    setLoading(false)
                    toast.error("Something went wrong");
                    var errorRes = JSON.parse(err.response.request.response)
                    if (input.fname && input.lname && input.phone ) {
                                if (errorRes.phone) {
                          setUseNumber("Mobile number is already used")
                      } else {
                          setUseNumber("")
                      }
                         setAboutError("")
                      }
             })
            }
}

  return (

    <>
   {/* <Header2/> */}

      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-sm-12 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To krazeal</h3>
                  <h4>Create New Account</h4>
                </div>
                <div className="input-box">
                  <form className="row g-4" onSubmit={handelClick}>
                    <div className="col-12 col-lg-6">
                      <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control"  onChange={handelChange} data-constraints="@Required" name="fname" value={input.fname} id="form-login-fname" placeholder="First Name" />
                        <label htmlFor="fullname">First Name</label>
                     <span className="form-validation" style={{ color: "red" }} ></span>
                        <span className="form-validation" style={{ color: "red" }} id="unicName"></span>
                      </div>
                    </div>
                    <div className="col-12  col-lg-6">
                      <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control"  onChange={handelChange} data-constraints="@Required" name="lname" value={input.lname} id="form-login-lname" placeholder="Last Name" />
                        <label htmlFor="fullname">Last Name</label>
                        <span className="form-validation" style={{ color: "red" }} >{lnameError}</span>
                        <span className="form-validation" style={{ color: "red" }} id="unicName"></span>

                      </div>
                    </div>
                   
                    <div className="col-12  col-lg-6">
                      <div className="form-floating theme-form-floating">
                        <input type="number" className="form-control"  onChange={handelChange} data-constraints=" @Numeric @Required" value={input.phone} id="form-login-number" maxlength="10" pattern="\d{10}" name="phone" placeholder="Mobile Number"  />
                        <label htmlFor="Mobile Number">Mobile Number</label>
                        <span className="form-validation" style={{ color: "red" }} >{numberError}</span>
                        <span className="form-validation" style={{ color: "red" }}>{useNumber}</span>

                      </div>
                    </div>
                  
                    <div className="col-12  col-lg-12">
                      <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input className="checkbox_animated check-box" type="checkbox" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">I agree with
                            <span>Terms</span> and <span>Privacy</span></label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-animation w-100" type="submit">Sign Up</button>
                    </div>
                  </form>
                </div>
               
                <div className="log-in-button">
                  <ul>
                    <li>
                    <div className="sign-up-box">
                  <h4>Already have an account?</h4>
                  <Link to="/login">Log In</Link>
                </div>
                    </li>
                  </ul>
                </div>
               
                
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6" />
          </div>
        </div>
      </section>
      {/* <Footer2/> */}
      <ToastContainer position="top-center" />
    </>
  )
}

export default Register
