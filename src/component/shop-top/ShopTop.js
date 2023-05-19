
import React,{ useState, useEffect }  from 'react'
import axios from 'axios';
import Category from '../home/Category'
import { Link } from 'react-router-dom';

const ShopTop = () => {
  const [list, setList]=useState([]);
  

  useEffect(()=>{
    getHomeData();
  },[]);
  const getHomeData = async () => {
 const id=localStorage.getItem('item_id')
 
    const options ={
        headers: {
            "content-type" : "application/json; charset=utf-8",
            "Access-Control-Allow-Origin" : '*'
        }
    }
       const data = JSON.stringify({
"categoryId":id,
"name":'name'
          });

        await axios.post("https://admin.krazeal.com/krazeal/api/category_product_list",data,options).then(res => {
        setList(res.data.data);
        localStorage.setItem("token", res.data.token);
    console.log("response",res.data.data);
    }).catch(err =>{
        })
    }
  return (
    <>
    {/* <Header/> */}
      <Category/>
      <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="show-button">
                <div className="top-filter-menu-2">
                  <div className="ms-auto d-flex align-items-center">
                    <div className="category-dropdown me-md-3">
                      <h5 className="text-content">Sort By :</h5>
                      <div className="dropdown">
                        <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                          <span>Most Popular</span> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li>
                            <a className="dropdown-item" id="pop" href="javascript:void(0)">Popularity</a>
                          </li>
                          <li>
                            <a className="dropdown-item" id="low" href="javascript:void(0)">Low - High
                              Price</a>
                          </li>
                          <li>
                            <a className="dropdown-item" id="high" href="javascript:void(0)">High - Low
                              Price</a>
                          </li>
                          <li>
                            <a className="dropdown-item" id="rating" href="javascript:void(0)">Average
                              Rating</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid-option grid-option-2">
                      <ul>
                        <li className="three-grid">
                          <a href="javascript:void(0)">
                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-3.svg" className="blur-up lazyloaded" alt="" />
                          </a>
                        </li>
                        <li className="grid-btn five-grid d-xxl-inline-block d-none">
                          <a href="javascript:void(0)">
                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-4.svg" className="blur-up lazyload d-lg-inline-block d-none" alt="" />
                          </a>
                        </li>
                        <li className="five-grid d-xxl-inline-block d-none active">
                          <a href="javascript:void(0)">
                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-5.svg" className="blur-up lazyload d-lg-inline-block d-none" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-filter-category" id="collapseExample">
                <div className="row g-sm-4 g-3">
                  <div className="col-xl-3 col-md-6">
                    <div className="category-title">
                      <h3>Pack Size</h3>
                    </div>
                    <ul className="category-list custom-padding custom-height">
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="fruit" />
                          <label className="form-check-label" htmlFor="fruit">
                            <span className="name">Fruits &amp; Vegetables</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="cake" />
                          <label className="form-check-label" htmlFor="cake">
                            <span className="name">Bakery, Cake &amp; Dairy</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="behe" />
                          <label className="form-check-label" htmlFor="behe">
                            <span className="name">Beverages</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="snacks" />
                          <label className="form-check-label" htmlFor="snacks">
                            <span className="name">Snacks &amp; Branded Foods</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="beauty" />
                          <label className="form-check-label" htmlFor="beauty">
                            <span className="name">Beauty &amp; Household</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="pets" />
                          <label className="form-check-label" htmlFor="pets">
                            <span className="name">Kitchen, Garden &amp; Pets</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="egg" />
                          <label className="form-check-label" htmlFor="egg">
                            <span className="name">Eggs, Meat &amp; Fish</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="food" />
                          <label className="form-check-label" htmlFor="food">
                            <span className="name">Gourment &amp; World Food</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="care" />
                          <label className="form-check-label" htmlFor="care">
                            <span className="name">Baby Care</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="fish" />
                          <label className="form-check-label" htmlFor="fish">
                            <span className="name">Fish &amp; Seafood</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="marinades" />
                          <label className="form-check-label" htmlFor="marinades">
                            <span className="name">Marinades</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="lamb" />
                          <label className="form-check-label" htmlFor="lamb">
                            <span className="name">Mutton &amp; Lamb</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="other" />
                          <label className="form-check-label" htmlFor="other">
                            <span className="name">Port &amp; other Meats</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="pour" />
                          <label className="form-check-label" htmlFor="pour">
                            <span className="name">Pourltry</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="salami" />
                          <label className="form-check-label" htmlFor="salami">
                            <span className="name">Sausages, bacon &amp; Salami</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="category-title">
                      <h3>Price</h3>
                    </div>
                    <div className="range-slider">
                      <span className="irs js-irs-0"><span className="irs"><span className="irs-line" tabIndex={-1}><span className="irs-line-left" /><span className="irs-line-mid" /><span className="irs-line-right" /></span><span className="irs-min" style={{visibility: 'hidden'}}>$. 0</span><span className="irs-max" style={{visibility: 'visible'}}>$. 1.000.000</span><span className="irs-from" style={{visibility: 'visible', left: '0%'}}>$. 0</span><span className="irs-to" style={{visibility: 'visible', left: '39.5637%'}}>$. 500.000</span><span className="irs-single" style={{visibility: 'hidden', left: '15.7654%'}}>$. 0 - $. 500.000</span></span><span className="irs-grid" /><span className="irs-bar" style={{left: '2.56153%', width: '47.4385%'}} /><span className="irs-shadow shadow-from" style={{display: 'none'}} /><span className="irs-shadow shadow-to" style={{display: 'none'}} /><span className="irs-slider from" style={{left: '0%'}} /><span className="irs-slider to type_last" style={{left: '47.4385%'}} /></span><input type="text" className="js-range-slider irs-hidden-input" defaultValue readOnly />
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="category-title">
                      <h3>Discount</h3>
                    </div>
                    <ul className="category-list">
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            <span className="name">upto 5%</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault1" />
                          <label className="form-check-label" htmlFor="flexCheckDefault1">
                            <span className="name">5% - 10%</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault2" />
                          <label className="form-check-label" htmlFor="flexCheckDefault2">
                            <span className="name">10% - 15%</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault3" />
                          <label className="form-check-label" htmlFor="flexCheckDefault3">
                            <span className="name">15% - 25%</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault4" />
                          <label className="form-check-label" htmlFor="flexCheckDefault4">
                            <span className="name">More than 25%</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="category-title">
                      <h3>Category</h3>
                    </div>
                    <ul className="category-list custom-padding custom-height">
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault5" />
                          <label className="form-check-label" htmlFor="flexCheckDefault5">
                            <span className="name">400 to 500 g</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault6" />
                          <label className="form-check-label" htmlFor="flexCheckDefault6">
                            <span className="name">500 to 700 g</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault7" />
                          <label className="form-check-label" htmlFor="flexCheckDefault7">
                            <span className="name">700 to 1 kg</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault8" />
                          <label className="form-check-label" htmlFor="flexCheckDefault8">
                            <span className="name">120 - 150 g each Vacuum 2 pcs</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault9" />
                          <label className="form-check-label" htmlFor="flexCheckDefault9">
                            <span className="name">1 pc</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault10" />
                          <label className="form-check-label" htmlFor="flexCheckDefault10">
                            <span className="name">1 to 1.2 kg</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault11" />
                          <label className="form-check-label" htmlFor="flexCheckDefault11">
                            <span className="name">2 x 24 pcs Multipack</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault12" />
                          <label className="form-check-label" htmlFor="flexCheckDefault12">
                            <span className="name">2x6 pcs Multipack</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault13" />
                          <label className="form-check-label" htmlFor="flexCheckDefault13">
                            <span className="name">4x6 pcs Multipack</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault14" />
                          <label className="form-check-label" htmlFor="flexCheckDefault14">
                            <span className="name">5x6 pcs Multipack</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault15" />
                          <label className="form-check-label" htmlFor="flexCheckDefault15">
                            <span className="name">Combo 2 Items</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault16" />
                          <label className="form-check-label" htmlFor="flexCheckDefault16">
                            <span className="name">Combo 3 Items</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault17" />
                          <label className="form-check-label" htmlFor="flexCheckDefault17">
                            <span className="name">2 pcs</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault18" />
                          <label className="form-check-label" htmlFor="flexCheckDefault18">
                            <span className="name">3 pcs</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault19" />
                          <label className="form-check-label" htmlFor="flexCheckDefault19">
                            <span className="name">2 pcs Vacuum (140 g to 180 g each
                              )</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault20" />
                          <label className="form-check-label" htmlFor="flexCheckDefault20">
                            <span className="name">4 pcs</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault21" />
                          <label className="form-check-label" htmlFor="flexCheckDefault21">
                            <span className="name">4 pcs Vacuum (140 g to 180 g each
                              )</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault22" />
                          <label className="form-check-label" htmlFor="flexCheckDefault22">
                            <span className="name">6 pcs</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault23" />
                          <label className="form-check-label" htmlFor="flexCheckDefault23">
                            <span className="name">6 pcs carton</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox" id="flexCheckDefault24" />
                          <label className="form-check-label" htmlFor="flexCheckDefault24">
                            <span className="name">6 pcs Pouch</span>
                            <span className="number">(15)</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row g-sm-4 g-3 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
            {
              list.map((item) => {
                let idData = item._id[0]
                console.log("item", item)
                //let image= 'http://103.104.74.215:3018/uploads/'+item.image[0];
                return(

             
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" onClick={(()=>localStorage.setItem("pro_id",item._id ,"item.name",item.name))} key={item.id} style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                  <div className="product-box-4">
                    <div className="product-image">
                      <div className="label-flex">
                        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        </button>
                      </div>
                      <Link to="/product-left-thumbnail">
                        <img src={"http://103.104.74.215:3018/uploads/"+item.images[0]} className="img-fluid" alt="" />
                      </Link>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
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
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </li>
                      </ul>
                      <a href="/product-left-thumbnail">
                        <h5 className="name">{item.product_name}</h5>
                      </a>
                      <h5 className="price ">₹{item.sale_price}<del>₹{item.price}</del><p className="offers ">{item.discount_percantage}% Off</p> </h5>
                    </div>
                  </div>
                </div>
                )
              })
            }
           
              </div>
              <nav className="custome-pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="javascript:void(0)" tabIndex={-1} aria-disabled="true">
                      <i className="fa fa-angles-left" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="javascript:void(0)">1</a>
                  </li>
                  <li className="page-item" aria-current="page">
                    <a className="page-link" href="javascript:void(0)">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      <i className="fa fa-angles-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
   
    </>
  )
}

export default ShopTop
