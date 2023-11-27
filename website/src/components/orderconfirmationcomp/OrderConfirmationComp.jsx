import React, { useState } from "react";
import "./OrderConfirmationComp.css";
import { useSelector } from "react-redux";

const OrderConfirmationComp = () => {
  const [activeColumn, setActiveColumn] = useState("pickup");
  const TotalPrice = useSelector((state)=>state.price.totalPrice)   
  const storeN = useSelector((state) => state.selecteddesigns.storeName);
  const storeA = useSelector((state) => state.selecteddesigns.storeAdress);
  const storeD = useSelector((state) => state.selecteddesigns.storeDistance);
  const storeP = useSelector((state) => state.selecteddesigns.storePhone);
  const cP = useSelector((state) => state.allCartData.cartData);
  const fname = useSelector((state) => state.billinginfo.fname)
  const lname = useSelector((state) => state.billinginfo.lname)
  const businessName = useSelector((state) => state.billinginfo.businessName)
  const adresslineOne = useSelector((state) => state.billinginfo.adresslineOne)
  const adresslineTwo = useSelector((state) => state.billinginfo.adresslineTwo)
  const zipCode = useSelector((state) => state.billinginfo.zipCode)
  const city = useSelector((state) => state.billinginfo.city)
  const country = useSelector((state) => state.billinginfo.country)
  const sState = useSelector((state) => state.billinginfo.sState)
  const Bphone = useSelector((state) => state.billinginfo.Bphone)

  const handleColumnClick = (column) => {
    setActiveColumn(column);
  };

  const mailInRebat = useSelector(
    (state) => state.selecteddesigns.mainInRebate
  );
  const processingFee = 4;
  const saveRs = 124.0;
  const count = useSelector((state) => state.allCartData.value);

  let cartTPrice = 50;

  const name = "ITEMNAME";

  const goToStripe = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              quantity: count,
              price: TotalPrice,
              name: name,
            },
          ],
        }),
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      // Assuming the server response is a URL
      const data = await res.json();
      window.location = data.url;
   
    } catch (err) {
      console.error("Error during fetch:", err);
    }
  };
  
  

  return (
    <>
      <div className="order-confirm-top-image">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.N3-_hRk0071NKuApnZH4oAHaBl&pid=Api&P=0&h=220"
          alt=""
        />
      </div>
      <div className="headerOf-order-confirmation">
        <div className="headerOf-order">
          <div className="firtspickup">
            <h2 style={{ color: "#fff", fontWeight: "bold" }}>PICKUP</h2>
          </div>
          <div className="secondpaynment">
            <h2 style={{ color: "#fff", fontWeight: "bold" }}>
              PAYMENT & REVIEW
            </h2>
          </div>
          <div className="thirdorderconfirmation">
            <h2 style={{ color: "#fff", fontWeight: "bold" }}>
              ORDER CONFIRMATION
            </h2>
          </div>
        </div>
      </div>

      <div className="centerOfFullHeightComp">
        <div className="full-height">
          {activeColumn === "pickup" && (
            <div className="confirmation-column pickup">
              <div className="pickup-twoinnerdivs-container">
                <div className="pickup-first-inner-div">
                  <div className="firstpickupheader">
                    <h2>Pickup At Store</h2>
                  </div>
                  <div className="mainof-content-pickup">
                    <div className="content-of-first-pickup">
                      <b>Store Location</b>
                      <p>Name : {storeN}</p>
                      <p>Adress : {storeA}</p>
                      <p>Distance : {storeD}</p>
                      <p>Phone : {storeP}</p>
                    </div>
                    <div className="content-of-second-pickup">
                      <h3>Pick Up At Store - Customer Picks</h3>
                      <div className="content-ofinner">
                        {cP.map((ele) => {
                          return (
                            <>
                              <img
                                src={ele.payload.img}
                                style={{height:"70px"}}
                                alt=""
                              />
                            </>
                          );
                        })}

                        <div className="content-of-inner-of-inner">
                          <p>Fence Design</p>
                          <p>Design ID: 330759812863</p>
                          <p>QTY: {count}</p>
                        </div>
                      </div>
                      <hr />
             
                    </div>
                  </div>
                </div>
                <div className="pickup-second-inner-div">


                {cP.length > 0 && (
                <>
              <div className="pickup-second-order-summary">
                  <p className="orderSummary" style={{ marginTop: "1rem" }}>Order Summary</p>
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
                  <div className="backandContinueBtns">
                      <button id="bBTN">Back</button>
                      <button
                        id="CBtn"
                        onClick={() => handleColumnClick("payment")}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </>
              )}
                  </div>
                </div>
              </div>
          )}






          {activeColumn === "payment" && (
            <div className="confirmation-column pickup">
              <div className="pickup-twoinnerdivs-container">
                <div className="pickup-first-inner-div">
                  <div className="firstpickupheader">
                    <h2>Billing & Credit Card Information</h2>
                  </div>
                  <div className="mainof-content-pickup">
                    <div className="content-of-first-pickup">
                      <b>Billing Information</b>
                      <p>Name : {fname + " " + lname}</p>
                      <p>Business Name{businessName}</p>
                      <p>Adress : {adresslineOne}</p>
                      <p>{adresslineTwo}</p>
                      <p>Zip Code : {zipCode}</p>
                      <p>City : {city}</p>
                      <p>Country : {country}</p>
                      <p>State : {sState}</p>
                      <p>Phone : {Bphone}</p>
                    </div>
                    <div className="content-of-second-paynment">
                      <h3>Credit Card Information</h3>
                      <label htmlFor="" className="name-of-card">
                        Name Of Card
                      </label>
                      <br />
                      <input type="text" className="name-of-card-input" />
                      <div className="content-ofinner">
                        <div className="cardnumberandType">
                          <label htmlFor="" className="card-num">
                            Card Number
                          </label>
                          <br />
                          <input type="number" className="card-num-input" />

                          <select name="creditcard" id="creditcard">
                            <option value="Plz Select a Credit Card">
                              Plz Select a Credit Card
                            </option>
                            <option value="Visa">Visa</option>
                            <option value="Master Card">Master Card</option>
                          </select>
                        </div>
                      </div>

                      <div className="expiryCardandsecuritycodec">
                        <div className="expDate-container">
                          <div className="expD">
                            <label htmlFor="" className="expDateLabel">
                              Exp. Date *
                            </label>
                            <select name="expDate" id="expDate">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                            </select>
                          </div>
                          <div className="slash">
                            <p>/</p>
                          </div>
                          <div className="sc-c">
                            <select name="expYear" id="expYear">
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                              <option value="2025">2025</option>
                              <option value="2026">2026</option>
                              <option value="2027">2027</option>
                              <option value="2028">2028</option>
                              <option value="2029">2029</option>
                              <option value="2030">2030</option>
                              <option value="2031">2031</option>
                              <option value="2032">2032</option>
                              <option value="2033">2033</option>
                              <option value="2034">2034</option>
                              <option value="2035">2035</option>
                              <option value="2036">2036</option>
                              <option value="2037">2037</option>
                            </select>
                          </div>
                        </div>

                        <div className="securitycode-container">
                          <label htmlFor="">Security Code *</label>
                          <br />
                          <div className="security-inputandbtn">
                            <input type="number" />
                            <button>SHOW</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pickup-second-inner-div">
                  <div className="pickup-second-order-summary">
                  {cP.length > 0 && (
                <>
              <div className="pickup-second-order-summary">
                  <p className="orderSummary" style={{ marginTop: "1rem" }}>Order Summary</p>
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
                  <div className="backandContinueBtns">
                      <button id="bBTN">Back</button>
                      <button
                        id="CBtn"
                        onClick={goToStripe}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </>
              )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeColumn === "confirmation" && (
            <div className="confirmation-column confirmation">
              <h2>Order Placed Successfully</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderConfirmationComp;
