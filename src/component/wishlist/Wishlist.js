
// import Header2 from '../common/Header2'
// import Footer2 from '../common/Footer2'
import React,{ useState, useEffect }  from 'react'
import axios from 'axios';
const Wishlist = () => {
  const [list, setList]=useState([]);
 

  useEffect(()=>{
    getHomeData();
  },[]);
  const getHomeData = async () => {
 const id=localStorage.getItem('item_id')
 const userid=localStorage.getItem('_id')
 
    const options ={
        headers: {
            "content-type" : "application/json; charset=utf-8",
            "Access-Control-Allow-Origin" : '*'
        }
    }
       const data = JSON.stringify({
        "userId": userid,
   "name":'name'
          });

        await axios.post("https://admin.krazeal.com/krazeal/api/category_product_list",data,options).then(res => {
        setList(res.data.data);
        localStorage.setItem("token", res.data.token);
    console.log("response",res.data.data);
    }).catch(err =>{
        })
    }
    // const handleSubmit = () => {
    //   ipcRenderer.send(
    //     "EDITOR",
    //     [ type, typeValue],
    //     "editor_response"
    //   );
    //   onClose(selectedValue);
    // };
  return (
    <>
       {/* <Header2/> */}

      <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2>Wishlist</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="/">
                        <i className="fa-solid fa-house" />
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wishlist-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-3 g-2">
          {
              list.map((item) => {
                console.log("item", item)
                return(
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain" key={item.id}>
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                    <img src={"http://103.104.74.215:3018/uploads/"+item.images[0]} className="img-fluid" alt="" />
                    </a>
                    <div className="product-header-top">
                      <button  className="btn wishlist-button close_button">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Vegetable</span>
                    <a href="/product-left-thumbnail">
                      <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                    </a>
                    <h6 className="unit mt-1">250 ml</h6>
                    <h5 className="price">
                      <span className="theme-color">$08.02</span>
                      <del>$15.15</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
              })
            }
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                      <img src="../assets/images/cake/product/3.png" className="img-fluid blur-up lazyloaded" alt="" />
                    </a>
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
                    <a href="/product-left-thumbnail">
                      <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                    </a>
                    <h6 className="unit mt-1">350 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$04.33</span>
                      <del>$10.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                      <img src="../assets/images/cake/product/4.png" className="img-fluid blur-up lazyloaded" alt="" />
                    </a>
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
                    <a href="/product-left-thumbnail">
                      <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                    </a>
                    <h6 className="unit mt-1">570 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$12.52</span>
                      <del>$13.62</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                      <img src="../assets/images/cake/product/5.png" className="img-fluid blur-up lazyloaded" alt="" />
                    </a>
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
                    <a href="/product-left-thumbnail">
                      <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                    </a>
                    <h6 className="unit mt-1">100 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$10.25</span>
                      <del>$12.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                      <img src="../assets/images/cake/product/6.png" className="img-fluid blur-up lazyloaded" alt="" />
                    </a>
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
                    <a href="/product-left-thumbnail">
                      <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                    </a>
                    <h6 className="unit mt-1">550 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$14.25</span>
                      <del>$16.57</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                      <img src="../assets/images/cake/product/7.png" className="img-fluid blur-up lazyloaded" alt="" />
                    </a>
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
                    <a href="/product-left-thumbnail">
                      <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                    </a>
                    <h6 className="unit mt-1">1 Kg</h6>
                    <h5 className="price">
                      <span className="theme-color">$12.68</span>
                      <del>$14.69</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                      <img src="../assets/images/cake/product/2.png" className="img-fluid blur-up lazyloaded" alt="" />
                    </a>
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
                    <a href="/product-left-thumbnail">
                      <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                    </a>
                    <h6 className="unit mt-1">250 ml</h6>
                    <h5 className="price">
                      <span className="theme-color">$08.02</span>
                      <del>$15.15</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                      <img src="../assets/images/cake/product/3.png" className="img-fluid blur-up lazyloaded" alt="" />
                    </a>
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
                    <a href="/product-left-thumbnail">
                      <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                    </a>
                    <h6 className="unit mt-1">350 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$04.33</span>
                      <del>$10.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                      <img src="../assets/images/cake/product/4.png" className="img-fluid blur-up lazyloaded" alt="" />
                    </a>
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
                    <a href="/product-left-thumbnail">
                      <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                    </a>
                    <h6 className="unit mt-1">570 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$12.52</span>
                      <del>$13.62</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                      <img src="../assets/images/cake/product/5.png" className="img-fluid blur-up lazyloaded" alt="" />
                    </a>
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
                    <a href="/product-left-thumbnail">
                      <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                    </a>
                    <h6 className="unit mt-1">100 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$10.25</span>
                      <del>$12.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="/product-left-thumbnail">
                      <img src="../assets/images/cake/product/6.png" className="img-fluid blur-up lazyloaded" alt="" />
                    </a>
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
                    <a href="/product-left-thumbnail">
                      <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                    </a>
                    <h6 className="unit mt-1">550 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$14.25</span>
                      <del>$16.57</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
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
      </section>
{/* <Footer2/> */}
    </>
  )
}

export default Wishlist
