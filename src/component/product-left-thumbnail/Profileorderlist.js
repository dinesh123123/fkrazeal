import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import React from 'react'
import axios from 'axios';

function Profileorderlist() {
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
        const res = await axios.post('https://admin.krazeal.com/krazeal/api/order_history', data, options);
                setLists(res.data.data);  
                console.log("response",res.data.data)      
      } catch (err) {
        console.error(err);
      }
    };


  return (
<div className="tab-pane fade show" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
                    <div className="dashboard-order">
                      <div className="title">
                        <h2>My Orders History</h2>
                        <span className="title-leaf title-leaf-gray">
                          <svg className="icon-width bg-gray">
                            <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                          </svg>
                        </span>
                      </div>
                      <div className="order-contain">
                      {
              lists.map((list) => {
                return(
                        <div className="order-box dashboard-bg-box">
                          <div className="order-container">
                            <div className="order-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg>
                            </div>
                            <div className="order-detail">
                              <h4> <span>Panding</span></h4>
                              {/* <h6 className="text-content">Gouda parmesan caerphilly mozzarella
                                cottage cheese cauliflower cheese taleggio gouda.</h6> */}
                            </div>
                          </div>
                          <div className="product-order-detail">
                            <Link to="/product-left-thumbnail" className="order-image">
                              <img style={{height:'200px' , width: '100%'}} src={"http://103.104.74.215:3018/uploads/"+list.productId.images[0]} className="blur-up lazyload" alt="" />
                            </Link>
                            <div className="order-wrap">
                              <Link to="/product-left-thumbnail">
                                <h3>{list.productId.product_name}</h3>
                              </Link>
                              {/* <p className="text-content">Cheddar dolcelatte gouda. Macaroni cheese
                                cheese strings feta halloumi cottage cheese jarlsberg cheese
                                triangles say cheese.</p> */}
                              <ul className="product-size">
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Price : </h6>
                                    <h5>₹{list.productId.sale_price}</h5>
                                  </div>
                                </li>
                                {/* <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Rate : </h6>
                                    <div className="product-rating ms-2">
                                      <ul className="rating">
                                        <li>
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                        </li>
                                        <li>
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                        </li>
                                        <li>
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                        </li>
                                        <li>
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                        </li>
                                        <li>
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li> */}
                                {/* <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Sold By : </h6>
                                    <h5>Fresho</h5>
                                  </div>
                                </li> */}
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Quantity : </h6>
                                    <h5>{list.qty} </h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      
                      )
                                     })
                                   }
                      
                      </div>
                    </div>
                  </div>
  
  
  )
}

export default Profileorderlist