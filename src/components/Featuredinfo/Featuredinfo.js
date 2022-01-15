import "./featuredinfo.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Todays Collection</span>
        <div className="featuredMoneyContainer">
          <span  className="featuredIcon">Rs.5000.00</span>
         
        </div>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Today's Purchase</span> 
        <div className="featuredMoneyContainer">
        
          <span className="featuredpurchase">Rs.5000.00</span>
          <span className="featuredCartIcon">
         <ShoppingCartIcon fontSize="large" className="featuredCartIconred"/>
          </span>
          
        </div>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Today's Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredSales">Rs.5000.00</span>
          
        </div>
       
      </div>
    </div>
  );
}
