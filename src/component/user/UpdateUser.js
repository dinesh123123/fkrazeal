import { Link } from 'react-router-dom';
import React,{useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const UpdateUser = () => {
  


  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    // otp : ""
      
});

const navigate = useNavigate();

const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
}
const handelClick =  (event) => {
    const userid= localStorage.getItem('_id');
    event.preventDefault();

          {
              
                const options = {
                    headers: {
                        "content-type": "application/json; charset=utf-8",
                        'Access-Control-Allow-Origin': '*'
                    }
                }
                const data = JSON.stringify({
                    "userId": userid,
                 
                });
                console.log("res.data",data)

                 axios.post('https://admin.krazeal.com/krazeal/api/update_userdata', data,options).then(res => {
                      console.log(res.data.data)
                     if (res.data.result!="false",res.data.token!="error" ) {
                        console.log("response",res.data.data.role);  
                        const data=res.data.data;
                        localStorage.setItem('_id', res.data._id);
                       localStorage.setItem("fname",res.data.data.fname);
                       localStorage.setItem("userToken",JSON.stringify(res.data.data));
                       localStorage.setItem("lname",res.data.data.lname);
                       localStorage.setItem("email",res.data.data.email);
                       localStorage.setItem("phone",res.data.data.phone);
                         setTimeout(() => {
                             navigate("/user", { replace: true });
                        }, 500)
                     } 
                   
                }).catch(err => {
                    var errorRes = JSON.parse(err.response.request.response)
                    if (input.fname && input.lname && input.phone &&  input.email) {
                        
             
                    }
          

                })
            }
}
  return (
    <>
       <div className="modal fade theme-modal show" id="editProfile" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-modal="true" role="dialog" style={{display: 'block', paddingLeft: '0px'}}>
        <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
        
          <div className="modal-content">
          <form onSubmit={handelClick}>
            <div className="modal-header">
           
              <h5 className="modal-title" id="exampleModalLabel2">Edit Profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body">
           
              <div className="row g-4">
                <div className="col-xxl-12">
                 
                    <div className="form-floating theme-form-floating">
                      <input type="text" className="form-control" onChange={handelChange} data-constraints="@Required" name="fname" value={input.fname} id="form-login-fname" placeholder='First Name' />
                      <label htmlFor="fname">First Name</label>
                      
                    </div>
                  
                </div>
                <div className="col-xxl-6">
                 
                    <div className="form-floating theme-form-floating">
                      <input type="text" className="form-control" onChange={handelChange} data-constraints="@Required" name="lname" value={input.lname} id="form-login-lname" placeholder="Last Name" />
                      <label htmlFor="lname">Last Name</label>
                      
                    </div>
                
                </div>
                <div className="col-xxl-6">
                  
                    <div className="form-floating theme-form-floating">
                    <input type="email" className="form-control" id="form-register-email"  onChange={handelChange} data-constraints="@email @Required" name="email" value={input.email} placeholder="Email Address" />
                        <label htmlFor="email">Email Address</label>
                      
                    
                    </div>
                  
                </div>
                <div className="col-12">
                  
                    <div className="form-floating theme-form-floating">
                    <input type="number" className="form-control"  onChange={handelChange} data-constraints=" @Numeric @Required" value={input.phone} id="form-login-number" maxlength="10" pattern="\d{10}" name="phone" placeholder="Mobile Number"  />
                        <label htmlFor="Mobile Number">Mobile Number</label>
                       

                    </div>
                
                </div>
                <div className="col-12">
                  
                  <div className="form-floating theme-form-floating">
     <input type="password" className="form-control"  onChange={handelChange} data-constraints="@Required" value={input.password} name="password" id="form-login-password" placeholder="Password" />
                        <label htmlFor="password">Password</label>
                       
                      
                  </div>
              
              </div>
              
             
              </div>
              
            </div>
            <div className="modal-footer">
             <Link to='/user'><button type="button" className="btn btn-animation btn-md fw-bold" data-bs-dismiss="modal">Close</button></Link> 
              <button type="submit" data-bs-dismiss="modal" className="btn theme-bg-color btn-md fw-bold text-light">Save changes</button>
            </div>
            </form>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default UpdateUser
