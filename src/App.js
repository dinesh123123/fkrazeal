import Otp from './component/validation/Otp'
import React from "react-dom";
import {Routes, BrowserRouter,Route} from 'react-router-dom';
import Header from './component/common/Header';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import Home from './component/home/Home';
import ShopTop from './component/shop-top/ShopTop';
import Compare from './component/compare/Compare';
import Cart from './component/carts/Cart';
import ProductLeftThumbnail from './component/product-left-thumbnail/ProductLeftThumbnail';
import CheckOut from './component/checkout/CheckOut';
import OrderSuccess from './component/order-success/OrderSuccess';
import OrderTracking from './order-tracking/OrderTracking';
import User from './component/user/User';
import Login from './component/validation/Login';
import Register from './component/validation/Register';
import ForgotPassword from './component/validation/ForgotPassword';
import Wishlist from './component/wishlist/Wishlist';
import Contact from './component/contact/Contact';
import ShopLeftSidebar from './component/shop-left-sidebar/ShopLeftSidebar';
import About from './component/about/About';
import Footer2 from './component/common/Footer2';
import Blog from './component/blog/Blog';
import Faq from './component/faq/Faq';
import Search from './component/search/Search';
import ReturnPolicy from './component/return-policy/ReturnPolicy';
import TermOfUse from './component/term-of-use/TermOfUse';
import BlogDetails from './component/blog/BlogDetails';
import ShopTopFilter from './component/shop-top/ShopTopFilter';
import UpdateUser from "./component/user/UpdateUser";
import Addaddress from "./component/product-left-thumbnail/Addaddress";
import Order from "./component/product-left-thumbnail/Order";
import Placeorder from "./component/order-success/Placeorder";

// import Header2 from './component/common/Header2';

function App() {
 
return (
        <>
        
        <BrowserRouter> 
        
        <Header/>
    
      <Routes>

      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/shop-top' element={<ShopTop/>}/>
      <Route exact path='/compare' element={<Compare/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/check-out' element={<CheckOut/>}/>
      <Route exact path='/product-left-thumbnail' element={<ProductLeftThumbnail/>}/>
      <Route exact path='/order-success' element={<OrderSuccess/>}/>
      <Route exact path='/order-tracking' element={<OrderTracking/>}/>
      <Route exact path='/user' element={<User/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/forgot' element={<ForgotPassword/>}/>
      <Route exact path='/wishlist' element={<Wishlist/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/shop-left-sidebar' element={<ShopLeftSidebar/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/blog-details' element={<BlogDetails/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/search' element={<Search/>}/>
      <Route exact path='/faq' element={<Faq/>}/>
      <Route exact path='/return-policy' element={<ReturnPolicy/>}/>
      <Route exact path='/term-of-use' element={<TermOfUse/>}/>
      <Route exact path='/shop-top-filter' element={<ShopTopFilter/>}/>
      <Route exact path='/update-user' element={<UpdateUser/>}/>
      <Route exact path="/addaddress" element={<Addaddress/>}></Route>
      <Route exact path="/order" element={<Order/>}></Route>
      <Route exact path='/placeorder' element={<Placeorder/>}></Route>
      <Route exact path="/otp" element={<Otp/>}></Route>

      </Routes>   
      <Footer2/>
      </BrowserRouter> 
    </>
  );
}

export default App;
