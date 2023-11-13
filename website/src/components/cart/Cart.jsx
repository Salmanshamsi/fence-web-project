import React from 'react'
import AccountHeader from '../accountheader/AccountHeader'
import AccountNav from '../accountnav/AccountNav'
import "./Cart.css"

const Cart = () => {
  return (
    <div>
        <AccountHeader/>
        <AccountNav/>
        <div className="twomaindivcontainet">
          <div className="twocartboxes">
            <div className="cartboxes">
               <div className="firstcbox">
                <h3 className='your-shopping-cart'>Your Shopping Cart </h3>
                <p className='choose-delivery'>Please verify and/or choose the delivery destination and shipping for each product before proceeding through the checkout.</p>
                <div className="afshopcontainer">
                <div className="afshop">
                  <div className="afshopinnerheader">
                    <p className='selections'>Your How to Get It Selections</p>
                   <div className="inerTxtinfoCon">
                   <div className="inertxtInfo">
                      <p className='pickupStore'>Pickup at Store</p>
                      <p className='porthorton'>1 item at PORT HURON</p>
                      <a href="#" className='changeStore'>Change Store</a>
                    </div>
                   </div>

                    <div className="productheaderc">
                      <div className="prodheader">
                        <p className='prod'>PRODCUT</p>
                        <p>How to Get It</p>
                        <p>Qty</p>
                        <p className='ttP'>Total Price</p>
                      </div>
                    </div>

                    <div className="mainCartProduct">
                      <div className="mainCe">
                        <div className="fInner">
                          <img src="https://cdn.menardc.com/main/store/20090519001/assets/images5/Fencing.png" alt="" />
                          <div className="finninner">
                            <p>Fence Design</p>
                            <p>Design ID: 330759812863</p>
                          </div>
                        </div>
                        <div className="secInner">
                           <div className="firstRadio"><input type="radio" name="" id="" />
                          <p>SelectPick Up At Store</p></div>
                          <div className="secondRadio">
                          <input type="radio" name="" id="" />
                          <p>Local Store Delivery</p>
                          </div>
                        </div>
                        <div className="ThiInner">
                          <input type="number" id='quantityInput'/>
                          <p>$1,111.20/each</p>
                        </div>
                        <div className="fouInner">
                          <p>$1,111.20</p>
                        </div>
                        {/* <div className="fivInner"></div> */}
                      </div>
                    </div>

                  </div>
                </div>
                </div>
               </div>
               <div className="secondcheckoutbox">
                <p className='orderSummary'>Order Summary</p>
                <div className="subtt">
                  <p className='subttOne'>Merchandise Subtotal:</p>
                  <p className='subttTwo'>$1,129.14</p>
                </div>
                <div className="processinfee">
                  <p className='processfeeone'>Processing Fees: </p>
                  <p className='processfeetwo'>$4.20</p>
                </div>

                <div className="pretax">
                  <p className='pretexOne'>Pretax Subtotal	</p>
                  <p className='preTexTwo'>$1,133.34</p>
                </div>

                <div className="purchasing">
                  <p>By purchasing today you save $124.19 with mail-in rebates! </p>
                </div>

                <div className="checkoutnowc">
                  <div className="checkoutbtn">
                    <button>CheckOut Now</button>
                  </div>
                </div>
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
