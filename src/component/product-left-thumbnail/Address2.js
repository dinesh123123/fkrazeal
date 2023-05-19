import Addressdelete from './Addressdelete';
import { useState , useEffect } from 'react';
import React from 'react'
import axios from 'axios';

function Address2() {
    const [lists, setLists]=useState([]);
    
      useEffect(() => {
      getHomeData();
    }, []);
  
    const getHomeData = async () => {
    const userid = localStorage.getItem('_id');
    
      const options = {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
      };
          const data = JSON.stringify({
            "userId":userid
              });
    
      try {
        const res = await axios.post('https://admin.krazeal.com/krazeal/api/address_list', data, options);
                setLists(res.data.data);   
                      } catch (err) {
        console.error(err);
      }
    };


  return (
    <div className="row g-sm-4 g-3">
                        {
              lists.map((list) => {
                return(
                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                       

                          <div className="address-box">
                            <div>
                              {/* <div className="form-check">
                                <input className="form-check-input" type="radio" name="jack" id="flexRadioDefault2" defaultChecked />
                              </div> */}
                              <div className="label">
                                <label>Home</label>
                              </div>
                              <div className="table-responsive address-table">
                                <table className="table">
                                  <tbody>
                                 
                                    <tr>
                                      {/* <td colSpan={2}>Jack Jennas</td> */}
                                    </tr>
                                    <tr>
                                      <td>Address :</td>
                                      <td>
                                        <p>{list.address}
                                        </p>
                                        {/* <p>{list._id}
                                        </p> */}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Pin Code :</td>
                                      <td>{list.pincode}</td>
                                    </tr>
                                    <tr>
                                      <td>City :</td>
                                      <td>{list.city}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <Addressdelete/>
                            {/* <div className="button-group">
                               <button className="btn btn-sm add-button w-100" data-bs-toggle="modal" data-bs-target="#editProfile"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Edit</button> 
                              <button className="btn btn-sm add-button w-100" data-bs-toggle="modal" data-bs-target="#removeProfile"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg>
                                Remove</button>
                            </div> */}
                          </div>
                        

                  </div>
                      )
                    })
                  }
                                              </div>
  )
}

export default Address2
