import React, { useState} from 'react';
import  axios  from 'axios';
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Address2 from '../product-left-thumbnail/Address2';
import Profileorderlist from '../product-left-thumbnail/Profileorderlist';

const User = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate =useNavigate()

    const handelChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handelClick =  (event) => {
      const _id= localStorage.getItem('_id');
      console.log(_id)
    event.preventDefault();
//alert('hello')
    // password rx
    var passwordFormat = "^(.{0,7}|[^0-9]*|[^a-z]*|[a-z0-9]*)$"
    // email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmailError("")
    setPasswordError("")
  
  
        if (!input.email) {
            setEmailError("Email is required")
        } else if (!input.email.match(mailformat)) {
            setEmailError("Please enter your valid email")
        }else 
          if (!input.password) {
            setPasswordError("Password is required")
           
        } else if (input.password.length < 6) {
            setPasswordError("Password must be longer than 6 characters")
            
        } else if (input.password.match(passwordFormat)) {
            setPasswordError("Password must be one character")   
        }else{
       
                setLoading(true)
                const options = {
                    headers: {
                        "content-type": "application/json; charset=utf-8",
                        'Access-Control-Allow-Origin': '*'
                    }
                }
                const data = {
                    email: input.email,
                    password: input.password,
                  "_id":_id
                }

                 axios.post('https://admin.krazeal.com/krazeal/website/update_userdata', data,options).then(res => {
                     
                    
                 if (res.data.result!="false",res.data.token!="error" ) {
                    console.log("res",res.data.data.role);  
                    // localStorage.setItem('data', JSON.stringify(data.email, data.username));
                    // console.log(localStorage);
                    const data=res.data.data;
                    localStorage.setItem('_id', res.data.data._id);
                      localStorage.setItem("fname",res.data.data.fname);
                      localStorage.setItem("lname",res.data.data.lname);
                      localStorage.setItem("email",res.data.data.email);
                      localStorage.setItem("phone",res.data.data.phone);
                     //  localStorage.setItem("otp",res.data.data.otp);
                      localStorage.setItem("password",res.data.data.password);
                      localStorage.setItem("role",res.data.data.role);
                      localStorage.setItem("info",res.data.data.info);
                   
                        setLoading(false)
                         setTimeout(() => {
                             navigate("/", { replace: true });
                         }, 500)
                         return true
                     } else {
                        setLoading(false)
                     return true
                    }
                   
                }).catch(err => {
                    setLoading(false)
                    var errorRes = JSON.parse(err.response.request.response.setItem)
                    if (input.username && input.number && input.email) {
            
                    }
                })
            }
};





  return (
    <>
    {/* <Header/> */}
      <section className="user-dashboard-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 col-lg-4">
              <div className="dashboard-left-sidebar">
                <div className="close-button d-flex d-lg-none">
                  <button className="close-sidebar">
                    <i className="fa fa-xmark" />
                  </button>
                </div>
                <div className="profile-box">
                  <div className="cover-image">
                    <img src="../assets/images/inner-page/cover-img.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                  </div>
                  <div className="profile-contain">


                    <div className="profile-image">
                      <div className="position-relative">
         <img src="../assets/images/veg-3/banner/1.png" alt="" className="blur-up update_img lazyloaded" />
           <div className="cover-icon">
                        <form>
                          <i className="fa fa-pen">
                            <input type="file" style={{display:"none"}}  id="avatar"
          name="avatar"
          accept="image/png, image/jpg"
          />
                          </i>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="profile-name" >
                      <h3>{localStorage.getItem("fname")} {localStorage.getItem("lname")}</h3>
                      <h6 className="text-content">{localStorage.getItem("email")}</h6>
                    </div>
                  </div>
                </div>
                <ul className="nav nav-pills user-nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#pills-dashboard" type="button" role="tab" aria-controls="pills-dashboard" aria-selected="true"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                      DashBoard</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-order-tab" data-bs-toggle="pill" data-bs-target="#pills-order" type="button" role="tab" aria-controls="pills-order" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1={3} y1={6} x2={21} y2={6} /><path d="M16 10a4 4 0 0 1-8 0" /></svg>Order</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-wishlist-tab" data-bs-toggle="pill" data-bs-target="#pills-wishlist" type="button" role="tab" aria-controls="pills-wishlist" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                      Wishlist</button>
                  </li>
                  {/* <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-card-tab" data-bs-toggle="pill" data-bs-target="#pills-card" type="button" role="tab" aria-controls="pills-card" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card"><rect x={1} y={4} width={22} height={16} rx={2} ry={2} /><line x1={1} y1={10} x2={23} y2={10} /></svg> Saved Card</button>
                  </li> */}
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-address-tab" data-bs-toggle="pill" data-bs-target="#pills-address" type="button" role="tab" aria-controls="pills-address" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>
                      Address</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                      Profile</button>
                  </li>
                  {/* <li className="nav-item" role="presentation">
                    <button  className="nav-link" id="pills-out-tab" data-bs-toggle="pill" data-bs-target="#pills-out" type="button" role="tab" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg>
                      Log Out</button>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-xxl-9 col-lg-8">
              <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">Show
                Menu</button>
              <div className="dashboard-right-sidebar">
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-dashboard" role="tabpanel" aria-labelledby="pills-dashboard-tab">
                    <div className="dashboard-home">
                      <div className="title">
                        <h2>My Dashboard</h2>
                        <span className="title-leaf">
                          <svg className="icon-width bg-gray">
                            <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                          </svg>
                        </span>
                      </div>
                      <div className="dashboard-user-name">
                        <p className="text-content">From your My Account Dashboard you have the ability to
                          view your recent account activity</p>
                      </div>
                      <div className="total-box">
                        <div className="row g-sm-4 g-3">
                          <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div className="totle-contain">
                              <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg" className="img-1 blur-up lazyloaded" alt="" />
                              <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg" className="blur-up lazyloaded" alt="" />
                              <div className="totle-detail">
                                <h5>Total Order</h5>
                                <h3>3658</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div className="totle-contain">
                              <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg" className="img-1 blur-up lazyloaded" alt="" />
                              <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg" className="blur-up lazyloaded" alt="" />
                              <div className="totle-detail">
                                <h5>Total Pending Order</h5>
                                <h3>254</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div className="totle-contain">
                              <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg" className="img-1 blur-up lazyloaded" alt="" />
                              <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg" className="blur-up lazyloaded" alt="" />
                              <div className="totle-detail">
                                <h5>Total Wishlist</h5>
                                <h3>32158</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade show" id="pills-wishlist" role="tabpanel" aria-labelledby="pills-wishlist-tab">
                    <div className="dashboard-wishlist">
                      <div className="title">
                        <h2>My Wishlist History</h2>
                        <span className="title-leaf title-leaf-gray">
                          <svg className="icon-width bg-gray">
                            <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                          </svg>
                        </span>
                      </div>
                      <div className="row g-sm-4 g-3">
                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="product-box-3 theme-bg-white h-100">
                            <div className="product-header">
                              <div className="product-image">
                                <Link to="/product-left-thumbnail">
                                  <img src="../assets/images/cake/product/2.png" className="img-fluid blur-up lazyload" alt="" />
                                </Link>
                                <div className="product-header-top">
                                  <button className="btn wishlist-button close_button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="product-footer">
                              <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <Link to="/product-left-thumbnail">
                                  <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </Link>
                                <p className="text-content mt-1 mb-2 product-content">Cheesy feet
                                  cheesy grin brie. Mascarpone cheese and wine hard cheese the
                                  big cheese everyone loves smelly cheese macaroni cheese
                                  croque monsieur.</p>
                                <h6 className="unit mt-1">250 ml</h6>
                                <h5 className="price">
                                  <span className="theme-color">$08.02</span>
                                  <del>$15.15</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                  <button className="btn btn-add-cart addcart-button" tabIndex={0}>Add
                                    <span className="add-icon">
                                      <i className="fa fa-plus" />
                                    </span>
                                  </button>
                                  <div className="cart_qty qty-box">
                                    <div className="input-group">
                                      <button type="button" className="qty-left-minus" data-type="minus" data-field>
                                        <i className="fa fa-minus" aria-hidden="true" />
                                      </button>
                                      <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                                      <button type="button" className="qty-right-plus" data-type="plus" data-field>
                                        <i className="fa fa-plus" aria-hidden="true" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="product-box-3 theme-bg-white h-100">
                            <div className="product-header">
                              <div className="product-image">
                                <Link to="/product-left-thumbnail">
                                  <img src="../assets/images/cake/product/3.png" className="img-fluid blur-up lazyload" alt="" />
                                </Link>
                                <div className="product-header-top">
                                  <button className="btn wishlist-button close_button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="product-footer">
                              <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <Link to="/product-left-thumbnail">
                                  <h5 className="name">Peanut Butter Bite Premium Butter Cookies
                                    600 g</h5>
                                </Link>
                                <p className="text-content mt-1 mb-2 product-content">Feta taleggio
                                  croque monsieur swiss manchego cheesecake dolcelatte
                                  jarlsberg. Hard cheese danish fontina boursin melted cheese
                                  fondue.</p>
                                <h6 className="unit mt-1">350 G</h6>
                                <h5 className="price">
                                  <span className="theme-color">$04.33</span>
                                  <del>$10.36</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                  <button className="btn btn-add-cart addcart-button" tabIndex={0}>Add
                                    <span className="add-icon">
                                      <i className="fa fa-plus" />
                                    </span>
                                  </button>
                                  <div className="cart_qty qty-box">
                                    <div className="input-group">
                                      <button type="button" className="qty-left-minus" data-type="minus" data-field>
                                        <i className="fa fa-minus" aria-hidden="true" />
                                      </button>
                                      <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                                      <button type="button" className="qty-right-plus" data-type="plus" data-field>
                                        <i className="fa fa-plus" aria-hidden="true" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="product-box-3 theme-bg-white h-100">
                            <div className="product-header">
                              <div className="product-image">
                                <Link to="/product-left-thumbnail">
                                  <img src="../assets/images/cake/product/4.png" className="img-fluid blur-up lazyload" alt="" />
                                </Link>
                                <div className="product-header-top">
                                  <button className="btn wishlist-button close_button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="product-footer">
                              <div className="product-detail">
                                <span className="span-name">Snacks</span>
                                <Link to="/product-left-thumbnail">
                                  <h5 className="name">SnackAmor Combo Pack of Jowar Stick and
                                    Jowar Chips</h5>
                                </Link>
                                <p className="text-content mt-1 mb-2 product-content">Lancashire
                                  hard cheese parmesan. Danish fontina mozzarella cream cheese
                                  smelly cheese cheese and wine cheesecake dolcelatte stilton.
                                  Cream cheese parmesan who moved my cheese when the cheese
                                  comes out everybody's happy cream cheese red leicester
                                  ricotta edam.</p>
                                <h6 className="unit mt-1">570 G</h6>
                                <h5 className="price">
                                  <span className="theme-color">$12.52</span>
                                  <del>$13.62</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                  <button className="btn btn-add-cart addcart-button" tabIndex={0}>Add
                                    <span className="add-icon">
                                      <i className="fa fa-plus" />
                                    </span>
                                  </button>
                                  <div className="cart_qty qty-box">
                                    <div className="input-group">
                                      <button type="button" className="qty-left-minus" data-type="minus" data-field>
                                        <i className="fa fa-minus" aria-hidden="true" />
                                      </button>
                                      <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                                      <button type="button" className="qty-right-plus" data-type="plus" data-field>
                                        <i className="fa fa-plus" aria-hidden="true" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="product-box-3 theme-bg-white h-100">
                            <div className="product-header">
                              <div className="product-image">
                                <Link to="/product-left-thumbnail">
                                  <img src="../assets/images/cake/product/5.png" className="img-fluid blur-up lazyload" alt="" />
                                </Link>
                                <div className="product-header-top">
                                  <button className="btn wishlist-button close_button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="product-footer">
                              <div className="product-detail">
                                <span className="span-name">Snacks</span>
                                <Link to="/product-left-thumbnail">
                                  <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g
                                  </h5>
                                </Link>
                                <p className="text-content mt-1 mb-2 product-content">Cheddar
                                  cheddar pecorino hard cheese hard cheese cheese and biscuits
                                  bocconcini babybel. Cow goat paneer cream cheese fromage
                                  cottage cheese cauliflower cheese jarlsberg.</p>
                                <h6 className="unit mt-1">100 G</h6>
                                <h5 className="price">
                                  <span className="theme-color">$10.25</span>
                                  <del>$12.36</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                  <button className="btn btn-add-cart addcart-button" tabIndex={0}>Add
                                    <span className="add-icon">
                                      <i className="fa fa-plus" />
                                    </span>
                                  </button>
                                  <div className="cart_qty qty-box">
                                    <div className="input-group">
                                      <button type="button" className="qty-left-minus" data-type="minus" data-field>
                                        <i className="fa fa-minus" aria-hidden="true" />
                                      </button>
                                      <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                                      <button type="button" className="qty-right-plus" data-type="plus" data-field>
                                        <i className="fa fa-plus" aria-hidden="true" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="product-box-3 theme-bg-white h-100">
                            <div className="product-header">
                              <div className="product-image">
                                <Link to="/product-left-thumbnail">
                                  <img src="../assets/images/cake/product/6.png" className="img-fluid blur-up lazyload" alt="" />
                                </Link>
                                <div className="product-header-top">
                                  <button className="btn wishlist-button close_button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="product-footer">
                              <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <Link to="/product-left-thumbnail">
                                  <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                </Link>
                                <p className="text-content mt-1 mb-2 product-content">Bavarian
                                  bergkase smelly cheese swiss cut the cheese lancashire who
                                  moved my cheese manchego melted cheese. Red leicester paneer
                                  cow when the cheese comes out everybody's happy croque
                                  monsieur goat melted cheese port-salut.</p>
                                <h6 className="unit mt-1">550 G</h6>
                                <h5 className="price">
                                  <span className="theme-color">$14.25</span>
                                  <del>$16.57</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                  <button className="btn btn-add-cart addcart-button" tabIndex={0}>Add
                                    <span className="add-icon">
                                      <i className="fa fa-plus" />
                                    </span>
                                  </button>
                                  <div className="cart_qty qty-box">
                                    <div className="input-group">
                                      <button type="button" className="qty-left-minus" data-type="minus" data-field>
                                        <i className="fa fa-minus" aria-hidden="true" />
                                      </button>
                                      <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                                      <button type="button" className="qty-right-plus" data-type="plus" data-field>
                                        <i className="fa fa-plus" aria-hidden="true" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="product-box-3 theme-bg-white h-100">
                            <div className="product-header">
                              <div className="product-image">
                                <Link to="/product-left-thumbnail">
                                  <img src="../assets/images/cake/product/7.png" className="img-fluid blur-up lazyload" alt="" />
                                </Link>
                                <div className="product-header-top">
                                  <button className="btn wishlist-button close_button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="product-footer">
                              <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <Link to="/product-left-thumbnail">
                                  <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </Link>
                                <p className="text-content mt-1 mb-2 product-content">Melted cheese
                                  babybel chalk and cheese. Port-salut port-salut cream cheese
                                  when the cheese comes out everybody's happy cream cheese
                                  hard cheese cream cheese red leicester.</p>
                                <h6 className="unit mt-1">1 Kg</h6>
                                <h5 className="price">
                                  <span className="theme-color">$12.68</span>
                                  <del>$14.69</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                  <button className="btn btn-add-cart addcart-button" tabIndex={0}>Add
                                    <span className="add-icon">
                                      <i className="fa fa-plus" />
                                    </span>
                                  </button>
                                  <div className="cart_qty qty-box">
                                    <div className="input-group">
                                      <button type="button" className="qty-left-minus" data-type="minus" data-field>
                                        <i className="fa fa-minus" aria-hidden="true" />
                                      </button>
                                      <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                                      <button type="button" className="qty-right-plus" data-type="plus" data-field>
                                        <i className="fa fa-plus" aria-hidden="true" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                          <div className="product-box-3 theme-bg-white h-100">
                            <div className="product-header">
                              <div className="product-image">
                                <Link to="/product-left-thumbnail">
                                  <img src="../assets/images/cake/product/2.png" className="img-fluid blur-up lazyload" alt="" />
                                </Link>
                                <div className="product-header-top">
                                  <button className="btn wishlist-button close_button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="product-footer">
                              <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <Link to="/product-left-thumbnail">
                                  <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </Link>
                                <p className="text-content mt-1 mb-2 product-content">Squirty cheese
                                  cottage cheese cheese strings. Red leicester paneer danish
                                  fontina queso lancashire when the cheese comes out
                                  everybody's happy cottage cheese paneer.</p>
                                <h6 className="unit mt-1">250 ml</h6>
                                <h5 className="price">
                                  <span className="theme-color">$08.02</span>
                                  <del>$15.15</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                  <button className="btn btn-add-cart addcart-button" tabIndex={0}>Add
                                    <span className="add-icon">
                                      <i className="fa fa-plus" />
                                    </span>
                                  </button>
                                  <div className="cart_qty qty-box">
                                    <div className="input-group">
                                      <button type="button" className="qty-left-minus" data-type="minus" data-field>
                                        <i className="fa fa-minus" aria-hidden="true" />
                                      </button>
                                      <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                                      <button type="button" className="qty-right-plus" data-type="plus" data-field>
                                        <i className="fa fa-plus" aria-hidden="true" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Profileorderlist/>


                  {/* <div className="tab-pane fade show" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
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
                        <div className="order-box dashboard-bg-box">
                          <div className="order-container">
                            <div className="order-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg>
                            </div>
                            <div className="order-detail">
                              <h4>Delivere <span>Panding</span></h4>
                              <h6 className="text-content">Gouda parmesan caerphilly mozzarella
                                cottage cheese cauliflower cheese taleggio gouda.</h6>
                            </div>
                          </div>
                          <div className="product-order-detail">
                            <Link to="/product-left-thumbnail" className="order-image">
                              <img src="../assets/images/vegetable/product/1.png" className="blur-up lazyload" alt="" />
                            </Link>
                            <div className="order-wrap">
                              <Link to="/product-left-thumbnail">
                                <h3>Fantasy Crunchy Choco Chip Cookies</h3>
                              </Link>
                              <p className="text-content">Cheddar dolcelatte gouda. Macaroni cheese
                                cheese strings feta halloumi cottage cheese jarlsberg cheese
                                triangles say cheese.</p>
                              <ul className="product-size">
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Price : </h6>
                                    <h5>$20.68</h5>
                                  </div>
                                </li>
                                <li>
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
                                </li>
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Sold By : </h6>
                                    <h5>Fresho</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Quantity : </h6>
                                    <h5>250 G</h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="order-box dashboard-bg-box">
                          <div className="order-container">
                            <div className="order-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg>
                            </div>
                            <div className="order-detail">
                              <h4>Delivered <span className="success-bg">Success</span></h4>
                              <h6 className="text-content">Cheese on toast cheesy grin cheesy grin
                                cottage cheese caerphilly everyone loves cottage cheese the big
                                cheese.</h6>
                            </div>
                          </div>
                          <div className="product-order-detail">
                            <Link to="/product-left-thumbnail" className="order-image">
                              <img src="../assets/images/vegetable/product/2.png" alt="" className="blur-up lazyload" />
                            </Link>
                            <div className="order-wrap">
                              <Link to="/product-left-thumbnail">
                                <h3>Cold Brew Coffee Instant Coffee 50 g</h3>
                              </Link>
                              <p className="text-content">Pecorino paneer port-salut when the cheese
                                comes out everybody's happy red leicester mascarpone blue
                                castello cauliflower cheese.</p>
                              <ul className="product-size">
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Price : </h6>
                                    <h5>$20.68</h5>
                                  </div>
                                </li>
                                <li>
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
                                </li>
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Sold By : </h6>
                                    <h5>Fresho</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Quantity : </h6>
                                    <h5>250 G</h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="order-box dashboard-bg-box">
                          <div className="order-container">
                            <div className="order-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg>
                            </div>
                            <div className="order-detail">
                              <h4>Delivere <span>Panding</span></h4>
                              <h6 className="text-content">Cheesy grin boursin cheesy grin cheesecake
                                blue castello cream cheese lancashire melted cheese.</h6>
                            </div>
                          </div>
                          <div className="product-order-detail">
                            <Link to="/product-left-thumbnail" className="order-image">
                              <img src="../assets/images/vegetable/product/3.png" alt="" className="blur-up lazyload" />
                            </Link>
                            <div className="order-wrap">
                              <Link to="/product-left-thumbnail">
                                <h3>Peanut Butter Bite Premium Butter Cookies 600 g</h3>
                              </Link>
                              <p className="text-content">Cow bavarian bergkase mascarpone paneer
                                squirty cheese fromage frais cheese slices when the cheese comes
                                out everybody's happy.</p>
                              <ul className="product-size">
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Price : </h6>
                                    <h5>$20.68</h5>
                                  </div>
                                </li>
                                <li>
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
                                </li>
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Sold By : </h6>
                                    <h5>Fresho</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Quantity : </h6>
                                    <h5>250 G</h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="order-box dashboard-bg-box">
                          <div className="order-container">
                            <div className="order-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg>
                            </div>
                            <div className="order-detail">
                              <h4>Delivered <span className="success-bg">Success</span></h4>
                              <h6 className="text-content">Caerphilly port-salut parmesan pecorino
                                croque monsieur dolcelatte melted cheese cheese and wine.</h6>
                            </div>
                          </div>
                          <div className="product-order-detail">
                            <Link to="/product-left-thumbnail" className="order-image">
                              <img src="../assets/images/vegetable/product/4.png" className="blur-up lazyload" alt="" />
                            </Link>
                            <div className="order-wrap">
                              <Link to="/product-left-thumbnail">
                                <h3>SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h3>
                              </Link>
                              <p className="text-content">The big cheese cream cheese pepper jack
                                cheese slices danish fontina everyone loves cheese on toast
                                bavarian bergkase.</p>
                              <ul className="product-size">
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Price : </h6>
                                    <h5>$20.68</h5>
                                  </div>
                                </li>
                                <li>
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
                                </li>
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Sold By : </h6>
                                    <h5>Fresho</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="size-box">
                                    <h6 className="text-content">Quantity : </h6>
                                    <h5>250 G</h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="tab-pane fade show" id="pills-address" role="tabpanel" aria-labelledby="pills-address-tab">
                    <div className="dashboard-address">
                      <div className="title title-flex">
                        <div>
                          <h2>My Address Book</h2>
                          <span className="title-leaf">
                            <svg className="icon-width bg-gray">
                              <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                            </svg>
                          </span>
                        </div>
                        <Link to='/addaddress'>
                        <button className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"  data-bs-target="#add-address"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus me-2"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg> Add New Address</button></Link>
                      </div>
                      <Address2/>
                    </div>
                  </div>
                  <div className="tab-pane fade show" id="pills-card" role="tabpanel" aria-labelledby="pills-card-tab">
                    <div className="dashboard-card">
                      <div className="title title-flex">
                        <div>
                          <h2>My Card Details</h2>
                          <span className="title-leaf">
                            <svg className="icon-width bg-gray">
                              <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                            </svg>
                          </span>
                        </div>
                        <button className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3" data-bs-toggle="modal" data-bs-target="#editCard"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus me-2"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg> Add New Card</button>
                      </div>
                      <div className="row g-4">
                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                          <div className="payment-card-detail">
                            <div className="card-details">
                              <div className="card-number">
                                <h4>XXXX - XXXX - XXXX - 2548</h4>
                              </div>
                              <div className="valid-detail">
                                <div className="title">
                                  <span>valid</span>
                                  <span>thru</span>
                                </div>
                                <div className="date">
                                  <h3>08/05</h3>
                                </div>
                                <div className="primary">
                                  <span className="badge bg-pill badge-light">primary</span>
                                </div>
                              </div>
                              <div className="name-detail">
                                <div className="name">
                                  <h5>Audrey Carol</h5>
                                </div>
                                <div className="card-img">
                                  <img src="../assets/images/payment-icon/1.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="edit-card">
                              <Link data-bs-toggle="modal" data-bs-target="#editCard" href="javascript:void(0)"><i className="far fa-edit" /> edit</Link>
                              <Link to="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#removeProfile"><i className="far fa-minus-square" /> delete</Link>
                            </div>
                          </div>
                          <div className="edit-card-mobile">
                            <Link data-bs-toggle="modal" data-bs-target="#editCard" href="javascript:void(0)"><i className="far fa-edit" /> edit</Link>
                            <Link to="javascript:void(0)"><i className="far fa-minus-square" />
                              delete</Link>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                          <div className="payment-card-detail">
                            <div className="card-details card-visa">
                              <div className="card-number">
                                <h4>XXXX - XXXX - XXXX - 1536</h4>
                              </div>
                              <div className="valid-detail">
                                <div className="title">
                                  <span>valid</span>
                                  <span>thru</span>
                                </div>
                                <div className="date">
                                  <h3>12/23</h3>
                                </div>
                                <div className="primary">
                                  <span className="badge bg-pill badge-light">primary</span>
                                </div>
                              </div>
                              <div className="name-detail">
                                <div className="name">
                                  <h5>Leah Heather</h5>
                                </div>
                                <div className="card-img">
                                  <img src="../assets/images/payment-icon/2.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="edit-card">
                              <Link data-bs-toggle="modal" data-bs-target="#editCard" href="javascript:void(0)"><i className="far fa-edit" /> edit</Link>
                              <Link to="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#removeProfile"><i className="far fa-minus-square" /> delete</Link>
                            </div>
                          </div>
                          <div className="edit-card-mobile">
                            <Link data-bs-toggle="modal" data-bs-target="#editCard" href="javascript:void(0)"><i className="far fa-edit" /> edit</Link>
                            <Link to="javascript:void(0)"><i className="far fa-minus-square" />
                              delete</Link>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                          <div className="payment-card-detail">
                            <div className="card-details dabit-card">
                              <div className="card-number">
                                <h4>XXXX - XXXX - XXXX - 1366</h4>
                              </div>
                              <div className="valid-detail">
                                <div className="title">
                                  <span>valid</span>
                                  <span>thru</span>
                                </div>
                                <div className="date">
                                  <h3>05/21</h3>
                                </div>
                                <div className="primary">
                                  <span className="badge bg-pill badge-light">primary</span>
                                </div>
                              </div>
                              <div className="name-detail">
                                <div className="name">
                                  <h5>mark jecno</h5>
                                </div>
                                <div className="card-img">
                                  <img src="../assets/images/payment-icon/3.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="edit-card">
                              <Link data-bs-toggle="modal" data-bs-target="#editCard" href="javascript:void(0)"><i className="far fa-edit" /> edit</Link>
                              <Link to="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#removeProfile"><i className="far fa-minus-square" /> delete</Link>
                            </div>
                          </div>
                          <div className="edit-card-mobile">
                            <Link data-bs-toggle="modal" data-bs-target="#editCard" href="javascript:void(0)"><i className="far fa-edit" /> edit</Link>
                            <Link to="javascript:void(0)"><i className="far fa-minus-square" />
                              delete</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="dashboard-profile">
                      <div className="title">
                        <h2>My Profile</h2>
                        <span className="title-leaf">
                          <svg className="icon-width bg-gray">
                            <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                          </svg>
                        </span>
                      </div>
                      <div className="profile-detail dashboard-bg-box">
                        <div className="dashboard-title">
                        </div>
                        <div className="profile-name-detail">
                          <h3>Update Profile</h3>
                          <Link to="/update-user"  >Edit</Link>
                        </div>
                      </div>
                      <div className="profile-about dashboard-bg-box">
                        <div className="row">
                          <div className="col-xxl-7">
                            <div className="dashboard-title mb-3">
                              <h3>Profile About</h3> 
                            </div>
                            <div className="table-responsive">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Name :</td>
                                    <td>{localStorage.getItem("fname")} {localStorage.getItem("lname")}</td>
                                  </tr>
                                  {/* <tr>
                                    <td>Email :</td>
                                    <td>{localStorage.getItem("email")}</td>
                                  </tr> */}
                                  <tr>
                                    <td>Phone Number :</td>
                                    <td>
                                      <Link to="javascript:void(0)"> +91 {localStorage.getItem("phone")}</Link>
                                    </td>
                                  </tr>
                                  {/* <tr>
                                    <td>Address :</td>
                                    <td>549 Sulphur Springs Road, Downers, IL</td>
                                  </tr> */}
                                </tbody>
                              </table>
                            </div>
                            {/* <div className="dashboard-title mb-3">
                              <h3>Login Details</h3>
                            </div>
                            <div className="table-responsive">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Email :</td>
                                    <td>
                                      <Link to="javascript:void(0)">vicki.pope@gmail.com
                                        <span data-bs-toggle="modal" data-bs-target="#editProfile">Edit</span></Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Password :</td>
                                    <td>
                                      <Link to="javascript:void(0)">●●●●●●
                                        <span data-bs-toggle="modal" data-bs-target="#editProfile">Edit</span></Link>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div> */}
                          </div>
                          <div className="col-xxl-5">
                            <div className="profile-image">
                              <img src="../assets/images/inner-page/dashboard-profile.png" className="img-fluid blur-up lazyload" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  )
}


export default User
