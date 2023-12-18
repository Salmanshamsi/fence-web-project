import React from 'react'
import "./Purchase.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { cartItems } from '../../redux/slices/CartSlice';

const Purchase = () => {

  const totalPrice = useSelector((state)=>state.price.totalPrice)
  const imgSource = useSelector((state) => state.selecteddesigns.imgSource)
  const mailInRebat = useSelector((state)=>state.selecteddesigns.mainInRebate)
  const count = useSelector((state) => state.allCartData.value);
  const designID = useSelector((state) => state.captureDesign.DesignId);    

  // const mailInRebat = 120;

  console.log(mailInRebat)
    const navigate = useNavigate();
    const disptach = useDispatch();

    const addTOCart = () => {
      disptach(cartItems({
        type:"cartItems",
        payload:{img: imgSource , pr:totalPrice , qty:count}
      }))
       
      navigate("/cart")
    }

  return (
    <div>
       <div className="purchasecontainer">
        <div className="purchasebox">
            <p className='dId'>{`Design ID #: ${designID}`}</p>
          <div className="estimateddivmainbox">
          <div className="estimateddivone">
                <p>Estimated Price : </p>
                <p>	${count*totalPrice}.00</p>
            </div>
            <div className="estimateddivtwo">
                <p>Mail-In Rebate: </p>
                <p>${mailInRebat}.00</p>
            </div>
            <div className="estimateddivthree">
                <p>Final Price: </p>
                <p>${(mailInRebat-(count*totalPrice))}.00</p>
            </div>
            
          </div>
        </div>
       
       </div>
       <p className='todayeastimate'>*Today's estimated price, future pricing may go up or down. Tax, labor, and delivery not included.</p>
        <div className='cartBtn'>
            <button onClick={addTOCart}>Add to Cart</button>
        </div>

       <div className="centertextinfobox">
           <div className="innertextInf">
           <p>*Selecting this option will place your material selections in the Menards.com shopping cart. After completing your purchase, store invoices and special order contracts, if required, will be generated. Print out all items for your reference. You will receive emails on the status of any special orders as they ship and arrive at the store. Professional delivery is available and can be arranged by the Delivery Coordinator at your local Menards store or through Menards.com shopping cart. Delivery is extra and is calculated based on the order size.</p>
           </div>
        </div>
    </div>
  )
}

export default Purchase
