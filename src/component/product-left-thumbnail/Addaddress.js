import { Link } from 'react-router-dom';
import React,{useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Addaddress = () => {
    const [ output , setOutput ] = useState(); 
    const [ address , setAddress ] = useState();
    const [ pincode , setPincode ] = useState();
    const [ city , setCity ] = useState();

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        let userDetails={"address":address,"pincode":pincode,"city":city};
        const userid= localStorage.getItem('_id');
        const addresss=address
        const pincodee=pincode
        const cityy=city
       
        
              
                            const options = {
                                headers: {
                                    "content-type": "application/json; charset=utf-8",
                                    'Access-Control-Allow-Origin': '*'
                                }
                            }
                            const data = JSON.stringify({
                                "userId": userid,
                                "address":addresss,
                                "pincode":pincodee,
                                "city":cityy
                            });


        axios.post("https://admin.krazeal.com/krazeal/api/add_address" , data, options).then((response)=>{
        console.log(userDetails);
        setOutput(response.data.result);
            setAddress('');
            setPincode('');
            setCity('');
           
             
          }).catch((err)=>{
            console.log(err);
        });
      };
      
  return (
    <>
       <div className="modal fade theme-modal show" id="editProfile" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-modal="true" role="dialog" style={{display: 'block', paddingLeft: '0px'}}>
        <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
        
          <div className="modal-content">
          <font style={{"color":"blue"}}>{output}</font>
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
           
              <h5 className="modal-title" id="exampleModalLabel2">Add a new address</h5>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i className="fa-solid fa-xmark" />
              </button> */}
            </div>
            <div className="modal-body">
           
              <div className="row g-4">
                <div className="col-xxl-12">
                 
                    

                  
                </div>
                <div className="col-12">
                  
                    <div className="form-floating theme-form-floating">
                    <input type="text" className="form-control"  value={address} onChange={e => setAddress(e.target.value)} data-constraints="  @Required"  id="form-login-number"  name="address" placeholder="Enter New Address"  />
                        <label htmlFor="address">Enter Address</label>
                       

                    </div>
                
                </div>
                <div className="col-12">
                  
                  <div className="form-floating theme-form-floating">
     <input type="number" className="form-control"  value={pincode} onChange={e => setPincode(e.target.value)} data-constraints="@Required"  name="pincode" id="form-login-password" placeholder="Enter Pincode" />
                        <label htmlFor="pincode">Pin Code</label>
                       
                      
                  </div>
              
              </div>
              <div className="col-xxl-6">
                 
                    <div className="form-floating theme-form-floating">
                      <input type="text" className="form-control" value={city} onChange={e => setCity(e.target.value)} data-constraints="@Required" name="city"  id="form-login-city" placeholder="Enter-City" />
                      <label htmlFor="lname">Enter-City</label>
                      
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

export default Addaddress
