import Ordersummery from '../order-success/Ordersummery';
import { Link } from 'react-router-dom';
import CheckOut from '../checkout/CheckOut'
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import RemoveCard from './RemoveCard';
import Order from '../product-left-thumbnail/Order';
import Address from '../product-left-thumbnail/Address';

const Cart = () => {
  const [lists, setLists]=useState([]);
  const [counts, setCounts] = useState([1]);


  
  const _update = (text, index) => {
    const newCounts = [...counts];
    newCounts[index] = text;
    setCounts(newCounts);
    
  };

  const calcTotalPrice = () => {
    let totalPrice = 0;
    lists.forEach((list, index) => {
      totalPrice += list.productId.sale_price * counts[index];
    });
    return totalPrice;
  };




  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const userid = localStorage.getItem('_id');
    const productid = localStorage.getItem('pro_id');
  
    
    const options = {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
  
    
    const data = JSON.stringify({
      userId: userid,
      productId: productid,
    });
  
    try {
      const res = await axios.post('https://admin.krazeal.com/krazeal/api/cart_list', data, options);
      const initialCounts = res.data.data.map(() => 1); // Initialize counts with 1 for each product
      setLists(res.data.data);
      setCounts(initialCounts);
      console.log("resonse of data",data)
            console.log("resonse of data",res.data.data)
    } catch (err) {
      console.error(err);
    }
  };
  

  
  return (
    <>
      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-5 g-3">
            <div className="col-xxl-9">
              <div className="cart-table">
                {lists.map((list,  index)  => 

                
                (
                  <div className="table-responsive-xl" key={index}>
                    <table className="table">
                      <tbody>
                        <tr className="product-box-contain">
                          <td className="product-detail">
                            <div className="product border-0">
                              <a href="/product-left-thumbnail" className="product-image">
                                <img
                                  src={`http://103.104.74.215:3018/uploads/${list.productId.images[0]}`}
                                  className="img-fluid blur-up lazyloaded"
                                  alt=""
                                />
                              </a>
                              <div className="product-details">
                                <ul>
                                  <li className="name">
                                    
                                    <h4 className="table-title text-content">Price</h4>
                                    <a href="/product-left-thumbnail">{list.productId.product_name}</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                          <td className="price">
                            <h5>₹{list.productId.sale_price} <del className="text-content"></del></h5>
                            {/* <h6 className="theme-color">You Save : ₹{list.productId.discount_price} </h6> */}
                          </td>
                          <td className="quantity">
                            <h4 className="table-title text-content">Qty </h4>
                            
                            <div className="quantity-price">
                              <div className="cart_qty">
                                <div className="input-group">
                                <button onClick={() => _update(counts[index] > 1 ? counts[index] - 1 : 1, index)}>-</button>
        {counts[index]}
        <button onClick={() => _update(counts[index] + 1, index)}>+</button>
      
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="subtotal">
                            <h4 className="table-title text-content">Total</h4>
                            <h5>₹{list.productId.sale_price * counts[index]}</h5>
                          </td>
                          <td className="save-remove">
                            <h4 className="table-title text-content">Action
</h4>




                          <a  className="remove close_button" onClick={(()=>localStorage.setItem("cartId",list._id))}><RemoveCard/></a>
                          
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                )
)}
              </div>
            </div>
            <div className="col-xxl-3">
              <div className="summery-box p-sticky">
                <div className="summery-header">
                  <h3>Cart Total</h3>
                </div>
                <div className="summery-contain">
                  <div className="coupon-cart">
                    <h6 className="text-content mb-2">Coupon Apply</h6>
                    <div className="mb-3 coupon-box input-group">
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Coupon Code Here..." />
                      <button className="btn-apply">Apply</button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <h4>Price</h4>
                      <h4 className="price">₹{calcTotalPrice()}</h4>
                    </li>
                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price">(-) 0.00</h4>
                    </li>
                    <li className="align-items-start">
                      <h4>Delivery Charges</h4>
                      <h4 className="price text-end">₹100</h4>
                    </li>
                  </ul>
                </div>
                <ul className="summery-total">
                  <li className="list-total border-top-0">
                    <h4>Total </h4>
                    <h4 className="price theme-color">₹{calcTotalPrice()}</h4>
                  </li>
                </ul>
                <div className="button-group cart-button">
                  <ul>
                   
<li>
<button  className="btn btn-animation proceed-btn fw-bold" to="/checkout" 
                         onClick={(()=>localStorage.setItem("cartId" , lists._id))}> 
                        <Ordersummery price={calcTotalPrice()}/>
                        
                        
                        
                        
                                                     </button>
 </li>


                    <li>
                      <button onclick="location.href = '/';" className="btn btn-light shopping-button text-dark">
                        <i className="fa fa-arrow-left-long" /><a href='/'>Return To Shopping</a></button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Cart
