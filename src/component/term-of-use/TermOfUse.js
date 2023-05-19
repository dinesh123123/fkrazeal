import React from 'react'
import Header2 from '../common/Header2'
// import Footer2 from '../common/Footer2'
const TermOfUse = () => {
  return (
    <>
    <Header2/>
      <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2>About Us</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="/">
                        <i className="fa-solid fa-house" />
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fresh-vegetable-section section-lg-space">
        <div className="container-fluid-lg">
          <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
            <div className="col-xl-6 col-12 g-sm-4">
              
                
                  <div className="fresh-image-2">
                    <div className="bg-size blur-up lazyloaded" style={{backgroundImage: 'url("../assets/images/inner-page/about-us/1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', display: 'block'}}>
                      <img  src="../assets/images/inner-page/about-us/1.jpg" className="bg-img blur-up lazyloaded img-fluid" alt="" style={{display: 'none'}} />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-12"></div>
                {/* <div class="col-6">
                            <div class="fresh-image">
                                <div>
                                    <img src="../assets/images/inner-page/about-us/2.jpg"
                                        class="bg-img blur-up lazyload" alt="">
                                </div>
                            </div>
                        </div> */}
            
            
            <div className="col-xl-6 col-12">
              <div className="fresh-contain p-center-left">
                <div>
                  <div className="review-title">
                    <h4>About Us</h4>
                    <h2>We make Organic Food In Market</h2>
                  </div>
                  <div className="delivery-list">
                    <p className="text-content">Just a few seconds to measure your body temperature. Up to 5
                      users! The battery lasts up to 2 years. There are many variations of passages of
                      Lorem Ipsum available.We started in 2019 and haven't stopped smashing it since. A
                      global brand that doesn't sleep, we are 24/7 and always bringing something new with
                      over 100 new products dropping on the monhtly, bringing you the latest looks for
                      less.</p>
                    <ul className="delivery-box">
                      <li>
                        <div className="delivery-box">
                          <div className="delivery-icon">
                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg" className="blur-up lazyloaded" alt="" />
                          </div>
                          <div className="delivery-detail">
                            <h5 className="text">Free delivery for all orders</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="delivery-box">
                          <div className="delivery-icon">
                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg" className="blur-up lazyloaded" alt="" />
                          </div>
                          <div className="delivery-detail">
                            <h5 className="text">Only fresh foods</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12"></div>
          </div>
        </div>
      </section>
      {/* <Footer2/> */}
      
    </>
  )
}

export default TermOfUse
