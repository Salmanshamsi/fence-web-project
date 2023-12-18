import React, { useState } from "react";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux"
import { setIsLoading } from "../../redux/slices/loading";

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

  const dispatch = useDispatch()

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

  const Data = {
    items: [
      {
        quantity: count,
        price: TotalPrice,
        name: name,
      },
    ],
  }


const continueToPayment = (Data) => {

  dispatch(setIsLoading(true))
  try{
        create_Design(Data).then((resp)=>{
            console.log("response from payment Data in DB :", resp)
            if(false){
                // const data = await res.json();
                // window.location = data.url;
                // dispatch(setIsLoading(false))
            }
        }).catch((err)=>{
            console.log("Error from payment Data in DB :", err)
        })

        dispatch(setIsLoading(true))

    }catch(err){
      
      throw new err

      dispatch(setIsLoading(true))

    }
}
  
  return (
    <>
    <div className="w-full h-16 bg-cover bg-center">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.N3-_hRk0071NKuApnZH4oAHaBl&pid=Api&P=0&h=220"
          alt=""
        />
    </div>
    <div className="flex items-center justify-center p-5" >
        <div className="border h-full w-full bg-slate-100" >
          <div className="w-full h-14 bg-green-500">
            <h1 className="w-full text-2xl  text-white h-full flex items-center justify-center" >order confirmation</h1>
          </div>
        <div className="h-full w-full p-5 flex flex-col md:flex-row gap-4">
          <div className="border rounded-md bg-white h-full p-5 w-full" >
            <div className="w-full h-10 bg-blue-500 rounded-md text-sm flex items-center justify-center text-white" >
                Billing and card information
            </div>
            <div className="w-full p-3 text-lg font-bold" >
              Billing Information
            </div>
            <ul>
              <li>Name : {fname + lname}</li>
              <li>Buiesness : {businessName}</li>
              <li>Address : {adresslineOne + adresslineTwo}</li>
              <li>Zip Code : {zipCode}</li>
              <li>City: {city}</li>
              <li>Country : {country}</li>
              <li>State : {sState}</li>
              <li>Phone : {Bphone}</li>
            </ul>
          </div>
          <div className="border rounded-md bg-white h-full p-5 w-full" >
          <div className="w-full p-3 text-lg font-bold" >
              Order Summary
            </div>
            <ul>
              <li>Name : {fname + lname}</li>
              <li>Buiesness : {businessName}</li>
              <li>Address : {adresslineOne + adresslineTwo}</li>
            </ul>
            <h2 className="font-bold mt-5" >by purchasing today save $124.00 with mail in rebates!</h2>
            <div className="flex justify-center items-center gap-4 w-full h-12 mt-10" >
                  <button className="w-full bg-gray-100 h-full rounded-full" >Back</button>
                  <button className="w-full bg-blue-500 text-white h-full rounded-full" onClick={goToStripe}>Continue</button>
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default OrderConfirmationComp;
