import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Orderlist from './Orderlist';

function Ordersummery(props) {
  const [lists, setLists] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const userid = localStorage.getItem('_id');
    const cartid = localStorage.getItem('cartId');
    console.log("userid checking", userid);
    console.log("cartid checking", cartid);
    const amount = props.price;
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": '*'
      }
    };
    

    const orderSummaryData = JSON.stringify({
      "userId": userid,
      "cartId": "645dc9f434ef50e9cede9083",
      "total_price": amount
    });

    const updateTotalAmountData = JSON.stringify({
      "userId": userid,
      "cartId": cartid,
      "total_price": amount
    });

    try {

      const orderSummaryResponse = await axios.post("https://admin.krazeal.com/krazeal/api/order_summery", orderSummaryData, options);
      setLists(orderSummaryResponse.data.data);
      //console.log("list of summery",orderSummaryResponse.data.data)


      const updateTotalAmountResponse = await axios.post("https://admin.krazeal.com/krazeal/api/update_order_summery", updateTotalAmountData, options);
      setData(updateTotalAmountResponse.data);
      //console.log("list of updated",orderSummaryResponse.data.data)

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
        className="btn btn-animation proceed-btn fw-bold"
        type="submit"
        onClick={getHomeData}
      >
        <Link to="/check-out">Check Out</Link>
      </button>
    </div>
  );
}

export default Ordersummery;
