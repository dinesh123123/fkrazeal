import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState  , useEffect} from 'react';

function AddToCart(props) {
  const [lists, setLists]=useState();
     const [data , setData]=useState();
  
    
     
     const getHomeData = async () => {

      const productid=localStorage.getItem('pro_id')
      const userid=localStorage.getItem('_id')
      const counters=props.count
      const prices=props.price
  
      
           const options ={
           headers: {
               "content-type" : "application/json; charset=utf-8",
               "Access-Control-Allow-Origin" : '*'
           }
       }
          const data = JSON.stringify({
             "productId" :productid,
             "userId": userid,
             "gst": "99",
             "delevery_charge":"102",
             "total_price": prices,
            "color": "redd",
             "size": "full",
             "qty": counters,
               
  
  
   });
  
          await axios.post("https://admin.krazeal.com/krazeal/api/add_cart",data,options).then(res => {
            setLists(res.data.data);

            //console.log("response of code",res.data.data)
       }).catch(err =>{
           })
       }
  return (
    <div>
      <button
        className="primary__btn quickview__cart--btn"
        type="submit"
        onClick={getHomeData}
      >
        <Link to="/cart" class="btn btn-md bg-danger cart-button text-white w-90">Add to Cart</Link>
      </button>
    </div>
  );
}

export default AddToCart;