import "./RestaurantListing.css";
import Logo from "../../assets/logo.jpg";
import MockData from "../../utils/mockData.json";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import usernameContext from "../../context/UsernameContext";


function RestaurantListing() {

    const {username} = useContext(usernameContext);

    const navigate = useNavigate();  

    const handleLogout = () => {
        navigate("/")
    }

    const goToOrder = (id) => {
        navigate(`/order-page/${id}`) 
    }

    console.log(MockData) 

    const datas = MockData.map(x => (
        <div className="allItems" key={x.id}> 
            <img onClick={ () => goToOrder(x.id)} className="images"src={x.feature_image}/>
            <div>
            <p className="address">{x.address}</p>
            <p className="cuisines" >{x.cuisines}</p>
            <p className="ratings" >{x.rating} ⭐</p>
            <p className="reviews" >{x.reviews} reviews</p>
            </div>
             
         </div>  
        ));
        console.log("enter",datas)

    return( 
        <div>
            <div className="headerTop">
                <div className="header">
                    <img src={Logo} alt="Header Logo" />
                </div >
                <div className="rightHeader">
                    <h1 className="headerText">Hey, {username}!</h1>
                    <h1 className="rightEnd" onClick={handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i></h1>
                    
                </div>
            </div>
            <div className="content">
                {datas}
            </div>
        </div>
       
    )
}
export default RestaurantListing;