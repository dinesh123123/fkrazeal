import React from 'react'

const HoverBox = () => {
  return (
    <>
           <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="offer-box hover-effect bg-size blur-up lazyloaded" style={{backgroundImage: 'url("../assets/images/veg-2/banner/3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', display: 'block'}}>
                <img src="../assets/images/veg-2/banner/3.jpg" className="bg-img blur-up lazyload" alt="" style={{display: 'none'}} />
                <div className="offer-contain p-4">
                  <div className="offer-detail">
                    <h2 className="text-dark">Special Offers <span className="text-danger fw-bold">of the
                        week!</span></h2>
                    <p className="text-content">Special offer on this discount, Hurry Up!</p>
                  </div>
                  <div className="offer-timing">
                    <div className="time" id="clockdiv-1" data-hours={1} data-minutes={2} data-seconds={3}>
                      <ul>
                        <li>
                          <div className="counter">
                            <div className="days">14</div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="hours">23</div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="minutes">39</div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="seconds">55</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default HoverBox
