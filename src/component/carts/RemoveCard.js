import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState  , useEffect} from 'react';

function RemoveCard() {
  const [lists, setLists]=useState([]);
  const [data , setData]=useState();



  




  useEffect(()=>{
    getHomeData();
  },[]);
      const getHomeData = async () => {
      const userid=localStorage.getItem('cartId')
     
      const options ={
         headers: {
             "content-type" : "application/json; charset=utf-8",
             "Access-Control-Allow-Origin" : '*'
         }
     }
        const data = JSON.stringify({
                "cartId": userid,
              });


         await axios.post("https://admin.krazeal.com/krazeal/api/cart_remove",data,options).then(res => {
         setLists(res.data.data);
     }).catch(err =>{
         })
     }


  return (
    <>
      <Link to='/cart' className="remove close_button"  onClick={getHomeData}>Remove</Link> 
    </>
  )
}

export default RemoveCard
