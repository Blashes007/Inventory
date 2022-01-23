import "./featuredinfo.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function FeaturedInfo() {
  return (
    <div className="featured">

      <div className="featuredItem">
        <span className="featuredTitle">Todays Collection</span>
        <div className="featuredMoneyContainer">
          <span  className="featuredIcon">Rs.5000.00</span>
          <span className="featuredMoneytIcon">
          <img src="money.png" className="moneyimage"/>
          </span>
        </div>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Today's Purchase</span> 
        <div className="featuredMoneyContainer">
        
          <span className="featuredpurchase">Rs.5000.00</span>
          <span className="featuredCartIcon">
         <img fontSize="large" src="redimg.png" className="featuredCartIconred"/>
          </span>
          
        </div>
        
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Today's Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredSales">Rs.5000.00</span>
          <span className="featuredMoneyIconblue">
          <img src="moneyblue.png" className="moneyimageblue"/>
          </span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">New Customers</span>
        <div className="newCustomer">
          <span className="Totalcustomer">Total: 1 </span>
          <span className="usersicon">
          <img src="users.png" className="userimage"/>
          </span>
        </div>
      </div>
      
    </div>
  );
}
