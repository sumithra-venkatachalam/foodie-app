import {useParams, useNavigate} from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import "./OrderPage.css";
import mockData from "../../utils/mockData.json";
import {useState} from "react";
import {useContext} from "react";
import UsernameContext from "../../context/UsernameContext";

function OrderPage() {

    const navigate = useNavigate();

    const {username} = useContext(UsernameContext);

    const [cartItems, setCartItems] = useState([])

    let {orderId} = useParams();

    const currentRestaurant = mockData.find(eachRestaurant => eachRestaurant.id === orderId);
    console.log(currentRestaurant)

    const menuItems = currentRestaurant.menu;
    console.log(menuItems)

    const addItem = (id) => {
       const val =  menuItems.find(y => y.id === id)
       console.log("hehe",val, menuItems,cartItems); 
       const eachCartItem = cartItems.find(x =>x.id === val.id) //Checking whether that menu item is already added in the cart item. If that menu item already added by using find method u get all those details else it will return undefined.
       if(!eachCartItem) {
            const val1 = {...val, quantity:1}
          console.log(val);
          setCartItems(prevValue => [...prevValue, val1]);
        //   setCartItems(val1)
       }
    }

    console.log("npp",cartItems)

    const eachListing = menuItems.map(x => (
        <div className="allArea" key={x.id}>
            <img className="orderMenuImage" src={x.image} alt="" />
                <p className="name" key={x.id}>{x.name}</p>
                <p className="desc" key={x.id}>{x.desc}</p>
                <p className="price" key={x.id}>₹ {x.price}</p>
                <button className="eachMenuAddButton" onClick={()=>addItem(x.id)}>Add</button>
        </div>
    )

    )
    
    const addQuantity = (id) => {
        const updatedList = cartItems.map(obj => {
            if(obj.id === id){
                if(obj.quantity)
                    return{...obj, quantity:obj.quantity+1}
                else
                return{...obj, quantity:1}
            }
            else 
                return obj;
        })
        setCartItems(updatedList)
        console.log("aa", updatedList)
    }

    const removeQuantity = (id) => {
        const updatedList = cartItems.map(obj => {
            if(obj.id === id){
                if(obj.quantity)
                    return{...obj, quantity:obj.quantity-1}
                else
                return{...obj, quantity:0}
            }
            else 
                return obj;
        })
        setCartItems(updatedList)
        console.log("aa", updatedList)
    }

    const removingItems = (id) => {
        const balanceItem = cartItems.filter(s => s.id !== id)
        setCartItems(balanceItem)
    }

    const cartListing = cartItems.map(x => (
        <div  className="allColumns" key={x.id}>
            <div className="firstColumn">
            <h2 title={x.name} className="selectedMenuTitle">{x.name}</h2>
            <p className="cartItemPrice">₹ {x.price}</p>
            </div>
            <div className="secondColumn">
            <button className="negativeButton" onClick={()=>removeQuantity(x.id)}>-</button>
            <p className="inbetweenButton">{x.quantity}</p>
            <button className="positiveButton" onClick= {()=>addQuantity(x.id)}>+</button>
            </div>
            <div className="thirdColumn">
            <p className="cartItemPrice">₹ {x.price * x.quantity}</p>
            <i onClick={()=>removingItems(x.id)} className="fa-solid fa-trash cartDeleteIcon"></i>
            </div>
        </div>
    ))

    console.log("jj",cartItems)     

    const subTotalAmount = cartItems?.reduce((amount, element) => amount + (element?.quantity * element?.price),0)
    console.log("total", subTotalAmount);

    const deliveryCharges = 45;
    const coupon = -90;

    const totalAmount = subTotalAmount + deliveryCharges + coupon
    
    const handleLogout = () => {
        navigate("/")
    }

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
            <div className="bothPage">
            <div className="orderPageRight">
                <div className="headerBelow">
                    <h1>Welcome to {currentRestaurant.name} : )</h1>
                    <p>{currentRestaurant.cuisines}</p>
                    <button>Order Now</button>
                </div>
                <div className="cardContainer">
                <h2 className="popularDish">Our Popular Dishes 🥗</h2>
                <div className="menuItems">
                {eachListing}
                </div>
                </div>

            </div>

            <div className="orderPageLeft">
                    <h1>Your Tray 👨‍🍳</h1>
                    <p>{cartListing}</p>
                    {
                        subTotalAmount > 0 ? (
                            <div>
                                <h1 className="subTotal">Sub Total : {subTotalAmount} </h1>
                                <p>Delivery Charges : {deliveryCharges}</p>
                                <p>Coupon(super) : {coupon}</p>
                                <h1>Grand Total : {totalAmount} </h1>
                            </div>
                        ) : <p className="cartEmptyMessage">Oops! Your cart is empty &#129402;</p>
                    }
                    
            </div>
            </div>        
        </div>
    )
}

export default OrderPage;