import { useState , useEffect} from 'react';
import React from 'react'
import axios from 'axios';
import Address from '../product-left-thumbnail/Address';
import Order from '../product-left-thumbnail/Order';
function Orderlist() {
    const [lists, setLists]=useState([]);
    const [data , setData]=useState();
    const [totalPrice, setTotalPrice] = useState('');
  
    useEffect(()=>{
      getHomeData1();
    },[]);
    const getHomeData1 = async () => {
      const userid=localStorage.getItem('_id')
      const options ={
           headers: {
               "content-type" : "application/json; charset=utf-8",
               "Access-Control-Allow-Origin" : '*'
           }
       }
          const data = JSON.stringify({
              "userId": userid,
              "summeryId":"645f3c04d402c2760631266d"
              });
                      await axios.post("https://admin.krazeal.com/krazeal/api/order_summery_list",data,options).then(res => {
           setLists(res.data.data);
           setTotalPrice(res.data.dinesh[0].total_price);

       }).catch(err =>{
           })
       }
  
    const calcPrice = (lists) => {
      return lists.reduce((accumulator, object) => {
        return Number(accumulator) + Number(object.productId.sale_price);
      }, 0);
    };
    return (
    <div className="col-lg-4">
    <div className="right-side-summery-box">
      <div className="summery-box-2">
       <div className="summery-header">
          <h3>Order Summery</h3>
        </div>
            <ul className="summery-contain">
        {lists.map((list) => {
                        return(
          <li>
            <img src={"http://103.104.74.215:3018/uploads/"+list.productId.images[0]} className="img-fluid blur-up lazyloaded checkout-image" alt="" />
              <h4> <span>{list.productId.product_name}</span></h4>
            <h4 className="price">₹{list.productId.sale_price}</h4>
          </li>
               )

              })
              }
         </ul>
        <ul className="summery-total">
          <li>
            <h4>Price</h4>
            <h4 className="price">₹111.81</h4>
          </li>
          <li>
            <h4>Delivery Charges</h4>
            <h4 className="price">₹8.90</h4>
          </li>
           <li className="list-total">
            <h4>Total Payable</h4>
            <h4 className="price">₹{totalPrice}</h4>
         </li>
        </ul>
      </div>
        <a href="/order-success">
        <button className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold">Place Order</button></a>
    </div>

  </div>
  )
}

export default Orderlist
