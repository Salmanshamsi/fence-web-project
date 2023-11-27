import React, {useState} from 'react'
import "./CheckOutComponentBillingAdr.css"
import HelpCenter from '../helpcenter/HelpCenter';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AdressLineOne, AdressLineTwo, BPhone, BusinessName, City, Country, FirstName, LastName, ZipCode, sState } from '../../redux/slices/BillingInfoSlice';

const CheckOutComponentBillingAdr = () => {

  const cP = useSelector((state) => state.allCartData.cartData);
  const count = useSelector((state) => state.allCartData.value);
  const ttPRICE = [];

  cP.forEach((ele) => {
    ttPRICE.push(ele.payload.pr);
  });

  const processingFee = 4;
  const saveRs = 124.0;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    addressLine1: '',
    addressLine2: '',
    zipCode: '',
    city: '',
    state: '',
    country: '',
    phoneNumber: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateZipCode = (zipCode) => {
    const zipCodeRegex = /^\d{5}$/; // Assuming a 5-digit zip code format, you can adjust as needed
    return zipCodeRegex.test(zipCode);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number format, you can adjust as needed
    return phoneRegex.test(phoneNumber);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['firstName', 'lastName', 'addressLine1', 'zipCode', 'city', 'country', 'state', 'phoneNumber'];
    const isFormValid = requiredFields.every((field) => formData[field].trim() !== '');
    if (!isFormValid) {
      setError('*Required Fields*');
    } else if (!validateZipCode(formData.zipCode)) {
      setError('*Enter Valid Zip Code*');
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      setError('*Enter Valid Phone Number*');
    } else {
      setError('');
      navigate("/orderconfirmation")
      dispatch(FirstName(formData.firstName))
      dispatch(LastName(formData.lastName))
      dispatch(BusinessName(formData.businessName))
      dispatch(AdressLineOne(formData.addressLine1))
      dispatch(AdressLineTwo(formData.addressLine2))
      dispatch(ZipCode(formData.zipCode))
      dispatch(City(formData.city))
      dispatch(Country(formData.country))
      dispatch(sState(formData.state))
      dispatch(BPhone(formData.phoneNumber))
    }
  };

  return (
    <>
      <div className="checkout-header-container">
        <div className="chekouthader">
          <img src="https://tse1.mm.bing.net/th?id=OIP.N3-_hRk0071NKuApnZH4oAHaBl&pid=Api&P=0&h=220" alt="" />
          <h2>Billling Adress</h2>
        </div>
      </div>
      <div className="billing-adress-required-fields">
      {error && <div className="error-message">{error}</div>}
      </div>
    


      <form className="custom-form">
      <div className="form-row">
        <div className="half-width">
          <label className='alllabels' htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className='alInputsandSelectBx'
            autoComplete='off'
          />
        </div>
        <div className="half-width">
          <label  className='alllabels'htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className='alInputsandSelectBx'
            autoComplete='off'
          />
        </div>
      </div>

      <div className="form-row">
        <div className="full-width">
          <label className='alllabels' htmlFor="businessName">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className='alInputsandSelectBx'
            autoComplete='off'
          />
        </div>
      </div>

      <div className="form-row">
        <div className="half-width">
          <label className='alllabels' htmlFor="addressLine1">Address Line 1</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            className='alInputsandSelectBx'
            autoComplete='off'
          />
        </div>
        <div className="half-width">
          <label className='alllabels' htmlFor="addressLine2">Address Line 2</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            className='alInputsandSelectBx'
            autoComplete='off'
          />
        </div>
      </div>

      <div className="form-row">
        <div className="half-width">
          <label className='alllabels' htmlFor="zipCode">Zip/Postal Code</label>
          <input
            type="number"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className='alInputsandSelectBx'
            autoComplete='off'
          />
        </div>
        <div className="half-width">
          <label className='alllabels' htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className='alInputsandSelectBx'
            autoComplete='off'
          />
             
        </div>
        <div className="half-width">
          <label className='alllabels' htmlFor="country">Select a Country</label>
          {/* Replace the options with your own country options */}
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className='selectBx'
            autoComplete='off'
          >
            <option value="">Select Country</option>
            <option value="US">US</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

    

      <div className="form-row">
          <div className="half-width">
            <label className="alllabels" htmlFor="state">
              Select a State
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="selectBx"
              autoComplete='off'
            >
              <option value="">Select State</option>
              <option value="Texas">Texas</option>
              <option value="New York">New York</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="half-width">
            <label className="alllabels" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="alInputsandSelectBx"
              autoComplete='off'
            />
          </div>
        </div>

      
    <p className='pleasenote'><b>Please note:</b> We do not currently ship to P.O. boxes, nor addresses outside of the U.S. and Canada. To complete an order on Menards.com, you must specify a valid street address as the shipping destination.</p>
    <hr />

    <div className="lastcBtn">
      <button onClick={handleSubmit}>Continue</button>
    </div>
    </form>

   <div className="hc_div">
   <HelpCenter/>
   </div>

    </>
  )
}

export default CheckOutComponentBillingAdr
