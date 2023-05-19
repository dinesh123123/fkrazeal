import React from 'react'
// import Footer2 from '../component/common/Footer2'
// import Header2 from '../component/common/Header2'

const OrderTracking = () => {
  return (
    <>
    {/* <Header2/> */}
       <section className="order-detail">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 col-lg-6">
              <div className="order-image">
                <img src="../assets/images/vegetable/product/6.png" className="img-fluid blur-up lazyloaded" alt="" />
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-6">
              <div className="row g-sm-4 g-3">
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-package text-content"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg>
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Tracking Code</h5>
                      <h2 className="theme-color">MH4285UY</h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-truck text-content"><rect x={1} y={3} width={15} height={13} /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Service</h5>
                      <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/brand-name.svg" className="img-fluid blur-up lazyloaded" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-info text-content"><circle cx={12} cy={12} r={10} /><line x1={12} y1={16} x2={12} y2={12} /><line x1={12} y1={8} x2="12.01" y2={8} /></svg>
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Package Info</h5>
                      <h4>Letter</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-crosshair text-content"><circle cx={12} cy={12} r={10} /><line x1={22} y1={12} x2={18} y2={12} /><line x1={6} y1={12} x2={2} y2={12} /><line x1={12} y1={6} x2={12} y2={2} /><line x1={12} y1={22} x2={12} y2={18} /></svg>
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">From</h5>
                      <h4>STR. Smardan 9, Bucuresti, romania.</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin text-content"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Destination</h5>
                      <h4>Flokagata 24, 105 Reykjavik, Iceland</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar text-content"><rect x={3} y={4} width={18} height={18} rx={2} ry={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Estimated Time</h5>
                      <h4>7 Frb, 05:05pm</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 overflow-hidden">
                  <ol className="progtrckr">
                    <li className="progtrckr-done">
                      <h5>Order Processing</h5>
                      <h6>05:43 AM</h6>
                    </li>
                    <li className="progtrckr-done">
                      <h5>Pre-Production</h5>
                      <h6>01:21 PM</h6>
                    </li>
                    <li className="progtrckr-done">
                      <h5>In Production</h5>
                      <h6>Processing</h6>
                    </li>
                    <li className="progtrckr-todo">
                      <h5>Shipped</h5>
                      <h6>Pending</h6>
                    </li>
                    <li className="progtrckr-todo">
                      <h5>Delivered</h5>
                      <h6>Pending</h6>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="order-table-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table order-tab-table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Order Placed</td>
                      <td>26 Sep 2021</td>
                      <td>12:00 AM</td>
                      <td>California</td>
                    </tr>
                    <tr>
                      <td>Preparing to Ship</td>
                      <td>03 Oct 2021</td>
                      <td>12:00 AM</td>
                      <td>Canada</td>
                    </tr>
                    <tr>
                      <td>Shipped</td>
                      <td>04 Oct 2021</td>
                      <td>12:00 AM</td>
                      <td>America</td>
                    </tr>
                    <tr>
                      <td>Delivered</td>
                      <td>10 Nav 2021</td>
                      <td>12:00 AM</td>
                      <td>Germany</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* <Footer2/> */}
    </>
  )
}

export default OrderTracking
