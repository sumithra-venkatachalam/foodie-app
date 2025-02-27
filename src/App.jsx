import Login from "./containers/login/Login";
import RestaurantListing from "./containers/restaurant_listing/RestaurantListing";
import Signup from "./containers/signup/Signup";
import OrderPage from "./containers/order_page/OrderPage";
import UsernameProvider from "./context/UsernameProvider";
import "./App.css"
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <UsernameProvider>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/restaurant-listing" element={<RestaurantListing/>} />
      <Route path="/order-page/:orderId" element={<OrderPage/>}/>
    </Routes>
    </HashRouter>
    </UsernameProvider>
    
  )
}

export default App;
