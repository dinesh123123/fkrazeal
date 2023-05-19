
import { useState, useEffect } from 'react';
import axios from 'axios';
function OlwCarousel() {
    const [index, setIndex] = useState(0);
    const [data , setData]= useState([]);
useEffect(() => {
const intervalId = setInterval(() => {

    setIndex(prevIndex => (prevIndex + 1) % data.length);

}, 3000);
return () => clearInterval(intervalId);
});
   useEffect(()=>{
        getHomeData();
      },[]);
      const getHomeData = async () => {
        const options ={
            headers: {
                "content-type" : "application/json; charset=utf-8",
                "Access-Control-Allow-Origin" : '*'
            }
        }
           const data = JSON.stringify({
              });
    
            await axios.get("https://admin.krazeal.com/krazeal/api/banner_list",data,options).then(res => {
            setData(res.data.data);
            localStorage.setItem("token", res.data.token);
        // console.log("response",res.data.data);
        }).catch(err =>{
            },[])
        }
return (
    <div className='container-fluid' >
        


                            
{data.length>0 ?<img class="product-image swiper-slide swiper-slide-visible swiper-slide-active" src={"http://103.104.74.215:3018/uploads/"+data[index].image} alt='sliderimage' /> :null} 
                        {/* })
                        } */}
</div>
);
}
export default OlwCarousel