import React from 'react'

const AccountHeader = () => {
  return (
    <div>
         <div className="accountheader-container">
        <div className="accountheader">
          <div className="twodivcontainer">
            <div className="firstaccountheaderdiv">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.N3-_hRk0071NKuApnZH4oAHaBl&pid=Api&P=0&h=220"
                alt=""
              />
              <p className="selectstore">Select Your Store</p>
              <select name="deliver" id="deliver">
                <option value="Deliver to">Deliver to</option>
                <option value="first">first</option>
                <option value="second">second</option>
                <option value="third">third</option>
                <option value="fourth">fourth</option>
              </select>
            </div>
            <div className="secondaccountheaderdiv">
              <select name="credit" id="credit">
                <option value="Credit Center">Credit Center</option>
                <option value="first">first</option>
                <option value="second">second</option>
                <option value="third">third</option>
                <option value="fourth">fourth</option>
              </select>

              <select name="help" id="help">
                <option value="help">Help</option>
                <option value="first">first</option>
                <option value="second">second</option>
                <option value="third">third</option>
                <option value="fourth">fourth</option>
              </select>

              <select name="Gifting" id="Gifting">
                <option value="Gifting">Gifting</option>
                <option value="first">first</option>
                <option value="second">second</option>
                <option value="third">third</option>
                <option value="fourth">fourth</option>
              </select>

              <p className="order-track">Order Tracker</p>
              <p className="rebate-center">Rebate Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountHeader
