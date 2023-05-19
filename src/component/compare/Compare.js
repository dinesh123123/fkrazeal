import React from 'react'
// import Header2 from '../common/Header2'
// import Footer2 from '../common/Footer2'

const Compare = () => {
  return (
    <>
      {/* <Header2/> */}
      <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2 className="mb-2">Compare</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="/">
                        <i className="fa fa-house" />
                      </a>
                    </li>
                    <li className="breadcrumb-item">Shop</li>
                    <li className="breadcrumb-item active">Compare</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="compare-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table compare-table">
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <td>
                        <a className="text-title" href="/product-left-thumbnail">Daily Shine Shampoo</a>
                      </td>
                      <td>
                        <a className="text-title" href="/product-left-thumbnail">Intence Repair
                          Shampoo</a>
                      </td>
                      <td>
                        <a className="text-title" href="/product-left-thumbnail">Anti Dandruff
                          Solution</a>
                      </td>
                      <td>
                        <a className="text-title" href="/product-left-thumbnail">Repair &amp; Shine
                          Shampoo</a>
                      </td>
                    </tr>
                    <tr>
                      <th>Images</th>
                      <td>
                        <a href="/product-left-thumbnail" className="compare-image">
                          <img src="../assets/images/inner-page/compare/1.png" className="img-fluid blur-up lazyloaded" alt="" />
                        </a>
                      </td>
                      <td>
                        <a href="/product-left-thumbnail" className="compare-image">
                          <img src="../assets/images/inner-page/compare/2.png" className="img-fluid blur-up lazyloaded" alt="" />
                        </a>
                      </td>
                      <td>
                        <a href="/product-left-thumbnail" className="compare-image">
                          <img src="../assets/images/inner-page/compare/3.png" className="img-fluid blur-up lazyloaded" alt="" />
                        </a>
                      </td>
                      <td>
                        <a href="/product-left-thumbnail" className="compare-image">
                          <img src="../assets/images/inner-page/compare/4.png" className="img-fluid blur-up lazyloaded" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>Hair Type</th>
                      <td className="text-content">Normal</td>
                      <td className="text-content">Oily</td>
                      <td className="text-content">Dry</td>
                      <td className="text-content">Normal</td>
                    </tr>
                    <tr>
                      <th>Item Form</th>
                      <td className="text-content">Gel</td>
                      <td className="text-content">Liquid</td>
                      <td className="text-content">Gel</td>
                      <td className="text-content">Gel</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td className="price text-content">$20.23</td>
                      <td className="price text-content">$26.90</td>
                      <td className="price text-content">$12.23</td>
                      <td className="price text-content">$15.85</td>
                    </tr>
                    <tr>
                      <th>Availability</th>
                      <td className="text-content">In Stock</td>
                      <td className="text-content">In Stock</td>
                      <td className="text-content">In Stock</td>
                      <td className="text-content">In Stock</td>
                    </tr>
                    <tr>
                      <th>Rating</th>
                      <td>
                        <div className="compare-rating">
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
                          <span className="text-content">(20 Raring)</span>
                        </div>
                      </td>
                      <td>
                        <div className="compare-rating">
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
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </li>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </li>
                          </ul>
                          <span className="text-content">(25 Raring)</span>
                        </div>
                      </td>
                      <td>
                        <div className="compare-rating">
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
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </li>
                          </ul>
                          <span className="text-content">(50 Raring)</span>
                        </div>
                      </td>
                      <td>
                        <div className="compare-rating">
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
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </li>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </li>
                          </ul>
                          <span className="text-content">(30 Raring)</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Weight</th>
                      <td className="text-content">5.00kg</td>
                      <td className="text-content">1.00kg</td>
                      <td className="text-content">0.75kg</td>
                      <td className="text-content">0.50kg</td>
                    </tr>
                    <tr>
                      <th>Purchase</th>
                      <td>
                        <button onclick="location.href = '/cart';" className="btn btn-animation btn-sm w-100"><a href='/cart'>Add To Cart</a></button>
                      </td>
                      <td>
                        <button onclick="location.href = '/cart';" className="btn btn-animation btn-sm w-100"><a href='/cart'>Add To Cart</a></button>
                      </td>
                      <td>
                        <button onclick="location.href = '/cart';" className="btn btn-animation btn-sm w-100"><a href='/cart'>Add To Cart</a></button>
                      </td>
                      <td>
                        <button onclick="location.href = '/cart';" className="btn btn-animation btn-sm w-100"><a href='/cart'>Add To Cart</a></button>
                      </td>
                    </tr>
                    <tr>
                      <th />
                      <td>
                        <a href="javascript:void(00" className="text-content remove_column"><i className="fa fa-trash-can me-2" /> Remove</a>
                      </td>
                      <td>
                        <a href="javascript:void(00" className="text-content remove_column"><i className="fa fa-trash-can me-2" /> Remove</a>
                      </td>
                      <td>
                        <a href="javascript:void(00" className="text-content remove_column"><i className="fa fa-trash-can me-2" /> Remove</a>
                      </td>
                      <td>
                        <a href="javascript:void(00" className="text-content remove_column"><i className="fa fa-trash-can me-2" /> Remove</a>
                      </td>
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

export default Compare
