import React from 'react'
// import Header from '../common/Header'
// import Footer from '../common/Footer'

const Search = () => {
  return (
    <>
    {/* <Header/> */}
    <section className="category-section-3">
        <div className="container-fluid-lg">
          {/*  <div class="title">
                <h2>Shop By Categories</h2>
            </div> */}
          <div className="row">
            <div className="col-12">
              <div className="category-slider-1 slick-initialized slick-slider"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>Previous</button>
                <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: '4025px', transform: 'translate3d(-875px, 0px, 0px)'}}><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={-5} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/5.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Stationery</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={-4} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/6.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Home</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={-3} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/7.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Electronics</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={-2} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/8.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Sports</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={-1} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/1.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Fashion</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-current slick-active" style={{width: '175px'}} data-slick-index={0} aria-hidden="false" tabIndex={0}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={0}>
                            <img src="../assets/images/grocery/category/1.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={0}>
                          <h4>Fashion</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-active" style={{width: '175px'}} data-slick-index={1} aria-hidden="false" tabIndex={0}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={0}>
                            <img src="../assets/images/grocery/category/2.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={0}>
                          <h4>Grocery</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-active" style={{width: '175px'}} data-slick-index={2} aria-hidden="false" tabIndex={0}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={0}>
                            <img src="../assets/images/grocery/category/3.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={0}>
                          <h4>Mobiles</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-active" style={{width: '175px'}} data-slick-index={3} aria-hidden="false" tabIndex={0}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={0}>
                            <img src="../assets/images/grocery/category/4.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={0}>
                          <h4>Appliances</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-active" style={{width: '175px'}} data-slick-index={4} aria-hidden="false" tabIndex={0}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={0}>
                            <img src="../assets/images/grocery/category/5.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={0}>
                          <h4>Stationery</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide" style={{width: '175px'}} data-slick-index={5} aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/6.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Home</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide" style={{width: '175px'}} data-slick-index={6} aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/7.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Electronics</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide" style={{width: '175px'}} data-slick-index={7} aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/8.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Sports</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide" style={{width: '175px'}} data-slick-index={8} aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/1.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Fashion</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={9} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/1.png" className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Fashion</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={10} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/2.png" className="img-fluid blur-up " alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Grocery</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={11} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/3.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Mobiles</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={12} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/4.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Appliances</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={13} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/5.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Stationery</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={14} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/6.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Home</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={15} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/7.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Electronics</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={16} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/8.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Sports</h4>
                        </a>
                      </div>
                    </div><div className="slick-slide slick-cloned" style={{width: '175px'}} data-slick-index={17} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top-filter" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/1.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top-filter" className="category-name" tabIndex={-1}>
                          <h4>Fashion</h4>
                        </a>
                      </div>
                    </div></div></div><button className="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>Next</button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="search-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-6 col-xl-8 mx-auto">
              <div className="title d-block text-center">
                <h2>Search for products</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
              </div>
              <div className="search-box">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder aria-label="Example text with button addon" />
                  <button className="btn theme-bg-color text-white m-0" type="button" id="button-addon1">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex-2">
            <div className="title">
            </div>
          </div>
          <div className="tab-content" id="myTabContent" style={{marginTop: '-40px'}}>
            <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
              <div className="row g-8">
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                        <i class="feather feather-heart"></i>

                                         <i data-feather="heart"></i>
                                    </button>
                                </div> */}
                      <a href="/product-left-thumbnail">
                        <img src="../assets/images/product/product/1.png" className="img-fluid" alt="" />
                      </a>
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                      {/*  <div class="price-qty">
                                    <div class="counter-number">
                                        <div class="counter">
                                            <div class="qty-left-minus" data-type="minus" data-field="">
                                                <i class="fa fa-minus" aria-hidden="true"></i>
                                            </div>
                                            <input class="form-control input-number qty-input" type="text"
                                                name="quantity" value="0">
                                            <div class="qty-right-plus" data-type="plus" data-field="">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <button class="buy-button buy-button-2 btn btn-cart">
                                     

                                         <i data-feather="shopping-cart"></i>
                                    </button>
                                </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.05s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                         <i data-feather="heart"></i>
                                    </button>
                                </div>

                                <a href="/product-left-thumbnail"> */}
                      <img src="../assets/images/veg-3/cate1/3.png" className="img-fluid" alt="" />
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                   

                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                         <i data-feather="heart"></i>
                                    </button>
                                </div> */}
                      <a href="/product-left-thumbnail">
                        <img src="../assets/images/veg-3/cate1/5.png" className="img-fluid" alt="" />
                      </a>
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.15s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                        <i data-feather="heart"></i>
                                    </button>
                                </div>

                                <a href="/product-left-thumbnail"> */}
                      <img src="../assets/images/veg-3/cate1/6.png" className="img-fluid" alt="" />
                      {/*  <ul class="option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                            <i class="iconly-Show icli"></i>
                                        </a>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i class="iconly-Swap icli"></i>
                                        </a>
                                    </li>
                                </ul> */}
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                    

                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                        <i data-feather="heart"></i>
                                    </button>
                                </div> */}
                      <a href="/product-left-thumbnail">
                        <img src="../assets/images/veg-3/cate1/7.png" className="img-fluid" alt="" />
                      </a>
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.25s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                         <i data-feather="heart"></i>
                                    </button>
                                </div>

                                <a href="/product-left-thumbnail"> */}
                      <img src="../assets/images/veg-3/cate1/9.png" className="img-fluid" alt="" />
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                         <i data-feather="heart"></i>
                                    </button>
                                </div>

                                <a href="/product-left-thumbnail"> */}
                      <img src="../assets/images/veg-3/cate1/11.png" className="img-fluid" alt="" />
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.35s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                    

                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                        <i class="iconly-Heart icli"></i>
                                    </button>
                                </div> */}
                      <a href="/product-left-thumbnail">
                        <img src="../assets/images/veg-3/cate1/12.png" className="img-fluid" alt="" />
                      </a>
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                         <i data-feather="heart"></i>
                                    </button>
                                </div>

                                <a href="/product-left-thumbnail"> */}
                      <img src="../assets/images/veg-3/cate1/13.png" className="img-fluid" alt="" />
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.45s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                         <i data-feather="heart"></i>
                                    </button>
                                </div>

                                <a href="/product-left-thumbnail"> */}
                      <img src="../assets/images/veg-3/cate1/15.png" className="img-fluid" alt="" />
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                   
                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                         <i data-feather="heart"></i>
                                    </button>
                                </div>

                                <a href="/product-left-thumbnail"> */}
                      <img src="../assets/images/veg-3/cate1/17.png" className="img-fluid" alt="" />
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.55s">
                  <div className="product-box-4">
                    <div className="product-image">
                      {/* <div class="label-flex">
                                    

                                    <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                         <i data-feather="heart"></i>
                                    </button>
                                </div> */}
                      <a href="/product-left-thumbnail">
                        <img src="../assets/images/veg-3/cate1/18.png" className="img-fluid" alt="" />
                      </a>
                    </div>
                    <div className="product-detail">
                      {/* <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul> */}
                      <a href="/product-left-thumbnail">
                        <h5 className="name">Casual Regular Sleeves Printed Women Light Green Top</h5>
                      </a>
                      <h5 className="price ">₹70.21<del>₹65.25</del><p className="offers ">30% Off</p> </h5>
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

export default Search
