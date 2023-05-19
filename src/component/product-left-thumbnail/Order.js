import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Order(props) {
  const [lists, setLists] = useState();
  const [data, setData] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [price , setPrice] = useState();

  useEffect(() => {
    getHomeData1();
  }, []);

  const getHomeData1 = async () => {
    const userid = localStorage.getItem('_id');
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      }
    };
    const data = JSON.stringify({
      "userId": userid,
      "summeryId": "645f3c04d402c2760631266d"
    });
    try {
      const response = await axios.post("http://103.104.74.215:3018/krazeal/api/order_summery_list", data, options);
      setLists(response.data.data);
      setTotalPrice(response.data.dinesh[0].total_price);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setPrice(props.price);
  }, [props.price]);

  const getHomeData = async () => {
    const userid = localStorage.getItem('_id');
    const orderId = localStorage.getItem("shipping");
    console.log('orderId:', orderId);

    const options = {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    };

    const data = {
      "userId": userid,
      "shippingAddressId": orderId,
      "total_price": totalPrice
    };

    try {
      const response = await axios.post('https://admin.krazeal.com/krazeal/api/order', data, options);
      console.log('response data:', response.data); // Log the entire response data
      setLists(response.data.data);
      
    } catch (err) {
      console.error(err);
    }
  };

  // Retrieve orderId from localStorage
  const orderId = localStorage.getItem("shipping");
  console.log('orderId:', orderId);

  return (
    <div className="form-check">
     <input
  onClick={() => props.onClick && props.onClick()}
  className="form-check-input"
  type="radio"
  name="jack"
  id="flexRadioDefault1"
/>
    </div>
  );
}

export default Order;
