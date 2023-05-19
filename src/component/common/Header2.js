import React from 'react'
import { Link } from 'react-router-dom'
const Header2 = () => {
  return ( 
 
    <>
       <header className="pb-md-4 pb-0">
        {/* <div className="header-top">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-xxl-3 d-xxl-block d-none">
                <div className="top-left-header">
                  <i className="iconly-Location icli text-white" />
                  <span className="text-white">1418 Riverwood Drive, CA 96052, US</span>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
                <div className="header-offer">
                  <div className="notification-slider slick-initialized slick-slider slick-vertical">
                    <div className="slick-list draggable" style={{height: '18.125px'}}><div className="slick-track" style={{opacity: 1, height: '91px', transform: 'translate3d(0px, -18px, 0px)'}}><div className="slick-slide slick-cloned" data-slick-index={-1} id aria-hidden="true" tabIndex={-1} style={{width: '654px'}}>
                          <div className="timer-notification">
                            <h6>Something you love is now on sale!
                              <a href="/shop-left-sidebar" className="text-white" tabIndex={-1}>Buy Now
                                !</a>
                            </h6>
                          </div>
                        </div><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={0} style={{width: '654px'}}>
                          <div className="timer-notification">
                            <h6><strong className="me-1">Welcome to Fastkart!</strong>Wrap new offers/gift
                              every signle day on Weekends.<strong className="ms-1">New Coupon Code: Fast024
                              </strong>
                            </h6>
                          </div>
                        </div><div className="slick-slide" data-slick-index={1} aria-hidden="true" tabIndex={-1} style={{width: '654px'}}>
                          <div className="timer-notification">
                            <h6>Something you love is now on sale!
                              <a href="/shop-left-sidebar" className="text-white" tabIndex={-1}>Buy Now
                                !</a>
                            </h6>
                          </div>
                        </div><div className="slick-slide slick-cloned" data-slick-index={2} id aria-hidden="true" tabIndex={-1} style={{width: '654px'}}>
                          <div className="timer-notification">
                            <h6><strong className="me-1">Welcome to Fastkart!</strong>Wrap new offers/gift
                              every signle day on Weekends.<strong className="ms-1">New Coupon Code: Fast024
                              </strong>
                            </h6>
                          </div>
                        </div><div className="slick-slide slick-cloned" data-slick-index={3} id aria-hidden="true" tabIndex={-1} style={{width: '654px'}}>
                          <div className="timer-notification">
                            <h6>Something you love is now on sale!
                              <a href="/shop-left-sidebar" className="text-white" tabIndex={-1}>Buy Now
                                !</a>
                            </h6>
                          </div>
                        </div></div></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <ul className="about-list right-nav-about">
                  <li className="right-nav-list">
                    <div className="dropdown theme-form-select">
                      <button className="btn dropdown-toggle" type="button" id="select-language" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../assets/images/country/united-states.png" className="img-fluid blur-up lazyloaded" alt="" />
                        <span>English</span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="select-language">
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" id="english">
                            <img src="../assets/images/country/united-kingdom.png" className="img-fluid blur-up lazyload" alt="" />
                            <span>English</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" id="france">
                            <img src="../assets/images/country/germany.png" className="img-fluid blur-up lazyload" alt="" />
                            <span>Germany</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" id="chinese">
                            <img src="../assets/images/country/turkish.png" className="img-fluid blur-up lazyload" alt="" />
                            <span>Turki</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="right-nav-list">
                    <div className="dropdown theme-form-select">
                      <button className="btn dropdown-toggle" type="button" id="select-dollar" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>USD</span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end sm-dropdown-menu" aria-labelledby="select-dollar">
                        <li>
                          <a className="dropdown-item" id="aud" href="javascript:void(0)">AUD</a>
                        </li>
                        <li>
                          <a className="dropdown-item" id="eur" href="javascript:void(0)">EUR</a>
                        </li>
                        <li>
                          <a className="dropdown-item" id="cny" href="javascript:void(0)">CNY</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div className="top-nav top-header sticky-header">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="navbar-top">
                  <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                    <span className="navbar-toggler-icon">
                      <i className="fa fa-bars" />
                    </span>
                  </button>
                  <Link to="/" className="web-logo nav-logo">
                    <img src="../assets/images/logo/1.png" className="img-fluid blur-up lazyloaded" alt="" />
                  </Link>
                  <div className="middle-box">
                    <div className="location-box">
                      <button className="btn location-button" data-bs-toggle="modal" data-bs-target="#locationModal">
                        <span className="location-arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>
                        </span>
                        <span className="locat-name">Your Location</span>
                        <i className="fa fa-angle-down" />
                      </button>
                    </div>
                    <div className="search-box">
                      <div className="input-group">
                        <input type="search" className="form-control" placeholder="I'm searching for..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn" type="button" id="button-addon2">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rightside-box">
                    <div className="search-full">
                      <div className="input-group">
                        <span className="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search font-light"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                        </span>
                        <input type="text" className="form-control search-type" placeholder="Search here.." />
                        <span className="input-group-text close-search">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x font-light"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                        </span>
                      </div>
                    </div>
                    <ul className="right-side-menu">
                      <li className="right-side">
                        <div className="delivery-login-box">
                          <div className="delivery-icon">
                            <div className="search-box">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="right-side">
                        <Link to="/contact" className="delivery-login-box">
                          <div className="delivery-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                          </div>
                          <div className="delivery-detail">
                            <h6>24/7 Delivery</h6>
                            <h5>+91 888 104 2340</h5>
                          </div>
                        </Link>
                      </li>
                      <li className="right-side">
                      <Link to="/wishlist" className="btn p-0 position-relative header-wishlist">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        </Link>
                      </li>
                      <li className="right-side">
                        <div className="onhover-dropdown header-badge">
                          <button type="button" className="btn p-0 position-relative header-wishlist">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            <span className="position-absolute top-0 start-100 translate-middle badge">2
                              <span className="visually-hidden">unread messages</span>
                            </span>
                          </button>
                          <div className="onhover-div">
                            <ul className="cart-list">
                              <li className="product-box-contain">
                                <div className="drop-cart">
                                  <Link to="product-left-thumbnail" className="drop-image">
                                    <img src="../assets/images/vegetable/product/1.png" className="blur-up lazyloaded" alt="" />
                                  </Link>
                                  <div className="drop-contain">
                                    <Link to="product-left-thumbnail">
                                      <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                    </Link>
                                    <h6><span>1 x</span> $80.58</h6>
                                    <button className="close-button close_button">
                                      <i className="fa fa-xmark" />
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li className="product-box-contain">
                                <div className="drop-cart">
                                  <Link to="product-left-thumbnail" className="drop-image">
                                    <img src="../assets/images/vegetable/product/2.png" className="blur-up lazyloaded" alt="" />
                                  </Link>
                                  <div className="drop-contain">
                                    <Link to="product-left-thumbnail">
                                      <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                      </h5>
                                    </Link>
                                    <h6><span>1 x</span> $25.68</h6>
                                    <button className="close-button close_button">
                                      <i className="fa fa-xmark" />
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="price-box">
                              <h5>Total :</h5>
                              <h4 className="theme-color fw-bold">$106.58</h4>
                            </div>
                            <div className="button-group">
                              <Link to="/cart" className="btn btn-sm cart-button">View Cart</Link>
                              <Link to="checkout" className="btn btn-sm cart-button theme-bg-color
                                                    text-white">Checkout</Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="right-side onhover-dropdown">
                        <div className="delivery-login-box">
                          <div className="delivery-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                          </div>
                          <div className="delivery-detail">
                            <h6>Hello,</h6>
                            <h5>My Account</h5>
                          </div>
                        </div>
                        <div className="onhover-div onhover-div-login">
                          <ul className="user-box-name">
                            <li className="product-box-contain">
                              <i />
                              <Link to="/login">Log In</Link>
                            </li>
                            <li className="product-box-contain">
                              <Link to="/register">Register</Link>
                            </li>
                            <li className="product-box-contain">
                              <Link to="/forgot">Forgot Password</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="header-nav">
                <div className="header-nav-left">
                  <button className="dropdown-category">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-left"><line x1={17} y1={10} x2={3} y2={10} /><line x1={21} y1={6} x2={3} y2={6} /><line x1={21} y1={14} x2={3} y2={14} /><line x1={17} y1={18} x2={3} y2={18} /></svg>
                    <span>All Categories</span>
                  </button>
                  <div className="category-dropdown">
                    <div className="category-title">
                      <h5>Categories</h5>
                      <button type="button" className="btn p-0 close-button text-content">
                        <i className="fa fa-xmark" />
                      </button>
                    </div>
                    <ul className="category-list">
                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg" alt="" />
                          <h6>Vegetables &amp; Fruit</h6>
                          <i className="fa fa-angle-right" />
                        </a>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Organic Vegetables</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Potato &amp; Tomato</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Cucumber &amp; Capsicum</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Leafy Vegetables</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Root Vegetables</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Beans &amp; Okra</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Cabbage &amp; Cauliflower</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Gourd &amp; Drumstick</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Specialty</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Fresh Fruit</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Banana &amp; Papaya</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Kiwi, Citrus Fruit</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Apples &amp; Pomegranate</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Seasonal Fruits</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Mangoes</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Fruit Baskets</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg" alt="" />
                          <h6>Beverages</h6>
                          <i className="fa fa-angle-right" />
                        </a>
                        <div className="onhover-category-box w-100">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Energy &amp; Soft Drinks</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Soda &amp; Cocktail Mix</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Soda &amp; Cocktail Mix</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Sports &amp; Energy Drinks</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Non Alcoholic Drinks</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Packaged Water</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Spring Water</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Flavoured Water</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg" alt="" />
                          <h6>Meats &amp; Seafood</h6>
                          <i className="fa fa-angle-right" />
                        </a>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Meat</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Fresh Meat</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Frozen Meat</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Marinated Meat</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Fresh &amp; Frozen Meat</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Seafood</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Fresh Water Fish</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Dry Fish</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Frozen Fish &amp; Seafood</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Marine Water Fish</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Canned Seafood</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Prawans &amp; Shrimps</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Other Seafood</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg" alt="" />
                          <h6>Breakfast &amp; Dairy</h6>
                          <i className="fa fa-angle-right" />
                        </a>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Breakfast Cereals</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Oats &amp; Porridge</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Kids Cereal</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Muesli</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Flakes</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Granola &amp; Cereal Bars</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Instant Noodles</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Pasta &amp; Macaroni</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Frozen Non-Veg Snacks</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Dairy</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Milk</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Curd</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Paneer, Tofu &amp; Cream</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Butter &amp; Margarine</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Condensed, Powdered Milk</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Buttermilk &amp; Lassi</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Yogurt &amp; Shrikhand</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Flavoured, Soya Milk</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg" alt="" />
                          <h6>Frozen Foods</h6>
                          <i className="fa fa-angle-right" />
                        </a>
                        <div className="onhover-category-box w-100">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Noodle, Pasta</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Instant Noodles</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Hakka Noodles</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Cup Noodles</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Vermicelli</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Instant Pasta</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg" alt="" />
                          <h6>Biscuits &amp; Snacks</h6>
                          <i className="fa fa-angle-right" />
                        </a>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Biscuits &amp; Cookies</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Salted Biscuits</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Marie, Health, Digestive</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Cream Biscuits &amp; Wafers</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Glucose &amp; Milk Biscuits</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Cookies</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Bakery Snacks</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Bread Sticks &amp; Lavash</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Cheese &amp; Garlic Bread</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Puffs, Patties, Sandwiches</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Breadcrumbs &amp; Croutons</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg" alt="" />
                          <h6>Grocery &amp; Staples</h6>
                          <i className="fa fa-angle-right" />
                        </a>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Grocery</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Lemon, Ginger &amp; Garlic</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Indian &amp; Exotic Herbs</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Vegetables</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Fruits</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Organic Staples</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Organic Dry Fruits</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Dals &amp; Pulses</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Millet &amp; Flours</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Sugar, Jaggery</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Masalas &amp; Spices</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Rice, Other Rice</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Flours</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Edible Oil, Ghee</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-nav-middle">
                  <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                    <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                      <div className="offcanvas-header navbar-shadow">
                        <h5>Menu</h5>
                        <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close" />
                      </div>
                      {/* <div className="offcanvas-body">
                        <ul className="navbar-nav">
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Home</a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="index.html">Kartshop</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="index-2.html">Sweetshop</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="index-3.html">Organic</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="index-4.html">Supershop</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="index-5.html">Classic shop</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="index-6.html">Furniture</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="index-7.html">Search Oriented</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="index-8.html">Category Focus</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="index-9.html">Fashion</a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Shop</a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="shop-category-slider.html">Shop
                                  Category Slider</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="shop-category.html">Shop
                                  Category Sidebar</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="shop-banner.html">Shop Banner</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="shop-left-sidebar.html">Shop Left
                                  Sidebar</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="shop-list.html">Shop List</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="shop-right-sidebar.html">Shop
                                  Right Sidebar</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="shop-top-filter.html">Shop Top
                                  Filter</a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Product</a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="product-4-image.html">Product
                                  4 Image</a>
                              </li>
                              <li className="sub-dropdown-hover">
                                <a href="javascript:void(0)" className="dropdown-item">Product
                                  Thumbnail</a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="product-left-thumbnail">Left Thumbnail</a>
                                  </li>
                                  <li>
                                    <a href="product-right-thumbnail.html">Right
                                      Thumbnail</a>
                                  </li>
                                  <li>
                                    <a href="product-bottom-thumbnail.html">Bottom
                                      Thumbnail</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="product-bundle.html" className="dropdown-item">Product
                                  Bundle</a>
                              </li>
                              <li>
                                <a href="product-slider.html" className="dropdown-item">Product
                                  Slider</a>
                              </li>
                              <li>
                                <a href="product-sticky.html" className="dropdown-item">Product
                                  Sticky</a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown dropdown-mega">
                            <a className="nav-link dropdown-toggle ps-xl-2 ps-0" href="javascript:void(0)" data-bs-toggle="dropdown">Mega Menu</a>
                            <div className="dropdown-menu dropdown-menu-2">
                              <div className="row">
                                <div className="dropdown-column col-xl-3">
                                  <h5 className="dropdown-header">Daily Vegetables</h5>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Beans
                                    &amp; Brinjals</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Cauliflower</a>
                                  <a href="shop-left-sidebar.html" className="dropdown-item">Chilies, Garlic</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Vegetables &amp; Salads</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Gourd, Cucumber</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Herbs
                                    &amp; Sprouts</a>
                                  <a href="demo-personal-portfolio.html" className="dropdown-item">Lettuce &amp; Leafy</a>
                                </div>
                                <div className="dropdown-column col-xl-3">
                                  <h5 className="dropdown-header">Baby Tender</h5>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Beans
                                    &amp; Brinjals</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Cauliflower</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Chilies, Garlic</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Vegetables &amp; Salads</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Gourd, Cucumber</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Potatoes &amp; Tomatoes</a>
                                  <a href="shop-left-sidebar.html" className="dropdown-item">Peas
                                    &amp; Corn</a>
                                </div>
                                <div className="dropdown-column col-xl-3">
                                  <h5 className="dropdown-header">Exotic Vegetables</h5>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Asparagus &amp; Artichokes</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Avocados &amp; Peppers</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Zucchini</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Celery, Fennel &amp; Leeks</a>
                                  <a className="dropdown-item" href="shop-left-sidebar.html">Chilies &amp; Lime</a>
                                </div>
                                <div className="dropdown-column dropdown-column-img col-3" />
                              </div>
                            </div>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Blog</a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="blog-detail.html">Blog Detail</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="blog-grid.html">Blog Grid</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="blog-list.html">Blog List</a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown new-nav-item">
                            <label className="new-dropdown">New</label>
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Pages</a>
                            <ul className="dropdown-menu">
                              <li className="sub-dropdown-hover">
                                <a className="dropdown-item" href="javascript:void(0)">Email
                                  Template <span className="new-text"><i className="fa fa-bolt-lightning" /></span></a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="https://themes.pixelstrap.com/fastkart/email-templete/abandonment-email.html">Abandonment</a>
                                  </li>
                                  <li>
                                    <a href="https://themes.pixelstrap.com/fastkart/email-templete/offer-template.html">Offer
                                      Template</a>
                                  </li>
                                  <li>
                                    <a href="https://themes.pixelstrap.com/fastkart/email-templete/order-success.html">Order
                                      Success</a>
                                  </li>
                                  <li>
                                    <a href="https://themes.pixelstrap.com/fastkart/email-templete/reset-password.html">Reset
                                      Password</a>
                                  </li>
                                  <li>
                                    <a href="https://themes.pixelstrap.com/fastkart/email-templete/welcome.html">Welcome
                                      template</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="sub-dropdown-hover">
                                <a className="dropdown-item" href="javascript:void(0)">Invoice
                                  Template <span className="new-text"><i className="fa fa-bolt-lightning" /></span></a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="https://themes.pixelstrap.com/fastkart/invoice/invoice-1.html">Invoice 1</a>
                                  </li>
                                  <li>
                                    <a href="https://themes.pixelstrap.com/fastkart/invoice/invoice-2.html">Invoice 2</a>
                                  </li>
                                  <li>
                                    <a href="https://themes.pixelstrap.com/fastkart/invoice/invoice-3.html">Invoice 3</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a className="dropdown-item" href="404.html">404</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="about-us.html">About Us</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="cart.html">Cart</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="contact-us.html">Contact</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="compare.html">Compare</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="faq.html">Faq</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="order-success.html">Order
                                  Success</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="order-tracking.html">Order
                                  Tracking</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="otp.html">OTP</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="search.html">Search</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="user-dashboard.html">User
                                  Dashboard</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Seller</a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="seller-become.html">Become a
                                  Seller</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="seller-dashboard.html">Seller
                                  Dashboard</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="seller-detail.html">Seller
                                  Detail</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="seller-detail-2.html">Seller
                                  Detail 2</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="seller-grid.html">Seller Grid</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="seller-grid-2.html">Seller Grid
                                  2</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="header-nav-right">
                  <button className="btn deal-button" data-bs-toggle="modal" data-bs-target="#deal-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                    <span>Deal Today</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> 
    </>
  )
}

export default Header2
