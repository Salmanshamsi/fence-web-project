import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar/Navbar';
import ZipCodeBar from '../components/Zip-Code-Bar/ZipCodeBar';
import DrawSelection from '../components/drawSelection/DrawSelection';


const MenuScreen = () => {
  
    // const Alert = () => {
    //     toast("Wow so easy!");
    // }

    return (
    <div>
                
                <Navbar/>
                <ZipCodeBar/>
                {/* <DrawSelection/> */}

                {/* <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            /> */}
    </div>
  )
}

export default MenuScreen