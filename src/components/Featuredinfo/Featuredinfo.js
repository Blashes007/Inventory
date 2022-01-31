import "./featuredinfo.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function FeaturedInfo() {
  return (
    <div className="featured">

      <div className="featuredItem1">
        <span className="featuredTitle">Todays Collection</span>
        <div className="featuredMoneyContainer">
          <span  className="featuredIcon">Rs.5000.00</span>
          <span className="featuredMoneytIcon">
          <img src="money.png" className="moneyimage"/>
          </span>
        </div>
        
      </div>
      
      <div className="featuredItem2">
        <span className="featuredTitle">Today's Purchase</span> 
        <div className="featuredMoneyContainer">
          <span className="featuredpurchase">Rs.5000.00</span>
          <span className="featuredCartIcon">
         <img  src="redimg.png" className="featuredCartIconred"/>
          </span>
        </div>
        
      </div>


      <div className="featuredItem3">
        <span className="featuredTitlesales">Today's Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredSales">Rs.5000.00</span>
          <span className="featuredMoneyIconblue">
          <img src="moneyblue.png" className="moneyimageblue"/>
          </span>
        </div>
      </div>
      
      <div className="featuredItem4">
        <span className="featuredTitle">New Customers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredTotal"> Total:1    </span>
          <span className="featuredusericon">
          <img src="users.png" className="userIcon"/>
          </span>
        </div>
      </div>

      {/* <div className="featuredItem4">
        <span className="featuredTitle">New Customer</span>
        <div className="featuredMoneyContainer">
          <span className="featuredTotal">Total: 1</span>
          <span className="featuredUserIcon">
          <img src="users.png" className="UserIcon"/>
          </span>
        </div>
      </div> */}

      
    </div>
  );
}
