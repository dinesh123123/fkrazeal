import React,{useState, useEffect} from 'react'
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const [counter, setCounter] = useState(1);
    const [loader, setLoading] =useState(false);
    const [lists, setLists]=useState([]);
  const [imageArr, setImageArr] = useState([]);
  
  useEffect(()=>{
    getHomeData();
  }, []);
  const getHomeData = async () => {
    const id=localStorage.getItem('pro_id')
    
    setLoading(true);
    const options ={
        headers: {
            "content-type" : "application/json; charset=utf-8",
            "Access-Control-Allow-Origin" : '*'
        }

       
    }
   
    const data = JSON.stringify({
      "productId":id,
      "name":'name' 
     });

    await axios.post(`https://admin.krazeal.com/krazeal/api/product_details`,data,options).then(res => {
    
    if(res.data.result!="false"){
      localStorage.setItem("token", res.data.token);
        setLoading(false)
      //console.log('res.data.data',res.data.data);
      setLists(res.data.data);
      if (res.data.data.images) {
        let data = [];
        res.data.data.images.map((item,index)=>{
          data.push({ original:'http://103.104.74.215:3018/uploads/'+item,thumbnail:'http://103.104.74.215:3018/uploads/'+item})
        })
        setImageArr(data)
      }
       } else{
        setLoading(false)
       }
    }).catch(err =>{
        setLoading(false)
    })
    
  }
 
  const handleCountChange = (event) => {
    setCounter(Number(event.target.value));
  };

  


  return (
    <>
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row">
          <div class="col-xxl-12 col-xl-12 col-lg-12 wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
              <div className="row g-4">
                <div className="col-xl-5 wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp',width:'40%'}}>
                  <div className="product-left-box">
                    <div className="row g-2">
                      <div className="col-xxl-10 col-lg-12 col-md-10 order-xxl-2 order-lg-1 order-md-2">
                      <div className="wrapper">
            <ImageGallery autoplay={false} 
            showFullscreenButton={false}
            PlayPauseButton={false}
            showArrows= {false}
          showPlayButton={false}
          arrows={false}
          infinite={true}
             items={imageArr} />
        </div>
     
            </div> 
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 wow fadeInUp"  data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp',width:'60%'}}>
                  <div className="right-box-contain">
                    <h2 className="name">{ lists.product_name}</h2>
                    <div className="price-rating">
                      <h3 className="theme-color price"> ₹{lists.sale_price }
                        <del className="text-content"> ₹{lists.price}  </del>
                        <span className="offer theme-color">{lists.discount_percantage}% Off</span></h3>
                      <div className="product-rating custom-rate">
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
                        <span className="review">0 Customer Review</span>
                      </div>
                    </div>
                    <div className="procuct-contain">
                      <p>{lists.description}
                      </p>
                    </div>
                  
                    <div className="note-box product-packege">
                      <div className="cart_qty qty-box product-qty">
                        <div className="input-group">
                         <button  className='qty_btn'
              onClick={() => setCounter(counter - 1)}
               >
              -
            </button>             
                        <p className='qty_count'> { counter}</p>
                        <button className='qty_btn' onClick={() => setCounter(counter + 1)}>+</button>
           
                          
                        </div>
                      </div>
                      <button className="primary__btn quickview__cart--btn" 
                        onClick={(()=>localStorage.setItem("userId",lists._id))}> 
                        <AddToCart count={counter} price={lists?.sale_price*counter}/>
                    </button> 
                    </div>
                    <div className="buy-box">
                      <Link to="/wishlist" >
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        <span>Add To Wishlist</span>
                      </Link>
                    </div>
                    <div className="pickup-box">
                      
                     
                      <div className="product-info">
                        <ul className="product-info-list product-info-list-2">
                          <li><a href="javascript:void(0)">{lists.instock && lists.instock < 10 ? (
        <p>Stock: {lists.instock}</p>
      ) : null} </a></li>
                        </ul>
                      </div>
                    </div>
 
                  </div>
                </div>
                <div className="col-12">
                  <div className="product-section-box">
                    <ul className="nav nav-tabs custom-nav" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Delivery </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false">Additional info</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Review</button>
                      </li>
                    </ul>
                    <div className="tab-content custom-tab" id="myTabContent">
                      <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                        <div className="product-description">
                          <div className="nav-desh">
                            <p>Jelly beans carrot cake icing biscuit oat cake gummi bears tart.
                              Lemon drops carrot cake pudding sweet gummi bears. Chocolate cake
                              tart cupcake donut topping liquorice sugar plum chocolate bar. Jelly
                              beans tiramisu caramels jujubes biscuit liquorice chocolate. Pudding
                              toffee jujubes oat cake sweet roll. Lemon drops dessert croissant
                              danish cake cupcake. Sweet roll candy chocolate toffee jelly sweet
                              roll halvah brownie topping. Marshmallow powder candy sesame snaps
                              jelly beans candy canes marshmallow gingerbread pie.</p>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                        <div className="table-responsive">
                          <table className="table info-table">
                            <tbody>
                              <tr>
                                <td>Specialty</td>
                                <td>Vegetarian</td>
                              </tr>
                              <tr>
                                <td>Ingredient Type</td>
                                <td>Vegetarian</td>
                              </tr>
                              <tr>
                                <td>Brand</td>
                                <td>Lavian Exotique</td>
                              </tr>
                              <tr>
                                <td>Form</td>
                                <td>Bar Brownie</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                        <div className="review-box">
                          <div className="row g-4">
                            <div className="col-xl-6">
                              <div className="review-title">
                                <h4 className="fw-500">Customer reviews</h4>
                              </div>
                              <div className="d-flex">
                                <div className="product-rating">
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
                                </div>
                                <h6 className="ms-3">4.2 Out Of 5</h6>
                              </div>
                              <div className="rating-box">
                                <ul>
                                  <li>
                                    <div className="rating-list">
                                      <h5>5 Star</h5>
                                      <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '68%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                          68%
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="rating-list">
                                      <h5>4 Star</h5>
                                      <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '67%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                          67%
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="rating-list">
                                      <h5>3 Star</h5>
                                      <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '42%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                          42%
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="rating-list">
                                      <h5>2 Star</h5>
                                      <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                          30%
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="rating-list">
                                      <h5>1 Star</h5>
                                      <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '24%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                          24%
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="review-title">
                                <h4 className="fw-500">Add a review</h4>
                              </div>
                              <div className="row g-4">
                                <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Name" />
                                    <label htmlFor="name">Your Name</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Email Address" />
                                    <label htmlFor="email">Email Address</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input type="url" className="form-control" id="website" placeholder="Website" />
                                    <label htmlFor="website">Website</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input type="url" className="form-control" id="review1" placeholder="Give your review a title" />
                                    <label htmlFor="review1">Review Title</label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-floating theme-form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '150px'}} defaultValue={""} />
                                    <label htmlFor="floatingTextarea2">Write Your
                                      Comment</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="review-title">
                                <h4 className="fw-500">Customer questions &amp; answers</h4>
                              </div>
                              <div className="review-people">
                                <ul className="review-list">
                                  <li>
                                    <div className="people-box">
                                      <div>
                                        <div className="people-image">
                                          <img src="../assets/images/review/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                                        </div>
                                      </div>
                                      <div className="people-comment">
                                        <a className="name" href="javascript:void(0)">Tracey</a>
                                        <div className="date-time">
                                          <h6 className="text-content">14 Jan, 2022 at
                                            12.58 AM</h6>
                                          <div className="product-rating">
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
                                          </div>
                                        </div>
                                        <div className="reply">
                                          <p>Icing cookie carrot cake chocolate cake
                                            sugar plum jelly-o danish. Dragée dragée
                                            shortbread tootsie roll croissant muffin
                                            cake I love gummi bears. Candy canes ice
                                            cream caramels tiramisu marshmallow cake
                                            shortbread candy canes cookie.<a href="javascript:void(0)">Reply</a>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="people-box">
                                      <div>
                                        <div className="people-image">
                                          <img src="../assets/images/review/2.jpg" className="img-fluid blur-up lazyload" alt="" />
                                        </div>
                                      </div>
                                      <div className="people-comment">
                                        <a className="name" href="javascript:void(0)">Olivia</a>
                                        <div className="date-time">
                                          <h6 className="text-content">01 May, 2022 at
                                            08.31 AM</h6>
                                          <div className="product-rating">
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
                                          </div>
                                        </div>
                                        <div className="reply">
                                          <p>Tootsie roll cake danish halvah powder
                                            Tootsie roll candy marshmallow cookie
                                            brownie apple pie pudding brownie
                                            chocolate bar. Jujubes gummi bears I
                                            love powder danish oat cake tart
                                            croissant.<a href="javascript:void(0)">Reply</a>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="people-box">
                                      <div>
                                        <div className="people-image">
                                          <img src="../assets/images/review/3.jpg" className="img-fluid blur-up lazyload" alt="" />
                                        </div>
                                      </div>
                                      <div className="people-comment">
                                        <a className="name" href="javascript:void(0)">Gabrielle</a>
                                        <div className="date-time">
                                          <h6 className="text-content">21 May, 2022 at
                                            05.52 PM</h6>
                                          <div className="product-rating">
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
                                          </div>
                                        </div>
                                        <div className="reply">
                                          <p>Biscuit chupa chups gummies powder I love
                                            sweet pudding jelly beans. Lemon drops
                                            marzipan apple pie gingerbread macaroon
                                            croissant cotton candy pastry wafer.
                                            Carrot cake halvah I love tart caramels
                                            pudding icing chocolate gummi bears.
                                            Gummi bears danish cotton candy muffin
                                            marzipan caramels awesome feel. <a href="javascript:void(0)">Reply</a>
                                          </p>
                                        </div>
                                      </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}



export default ProductDetail
