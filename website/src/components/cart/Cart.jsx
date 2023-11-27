import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../redux/slices/CartSlice";
import AccountHeader from "../accountheader/AccountHeader";
import AccountNav from "../accountnav/AccountNav";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const imgeValue = useSelector((state) => state.selecteddesigns.imgSource);
  const totalPrice = useSelector((state) => state.price.totalPrice);
  const mailInRebat = useSelector(
    (state) => state.selecteddesigns.mainInRebate
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cP = useSelector((state) => state.allCartData.cartData);
  const count = useSelector((state) => state.allCartData.value);
  const TotalPrice = useSelector((state)=>state.price.totalPrice);
  const ttPRICE = [];

  cP.forEach((ele) => {
    ttPRICE.push(ele.payload.pr);
  });

  const processingFee = 4;
  const saveRs = 124.0;

  const cartTPrice = ttPRICE.reduce((accum, curVal) => {
    return accum + curVal;
  });


  const checkOut = () => {
    navigate("/checkout");
  }

  return (
    <div>
      <AccountHeader />
      <AccountNav />
      <div className="twomaindivcontainet">
        <div className="twocartboxes">
          <div className="cartboxes">
            <div className="firstcbox">
              <h3 className="your-shopping-cart">Your Shopping Cart</h3>
              <p className="choose-delivery">
                Please verify and/or choose the delivery destination and
                shipping for each product before proceeding through the
                checkout.
              </p>
              <div className="afshopcontainer">
                <div className="afshop">
                  {cP.length === 0? (
                    <h3>Your Cart Is Empty</h3>
                  ) : (
                    <div className="afshopinnerheader">
                      <p className="selections">
                        Your How to Get It Selections
                      </p>
                      <div className="inerTxtinfoCon">
                        <div className="inertxtInfo">
                          <p className="pickupStore">Pickup at Store</p>
                          <p className="porthorton">1 item at PORT HURON</p>
                          <a href="#" className="changeStore">
                            Change Store
                          </a>
                        </div>
                      </div>

                      <div className="productheaderc">
                        <div className="prodheader">
                          <p className="prod">PRODCUT</p>
                          <p>How to Get It</p>
                          <p>Qty</p>
                          <p className="ttP">Total Price</p>
                        </div>
                      </div>
                      {cP.map((ele, index) => (
                        <div className="mainCartProduct" key={index}>
                          <div className="mainCe">
                            <div className="fInner">
                              <img src={ele.payload.img} alt="" />
                              <div className="finninner">
                                <p>Fence Design</p>
                                <p>Design ID: 330759812863</p>
                              </div>
                            </div>
                            <div className="secInner">
                              <div className="firstRadio">
                                <input type="radio" name="" id="" />
                                <p>SelectPick Up At Store</p>
                              </div>
                              <div className="secondRadio">
                                <input type="radio" name="" id="" />
                                <p>Local Store Delivery</p>
                              </div>
                            </div>
                            <div className="ThiInner">
                              <input type="number" id="quantityInput" value={ele.payload.qty} disabled />
                              <p>${ele.payload.qty > 0 ? ele.payload.qty*ele.payload.pr : ele.payload.pr}.00/each</p>
                            </div>
                            <div className="fouInner">
                              <p>${ele.payload.qty > 0 ? ele.payload.qty*ele.payload.pr : ele.payload.pr}.00</p>
                            </div>
                            <div className="fivInner">
                              <div className="removeProductBtn">
                                <button
                                  onClick={() =>
                                    dispatch(removeCartItem(index))
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="secondcheckoutbox">
              {cP.length > 0 && (
                <>
                  <p className="orderSummary">Order Summary</p>
                  <div className="subtt">
                    <p className="subttOne">Merchandise Subtotal:</p>
                    <p className="subttTwo">${TotalPrice*count}.00</p>
                  </div>
                  <div className="processinfee">
                    <p className="processfeeone">Processing Fees: </p>
                    <p className="processfeetwo">${processingFee}.00</p>
                  </div>
                  <div className="pretax">
                    <p className="pretexOne">Pretax Subtotal </p>
                    <p className="preTexTwo">
                      ${TotalPrice*count + mailInRebat + processingFee}.00
                    </p>
                  </div>
                  <div className="purchasing">
                    <p>
                      By purchasing today you save ${saveRs}.00 with mail-in
                      rebates!{" "}
                    </p>
                  </div>
                  <div className="checkoutnowc">
                    <div className="checkoutbtn">
                      <button onClick={checkOut}>CheckOut Now</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
