import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const AccountNav = () => {
  return (
    <div>
            <div className="accountnavcontainer">
        <div className="accountnav">
          <div className="accountnavcenter">
            <div className="mainaccountnav">
              <div className="hamburgerbox">
              <MenuIcon sx={{fontSize:"30px" , color:"#fff"}}/>
              </div>
             <div className="hidebox">
             <select name="department" id="department">
                <option value="Department">Department</option>
              </select>

              <select name="Project Center" id="ProjectCenter">
                <option value="Project Center">Project Center</option>
              </select>

              <select name="Weekly Ad" id="WeeklyAd">
                <option value="Weekly Ad">Weekly Ad</option>
              </select>
             </div>
              <div className="divandinput">
                <div className="departmentsall">All Departments</div>
                <input
                  type="text"
                  placeholder="Enter SKU , Model # or Keyword"
                  className="headerInput"
                />
              </div>
              <select name="Sign In" id="SignIn">
                <option value="Sign In">Sign In</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountNav
