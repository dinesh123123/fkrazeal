import React from 'react'
import {FaFacebook, FaInstagram, FaPinterestP, FaTwitter,} from "react-icons/fa"
const Footer2 = () => {
  return (
    <>
        <footer className="section-t-space">
        <div className="container-fluid-lg">
          <div className="service-section">
            <div className="row g-3">
              <div className="col-12">
                <div className="service-contain">
                  <div className="service-box">
                    <div className="service-image">
                      <img src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg" className="blur-up lazyloaded" alt="" />
                    </div>
                    <div className="service-detail">
                      <h5>30 Days Warranty</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <img src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg" className="blur-up lazyloaded" alt="" />
                    </div>
                    <div className="service-detail">
                      <h5>Free Delivery For Order Over ₹50</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <img src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg" className="blur-up lazyloaded" alt="" />
                    </div>
                    <div className="service-detail">
                      <h5>Daily Mega Discounts</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <img src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg" className="blur-up lazyloaded" alt="" />
                    </div>
                    <div className="service-detail">
                      <h5>Secure Payment</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-footer section-b-space section-t-space">
            <div className="row g-md-4 g-3">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-logo">
                  <div className="theme-logo">
                    <a href="/">
                      <img src="../assets/images/logo/1.png" className="blur-up lazyloaded" alt="" />
                    </a>
                  </div>
                  <div className="footer-logo-contain">
                    <p>We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a
                      perfect place for a couple.</p>
                    <ul className="address">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        <a href="javascript:void(0)">1418 Riverwood Drive, CA 96052, US</a>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        <a href="javascript:void(0)">support@krazeal.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-sm-3">
                <div className="footer-title">
                  <h4>Useful Links</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    <li>
                      <a href="/" className="text-content">Home</a>
                    </li>
                    <li>
                      <a href="/shop-left-sidebar" className="text-content">Shop</a>
                    </li>
                    <li>
                      <a href="/about" className="text-content">About Us</a>
                    </li>
                    <li>
                      <a href="/blog" className="text-content">Blog</a>
                    </li>
                    <li>
                      <a href="/contact" className="text-content">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-sm-3">
                <div className="footer-title">
                  <h4>Help Center</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    <li>
                      <a href="/order-success" className="text-content">Your Order</a>
                    </li>
                    <li>
                      <a href="/user" className="text-content">Your Account</a>
                    </li>
                    <li>
                      <a href="/order-tracking" className="text-content">Track Order</a>
                    </li>
                    <li>
                      <a href="/wishlist" className="text-content">Your Wishlist</a>
                    </li>
                    <li>
                      <a href="/search" className="text-content">Search</a>
                    </li>
                    <li>
                      <a href="/faq" className="text-content">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-3">
                <div className="footer-title">
                  <h4>Contact Us</h4>
                </div>
                <div className="footer-contact">
                  <ul>
                    <li>
                      <div className="footer-number">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        <div className="contact-number">
                          <h6 className="text-content">Hotline 24/7 :</h6>
                          <h5>+91 888 104 2340</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="footer-number">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        <div className="contact-number">
                          <h6 className="text-content">Email Address :</h6>
                          <h5>krazeal@hotmail.com</h5>
                        </div>
                      </div>
                    </li>
                    <li className="social-app">
                      <h5 className="mb-2 text-content">Download App :</h5>
                      <ul>
                        <li className="mb-0">
                          <a href="https://play.google.com/store/apps" target="_blank">
                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/playstore.svg" className="blur-up lazyloaded" alt="" />
                          </a>
                        </li>
                        <li className="mb-0">
                          <a href="https://www.apple.com/in/app-store/" target="_blank">
                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/appstore.svg" className="blur-up lazyloaded" alt="" />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-footer section-small-space">
            <div className="reserve">
              <h6 className="text-content">©2022 Krazeal All rights reserved</h6>
            </div>
            <div className="payment">
              <img src="../assets/images/payment/1.png" className="blur-up lazyloaded" alt="" />
            </div>
            <div className="social-link">
              <h6 className="text-content">Stay connected :</h6>
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <FaTwitter/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://in.pinterest.com/" target="_blank">
                    <FaPinterestP />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer2
