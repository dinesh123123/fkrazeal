import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import React,{ useState, useEffect }  from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Product = () => {
  const [loader, setLoading] =useState(false);
  const [lists, setLists]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getHomeData();
  },[]);

  const getHomeData = async () => {
    setLoading(true);
    const options ={
        headers: {
            "content-type" : "application/json; charset=utf-8",
            "Access-Control-Allow-Origin" : '*'
        }
    }
       const data = JSON.stringify({
          });
    await axios.get(`https://admin.krazeal.com/krazeal/api/product_list`,data,options).then(res => {
        if(res.data.result!="false"){
      localStorage.setItem("token", res.data.token);
        setLoading(false)
            setLists(res.data.data);
       } else{
        setLoading(false)
       }
    }).catch(err =>{
        setLoading(false)
    })
    
  }

  return (
    <>
     <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex-2">
            <div className="title">
              <h2>FRUIT &amp; VEGETABLES</h2>
              <span className="title-leaf">
                <svg className="icon-width">
                  <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                </svg>
              </span>
              <p style={{marginTop: '-7px'}}>A virtual assistant collects the products from your list</p>
            </div>
          </div>
          <div className="tab-content" id="myTabContent" style={{marginTop: '-40px'}}>
            <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
              <div className="row g-8">
           {
              lists.map((item) => {
               
               return(

             
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" onClick={(()=>localStorage.setItem("pro_id",item._id ,"item.name",item.name))}  key={item.id} style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                  <div className="product-box-4 ">
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
                      <Link to="/product-left-thumbnail">
                        <h5 className="name">{item.product_name}</h5>
                      </Link>
                      <h5 className="price ">₹{item.sale_price}<del>₹{item.price}</del>
                      <p className="offers ">{item.discount_percantage}% Off</p> </h5>
                    </div>
                  </div>
                </div>
                )
              })
            }
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
